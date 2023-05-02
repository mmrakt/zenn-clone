import React from "react";
import s from "./main.module.scss";
import data from "../../data/posts.json";

const Main: React.FC = () => {
  Object.entries(data.tech).forEach((post) => {
    console.log(post[1].title);
  });
  return (
    <main className={s.container}>
      <section className={s.section}>
        <div className={s.title}>
          <h2>Tech</h2>
        </div>
        <div className={s.body}>
          <ul className={s.list}>
            {Object.entries(data.tech).map((post) => (
              <li className={s.item} key={post[0]}>
                <a href="#">
                  <div className={s.item_image}>
                    <img
                      src={`/images/${post[1].image}`}
                      alt="記事のアイコン"
                    />
                  </div>
                </a>
                <div className={s.item_body}>
                  <h3 className={s.item_title}>{post[1].title}</h3>
                  <div className={s.item_inner}>
                    <div className={s.item_icon}>
                      <img
                        src="/images/author_icon.png"
                        alt="著者のアイコン"
                        width={30}
                        height={30}
                      />
                    </div>
                    <span className={s.item_name}>{post[1].name}</span>
                    <span className={s.item_published_date}>
                      {post[1].published_date}
                    </span>
                    <p className={s.item_likes}>
                      <img src="/images/like.png" alt="ライクボタン" />
                      <span>{post[1].likes}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.more}>
          <a href="#">
            <span>トレンドをもっと見る</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Main;
