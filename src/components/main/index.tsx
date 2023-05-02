import React from "react";
import s from "./main.module.scss";
import Category from "../category";
import Books from "../books";

const Main: React.FC = () => {
  return (
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
    </main>
  );
};

export default Main;
