import React from "react";
import style from "./Percentage.module.css";

const Percentage = () => {
  return (
    <section className={style["main-container"]}>
      <div className={style.d}>
        <div className={style.percentage}>Percentage</div>
      </div>
      <div className={style.viewport}> viewport</div>
    </section>
  );
};

export default Percentage;
