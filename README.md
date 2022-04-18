# UI-v3

Clone down this repository. You will need node and npm installed globally on your machine.

##To Install:
### npm install
<br>

##To Run Test Suite:
### npm test
<br>

##To Start Server:
### npm start
<br>

##To Build Project:
### npm run build
<br>

##To Visit App:
### localhost:3000

<br>
<br>

###Note:
project mode is read from the const 'DEV' in src/api/api.js
<br>
it can be in mode of 'dev' for development or another value for other states.
<br>
the ip in RELEASE mode (other than develop mode!), is read from the browser.
<br>
to use in develop mode, you must have the .env file in the root of the project, containing the following variables.
<br>
to use a specific ip, add these lines to .env file in the project. if you don't have the .env file, create it!
<br>
<br>
for example:
####REACT_APP_SERVER_IP = 172.20.13.111
####REACT_APP_SERVER_PORT = 8181