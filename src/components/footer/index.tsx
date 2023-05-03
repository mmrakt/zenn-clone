import React from "react";
import s from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.container}>
      <div className={s.inner}>
        <div className={s.site}>
          <h3>〇〇</h3>
          <span>
            エンジニアのための<br aria-hidden="true"></br>情報共有コミュニティ
          </span>
        </div>
        <div className={s.nav_container}>
          <nav className={s.nav}>
            <h4 className="">About</h4>
            <ul>
              <a href="">
                <li>〇〇について</li>
              </a>
              <a href="">
                <li>運営会社</li>
              </a>
              <a href="">
                <li>お知らせ・リリース</li>
              </a>
            </ul>
          </nav>
          <nav className={s.nav}>
            <h4 className="">Guides</h4>
            <ul>
              <a href="">
                <li>使い方</li>
              </a>
              <a href="">
                <li>Publication</li>
              </a>
              <a href="">
                <li>よくある質問</li>
              </a>
            </ul>
          </nav>
          <nav className={s.nav}>
            <h4 className="">Links</h4>
            <ul>
              <a href="">
                <li>Twitter</li>
              </a>
              <a href="">
                <li>Github</li>
              </a>
              <a href="">
                <li>メディアキット</li>
              </a>
            </ul>
          </nav>
          <nav className={s.nav}>
            <h4 className="">Legal</h4>
            <ul>
              <a href="">
                <li>利用規約</li>
              </a>
              <a href="">
                <li>プライバシーポリシー</li>
              </a>
              <a href="">
                <li>特商法表記</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
      <div className={s.company}>
        <a href="">
          <span>mimucompany</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
