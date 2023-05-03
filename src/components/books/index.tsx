import React from "react";
import s from "./books.module.scss";
import data from "../../data/books.json";

const Books: React.FC = () => {
  return (
    <section className={`${s.section}`}>
      <div className={s.container}>
        <div className={s.title}>
          <h2>Books</h2>
        </div>
        <div className={s.body}>
          <ul className={s.list}>
            {Object.entries(data).map((book) => (
              <li className={s.item} key={book[0]}>
                <a href="#">
                  <div className={s.item_image}>
                    <img src={`/images/${book[1].image}`} alt="本のアイコン" />
                  </div>
                </a>
                <div className={s.item_body}>
                  <h3 className={s.item_title}>
                    {book[1].title.length > 30
                      ? book[1].title.slice(0, 30) + "..."
                      : book[1].title}
                  </h3>
                  <div className={s.item_inner}>
                    <div className={s.item_icon}>
                      <img
                        src="/images/author_icon.png"
                        alt="著者のアイコン"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className={s.item_inner_right}>
                      <span className={s.item_name}>{book[1].name}</span>
                      <p className={s.item_likes}>
                        <img src="/images/like.png" alt="ライクボタン" />
                        <span>{book[1].likes}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.more}>
          <a href="#">
            <span>ブックストアで本を探す</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Books;
