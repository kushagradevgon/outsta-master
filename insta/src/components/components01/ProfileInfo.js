import React from 'react';
import "./component_style/profileInfo.css";
import Description from "./Description"

function ProfileInfo() {
    return (
        <div className="profileInfo">
            <div className="dp">
                <img src="https://c4.wallpaperflare.com/wallpaper/349/999/616/anime-black-clover-asta-black-clover-wallpaper-preview.jpg" />
            </div>
            <div className="description">
                <Description />
            </div>
        </div>
    )
}

export default ProfileInfo
