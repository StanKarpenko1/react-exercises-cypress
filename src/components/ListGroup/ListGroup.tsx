import { useState } from "react";
import './ListGroup.css'
// import styled from 'styled-components'

interface Props {
  items: string[];
  heading: string; 
  onSelectItem: (item: string) => void; 
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No items found</p> : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li 
              className={`list-group-item ${selectedIndex === index ? "active" : ""}`} 
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListGroup;
