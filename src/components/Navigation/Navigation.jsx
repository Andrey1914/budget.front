import React from "react";
import avatar from "../../img/avatar.jpg";
// import { signout } from "../../utils/icons";
import { menuItems } from "../../utils/menuItems";

import { NavStyled } from "./NavigationStyled";

export default function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Ми</h2>
          <p>Наш бюджет.</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">{/* <li>{signout} Sign Out</li> */}</div>
    </NavStyled>
  );
}
