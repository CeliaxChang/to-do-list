import { useState, useEffect } from "react";
import EditForm from "./component/EditForm";
import ListContainer from "./component/ListContainer";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const item = {
    title,
    date,
    time,
    id: Math.random(),
  };

  const getTitleHandler = (value) => {
    setTitle(value);
  };
  const getDateHandler = (value) => {
    setDate(value);
  };
  const getTimeHandler = (value) => {
    setTime(value);
  };
  const addItemHandler = (e) => {
    e.preventDefault();
    setItems((prev) => {
      return [item, ...prev];
    });

    setTitle("");
    setDate("");
    setTime("");
  };
  const deleteItemHandler = (id) => {
    const newArr = items.filter((item) => item.id !== id);
    setItems(newArr);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);


  return (
    <section className="container">
      <EditForm
        data={item}
        onTitle={getTitleHandler}
        onDate={getDateHandler}
        onTime={getTimeHandler}
        onAdd={addItemHandler}
      />
      <ListContainer data={items} onDelete={deleteItemHandler} />
    </section>
  );
}

export default App;
