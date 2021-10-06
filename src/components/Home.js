import React from 'react'
import HomeRecentProjects from './HomeRecentProjects'
import HomeSocials from './HomeSocials'
import HomeTitle from './HomeTitle'

export default function Home() {
    return (
        <div className="home">
            <HomeSocials/>
            <HomeTitle/>
            <HomeRecentProjects/>
        </div>
    )
}
