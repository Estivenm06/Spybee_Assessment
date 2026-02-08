import React from "react";
import Image from "next/image";

import Logo from "@/public/spybeeLogo.webp";
import userIcon from "@/public/user.svg";
import downArrowIcon from "@/public/downArrow.svg";

import { Avatar } from "../Avatar/avatar";

import stylesHeader from "./header.module.css";

const avatarStyles = {
  backgroundColor: "#FAC30F",
};

export const Header = () => {
  return (
    <header className={stylesHeader.headerContainer}>
      <div>
        <Image
          src={Logo}
          alt="Spybee Logo"
          preload={true}
          className={stylesHeader.spybeeLogo}
        />
      </div>
      <div className={stylesHeader.user}>
        <Avatar
          styles={avatarStyles}
          user={<Image src={userIcon} alt="User Icon" height={20} width={20} />}
        />
        <div className={stylesHeader.userTitle}>
          <h1>Marco</h1>
          <span>Administrador</span>
        </div>
        <div>
          <Image
            src={downArrowIcon}
            alt="Down Arrow Icon"
            height={30}
            width={30}
            style={{ color: "#fff" }}
          />
        </div>
      </div>
    </header>
  );
};
