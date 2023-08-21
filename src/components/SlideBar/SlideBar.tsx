import { FC, useState } from 'react';

import './SlideBar.css';

interface SlideBarProps {
    imagePath: string;
    type: 'search' | 'notification';
}

const SlideBar: FC<SlideBarProps> = ({ type, imagePath }) => {
    const [isNotificationsExpanded, setNotificationExpanded] = useState<boolean>(false);

    function switchExpandNotifications() {
        setNotificationExpanded(!isNotificationsExpanded);
    }

    return (
        <div className={
            'utilities ' + (
                    type === 'search' 
                        ? 'utilities-search' 
                        : isNotificationsExpanded === false
                            ? 'utilities-notifications'
                            : 'utilities-notifications-active'
                )
            }>
            <button 
                className="btn-active"
                onClick={type === 'notification' ? switchExpandNotifications : undefined}>
                <img src={imagePath} alt="" className="btn-icon" />
            </button>
            { type === 'search' 
                ? <>
                    <input name="" id="" className="inpuit-search"></input>   
                </> 
                : <>
                    <select name="" id="" className="dropdown-notifications"></select>
                </>}
        </div>
        // <div className="header-utilities-container">
        //     <div className="utilities utilities-notifications">
        //         <button className="btn-active btn-notifications">
        //             <img src="/notification-icon.svg" alt="" className="btn-icon" />
        //         </button>
        //         <select name="" id="" className="dropdown-notifications"></select>
        //     </div>
        //     <div className="utilities utilities-search">
        //         <button className="btn-active btn-search">
        //             <img src="/search-icon.svg" alt="" className="btn-icon" />
        //         </button>
        //         <input name="" id="" className="inpuit-search"></input>
        //     </div>
        // </div>
    );
};

export default SlideBar;