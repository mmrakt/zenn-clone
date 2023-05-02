import React from "react";
import s from "./main.module.scss";
import Category from "../category";

const Main: React.FC = () => {
  return (
    <main className={s.container}>
      <div className={s.category}>
        <Category category="tech" />
      </div>
      <div className={s.category}>
        <Category category="idea" />
      </div>
    </main>
  );
};

export default Main;
