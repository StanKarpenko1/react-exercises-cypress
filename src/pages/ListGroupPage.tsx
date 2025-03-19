import ListGroup from "../components/ListGroup/ListGroup";
import GoHomeButton from "../components/GoHome";

const ListGroupPage = () => {
  const items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
  
  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <div>
      <h1>List Group Page</h1>
      <ListGroup 
        items={items} 
        heading="List of Items:" 
        onSelectItem={handleSelectItem} 
      />
      <GoHomeButton />
    </div>
  );
};

export default ListGroupPage;
