#! /usr/bin/env bash
set -o xtrace
set -o errexit
set -o nounset

function version_gt() { test "$(printf '%s\n' "$@" | sort -V | head -n 1)" != "$1"; }

root_dir=$(pwd)
fe_version=$(cat '/etc/sab_management/fe/version.txt' | awk -F'=' '{print $2}' | grep '\.' | xargs) # xargs is for removing junk spaces

#ssh spa "systemctl stop sabman_fe_stream"
#ssh spb "systemctl stop sabman_fe_stream"

# copy new files
cd ..
rsync -avzh * /etc/sab_management/fe

cd $root_dir

# default sort is by name, this is our desired sort to run updates from lowest to highest
for update_dir in $(find . -type d); do
    update_package_version=$(echo $(basename "$update_dir") | sed 's/\.//g' | xargs)

    if [[ -z $update_package_version ]]; then
        continue
    fi

    if version_gt $update_package_version $fe_version; then
        # run update package installer
        echo "updating UI to version '$update_package_version' ..."
        cd $update_dir

        if [[ -e "INSTALL.sh" ]];then
            bash INSTALL.sh
        fi

        cd $root_dir
    fi
done

update_dir=$root_dir/all
# run update package installer for the 'all' folder
cd $update_dir

if [[ -e "INSTALL.sh" ]];then
    echo "installing general updates ..."
    bash INSTALL.sh
fi

cd $root_dir

rsync -avzh /etc/sab_management/fe spa:/etc/sab_management
rsync -avzh /etc/sab_management/fe spb:/etc/sab_management

# reload all services to load new binaries. reload EXPLICITLY . DON'T RELOAD SABMAN_API (api reload causes error in UI)
#ssh spa "systemctl restart sabman_fe_stream"
#ssh spb "systemctl restart sabman_fe_stream"

echo "update done"

# reload all services to load new binaries
#systemctl restart sabman_fe_stream
systemctl restart sabman_fe_webserver
