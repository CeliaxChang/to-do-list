import { useEffect, useState } from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem";

const List = (props) => {
  const [isSort, setIsSort] = useState(false);

  const showItem = props.data.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      title={item.title}
      date={item.date}
      time={item.time}
      onDelete={props.onDelete}
    />
  ));

  const sortHandler = () => {
    setIsSort((prev) => !prev);
  };

  useEffect(() => {
    if (isSort) {
      setIsSort(false);
      props.data.sort((a, b) => {
        const prevDate = +a.date.replaceAll("-", "");
        const nextDate = +b.date.replaceAll("-", "");
        const prevTime = +a.time.replaceAll(":", "");
        const nextTime = +b.time.replaceAll(":", "");
        let sortItem;
        if (prevDate !== nextDate) {
          sortItem = prevDate - nextDate;
        } else {
          sortItem = prevTime - nextTime;
        }
        return sortItem;
      });
    }
  }, [isSort, props.data]);

  return (
    <div className={classes.container}>
      <div className={classes["btn-container"]}>
        <button className={classes["btn-sort"]} onClick={sortHandler}>
          <ion-icon name="swap-vertical-outline"></ion-icon>
        </button>
      </div>
      {showItem}
    </div>
  );
};

export default List;
