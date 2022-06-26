import Card from "./UI/Card";
import List from "./List";

const ListContainer = (props) => {
  return (
    <Card>
      {!props.data.length && <p>There's nothing left to do!</p>}
      {props.data.length !== 0 && <List data={props.data} onDelete={props.onDelete}/>}
    </Card>
  );
};

export default ListContainer;
