import React from "react";
import s from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className={s.container}>
          <div className={s.top}>
            <div className={s.title}>
              <h1>Title</h1>
            </div>
            <div className={s.menu}>
              <button className={s.search_icon}>
                <img src="/images/search.png" alt="虫眼鏡" />
              </button>
              <button className={s.notification_icon}>
                <img src="/images/bell.png" alt="通知" />
              </button>
              <button className={s.avatar_icon}>
                <img src="/images/avatar.png" alt="アバター" />
              </button>
              <button className={s.post_button}>投稿する</button>
            </div>
          </div>
        </div>
      </header>
      <nav className={s.nav}>
        <ul>
          <li aria-current="page">Trending</li>
          <li>Following</li>
          <li>Explore</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
