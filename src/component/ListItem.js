import classes from "./ListItem.module.css";
import { useState } from "react";

export default function List(props) {
  const month = new Date(props.date)
    .toLocaleString("en-US", { month: "long" })
    .slice(0, 3)
    .toUpperCase();
  const date = new Date(props.date).getDate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <div className={classes["date-container"]}>
          <p className={classes.month}>{month}</p>
          <p className={classes.date}>{date}</p>
        </div>
        <div className={classes["item-text"]}>
          <p className={classes.time}>{props.time}</p>
          <p>{props.title}</p>
        </div>
      </div>
      <button
        className={classes.button}
        onClick={() => props.onDelete(props.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ion-icon name={`trash${isHovered ? "" : "-outline"}`}></ion-icon>
      </button>
    </div>
  );
}
