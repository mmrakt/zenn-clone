import React from "react";
import s from "./top.module.scss";
import Category from "../../components/category";
import Books from "../../components/books";
import Layout from "../../components/layout";

const Top: React.FC = () => {
  return (
    <Layout>
      <main className={s.container}>
        <div className={s.category}>
          <Category category="tech" />
        </div>
        <div className={s.category}>
          <Category category="idea" />
        </div>
        <div className={s.category}>
          <Books />
        </div>
        <div className={s.category}>
          <Category category="featured" />
        </div>
      </main>
    </Layout>
  );
};

export default Top;
