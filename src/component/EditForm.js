import { useRef } from "react";
import classes from "./EditForm.module.css";
import Card from "./UI/Card";
export default function EditForm(props) {
  const { date, time, title } = props.data;
  const titleRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const titleInput = () => props.onTitle(titleRef.current.value);
  const dateInput = () => props.onDate(dateRef.current.value);
  const timeInput = () => props.onTime(timeRef.current.value);
  // const isDisabled = !title || !date || !time;
  return (
    <Card>
      <h2 className={classes.title}>Todo List</h2>
      <form className={classes.form} onSubmit={props.onAdd}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          ref={titleRef}
          value={title}
          onChange={titleInput}
          required
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          ref={dateRef}
          value={date}
          min="2022-06-24"
          onChange={dateInput}
          required
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="time"
          ref={timeRef}
          value={time}
          onChange={timeInput}
          required
        />
        <button className={classes.button} >
          Add
        </button>
      </form>
    </Card>
  );
}
