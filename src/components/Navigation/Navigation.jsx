import React from "react";
import avatar from "../../img/avatar.jpg";
// import { signout } from "../../utils/icons";
import { menuItems } from "../../utils/menuItems";

import { NavStyled, UserContainer, SignOutIcon } from "./NavigationStyled";

import { Typography, Avatar, Button } from "@mui/material";

export default function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <UserContainer>
        <Avatar
          src={avatar}
          alt="Users avatar"
          sx={{ width: 56, height: 56 }}
        />
        <div className="text">
          <Typography component="h2" variant="h4">
            Ми
          </Typography>
          <Typography component="p">Наш бюджет.</Typography>
        </div>
      </UserContainer>
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
      <Button variant="text">
        <SignOutIcon /> Sign Out
        {/* {signout} Sign Out */}
      </Button>
    </NavStyled>
  );
}
