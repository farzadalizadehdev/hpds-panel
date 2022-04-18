import React from 'react'
//skeleton loading
import ContentLoader from 'react-content-loader'

//Layout2 Skeletons
export const Loading4Box25 = () => {
    return (
        <ContentLoader
            viewBox="0 0 400 68"
            backgroundColor="#eeeeee"
            foregroundColor="#cccccc"
        >
            <rect x="0" y="0" rx="2" ry="2" width="23%" height="60" />
            <rect x="100" y="0" rx="2" ry="2" width="23%" height="60" />
            <rect x="200" y="0" rx="2" ry="2" width="23%" height="60" />
            <rect x="300" y="0" rx="2" ry="2" width="23%" height="60" />
        </ContentLoader>
    )
}

export const Loading1Box30 = () => {
    return (
        <ContentLoader
            backgroundColor="#eeeeee"
            foregroundColor="#cccccc"
            width='33.333333%'
            height={320}
        >
            <rect x="0" y="0" rx="4" ry="4" width='95%' height="300" />
        </ContentLoader>
    )
}

export const Loading4Box50 = () => {
    return (
        <ContentLoader
            viewBox="0 0 800 550"
            backgroundColor="#eeeeee"
            foregroundColor="#cccccc"
        >
            <rect x="0" y="0" rx="4" ry="4" width="46%" height="250" />
            <rect x="0" y="275" rx="4" ry="4" width="46%" height="250" />
            <rect x="50%" y="0" rx="4" ry="4" width="46%" height="250" />
            <rect x="50%" y="275" rx="4" ry="4" width="46%" height="250" />
        </ContentLoader>
    )
}
export const Loading2Box50 = () => {
    return (
        <ContentLoader
            viewBox="0 0 800 275"
            backgroundColor="#eeeeee"
            foregroundColor="#cccccc"
        >
            <rect x="0" y="0" rx="4" ry="4" width="46%" height="250" />
            <rect x="50%" y="0" rx="4" ry="4" width="46%" height="250" />
        </ContentLoader>
    )
}
export const Loading1Box100 = () => {
    return (
        <ContentLoader
            viewBox="0 0 800 425"
            backgroundColor="#eeeeee"
            foregroundColor="#cccccc"
        >
            <rect x="0" y="0" rx="4" ry="4" width='96%' height="400" />
        </ContentLoader>
    )
}


export const LoadingForm = () => {
    return (
        <ContentLoader
            width='50%'
            height={500}
            backgroundColor="#eeeeee"
            foregroundColor="#cccccc">
            <rect x="25" y="0" rx="3" ry="3" width="100%" height="100%" />
        </ContentLoader>
    )
}
