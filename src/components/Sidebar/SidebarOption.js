import React from 'react'
import './SidebarOption.css'


function SidebarOption({text, Icon}) {
    return (
        <div className="sidebar-option">
             {text} <Icon/>
        </div>
    )
}

export default SidebarOption
