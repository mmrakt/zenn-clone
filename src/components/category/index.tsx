import React from "react";
import s from "./category.module.scss";
import posts from "../../data/posts.json";

type IProps = {
  category: "tech" | "idea" | "featured";
};
const Category: React.FC<IProps> = ({ category }) => {
  const tooltipText = () => {
    if (category === "tech") {
      return (
        <p>
          プログラミングなどの技術<br></br>についての知見
        </p>
      );
    } else if (category === "idea") {
      return <p>キャリア、チーム、仕事論、ポエムなど</p>;
    } else return;
  };
  return (
    <section className={`${s.section} ${s[category]}`}>
      <div className={s.container}>
        <div className={s.title}>
          <h2>
            {category === "tech"
              ? "Tech"
              : category === "idea"
              ? "Idea"
              : "Featured"}
          </h2>
          {category !== "featured" && (
            <div className={s.tooltip}>
              <button>?</button>
              <div className={s.tooltip_body}>{tooltipText()}</div>
            </div>
          )}
        </div>
        <div className={s.body}>
          <ul className={s.list}>
            {posts[category].map((post) => (
              <li className={s.item} key={post.slug}>
                <a href={post.slug} className={s.item_link}>
                  <div className={s.item_image}>
                    <img src={`/images/${post.image}`} alt="記事のアイコン" />
                  </div>
                  <div className={s.item_body}>
                    <h3 className={s.item_title}>{post.title}</h3>
                    <div className={s.item_inner}>
                      <div className={s.item_icon}>
                        <img
                          src="/images/author_icon.png"
                          alt="著者のアイコン"
                          width={30}
                          height={30}
                        />
                      </div>
                      <span className={s.item_name}>{post.name}</span>
                      <span className={s.item_published_date}>
                        {post.published_date}
                      </span>
                      <p className={s.item_likes}>
                        <img src="/images/like.png" alt="ライクボタン" />
                        <span>{post.likes}</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.more}>
          {category !== "featured" && (
            <a href="#">
              <span>
                {category === "tech"
                  ? "トレンドをもっと見る"
                  : "記事をさらに探す"}
              </span>
              <span>→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
