import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => {
        return(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>     
            <p>{topic}</p>
        </div>
        )
    };
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4E16AQEtEm6h35WdDQ/profile-displaybackgroundimage-shrink_200_800/0/1593486790644?e=1615420800&v=beta&t=KmnMGI0X-AvD8D3tMWl9PZU3SslAqEnr-kOa3t8N89M" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Harsh Virani</h2>
                <h4>hvirani@asu.edu</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">420</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">69</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {['reactjs','programming','softwareengineering','developer']
                    .map(topic => recentItem(topic))}
         
            </div>
        </div>
    )
}

export default Sidebar
