import React from "react";
import s from "./header.module.scss";
import searchIcon from "../../assets/search.png";
import notificationIcon from "../../assets/bell.png";
import avatarIcon from "../../assets/avatar.png";

const Header: React.FC = () => {
  return (
    <header className={s.container}>
      <div className={s.top}>
        <div className={s.title}>
          <h1>Title</h1>
        </div>
        <div className={s.menu}>
          <button className={s.search_icon}>
            <img src={searchIcon} alt="虫眼鏡" />
          </button>
          <button className={s.notification_icon}>
            <img src={notificationIcon} alt="通知" />
          </button>
          <button className={s.avatar_icon}>
            <img src={avatarIcon} alt="アバター" />
          </button>
          <button className={s.post_button}>投稿する</button>
        </div>
      </div>
      <div className={s.tablinks}>
        <ul>
          <li aria-current="page">Trending</li>
          <li>Following</li>
          <li>Explore</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
