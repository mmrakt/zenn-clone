import React, { useState } from "react";
import s from "./header.module.scss";
import { clsx } from "clsx";

const popupMenuItems = [
  {
    image: "scrap.png",
    text: "スクラップの管理",
    link: "",
    endSection: false,
  },
  {
    image: "post.png",
    text: "記事の管理",
    link: "",
    endSection: false,
  },
  {
    image: "book_mini.png",
    text: "本の管理",
    link: "",
    endSection: false,
  },
  {
    image: "pull_request.png",
    text: "GitHubからのデプロイ",
    link: "",
    endSection: false,
  },
  {
    image: "like.png",
    text: "いいねした投稿",
    link: "",
    endSection: false,
  },
  {
    image: "bookmark.png",
    text: "読んでいる本",
    link: "",
    endSection: false,
  },
  {
    image: "yen.png",
    text: "収益ダッシュボード",
    link: "",
    endSection: false,
  },
  {
    image: "setting.png",
    text: "アカウント設定",
    link: "",
    endSection: true,
  },
  {
    image: "logout.png",
    text: "ログアウト",
    link: "",
    endSection: false,
  },
];

const Header: React.FC = () => {
  const [shownPopup, setShownPopup] = useState(false);

  return (
    <>
      <header>
        <div className={s.container}>
          <div className={s.top}>
            <div className={s.title}>
              <h1>Zenn Clone</h1>
            </div>
            <div className={s.menu}>
              <button className={s.search_icon}>
                <img src="/images/search.png" alt="虫眼鏡" />
              </button>
              <button className={s.notification_icon}>
                <img src="/images/bell.png" alt="通知" />
              </button>
              <div className={s.popup_container}>
                <button
                  className={s.avatar_icon}
                  onClick={() => {
                    setShownPopup((prevState) => !prevState);
                  }}
                >
                  <img src="/images/avatar.png" alt="アバター" />
                </button>
                <div className={`${s.popup_menu} ${shownPopup ? s.shown : ""}`}>
                  <div className={s.popup_account_name}>
                    <h3>mimu</h3>
                    <span>@mmrakt</span>
                  </div>
                  <div className={s.popup_body}>
                    <ul className={s.popup_list}>
                      {popupMenuItems.map((item) => (
                        <li
                          key={item.image}
                          className={clsx(
                            item.endSection
                              ? s["popup_item--bottomLine"]
                              : s.popup_item
                          )}
                        >
                          <a href={item.link}>
                            <img src={`/images/${item.image}`} alt="" />
                            <span>{item.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
