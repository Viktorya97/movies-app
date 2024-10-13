import React, { useState } from 'react';
import './sidebar-menu.scss';

const SidebarMenu = ({ selectedItem = "Home", menuItems, profileInfo }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`sidebar-menu ${isOpened ? 'sidebar-menu_opened' : 'sidebar-menu_closed'}`}
      onMouseEnter={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}
    >
        <div className="sidebar-menu__profile">
          <div className="sidebar-menu__profile-avatar"><img src={profileInfo.image} alt="Profile" /></div>
          <div className="sidebar-menu__profile-name">{profileInfo.name}</div>
        </div>

        <div className={'sidebar-menu__items'}>
          {menuItems?.map((item, index) => (
            <div
              key={index}
              className={`sidebar-menu__item ${
                selectedItem === item.name ? "sidebar-menu__item_active" : ""
              }`}
            >
              <div className={"sidebar-menu__item-icon"}>{item.icon}</div>
              {isOpened && (
                <span className="sidebar-menu__item-text">{item.name}</span>
              )}
            </div>
          ))}
        </div>
      
        <div className="sidebar-menu__additional-menu">
          {profileInfo?.additionalMenuItems?.map((menuItem, index) => (
            <div key={index} className="sidebar-menu__additional-item">{menuItem}</div>
          ))}
        </div>
    </div>
  );
};

export default SidebarMenu;
