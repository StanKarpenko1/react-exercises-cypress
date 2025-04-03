import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Exercises:</h1>
      <ul>
        
        <li><Link to="/message">Message </Link></li>
        <li><Link to="/listGroup">List Group</Link></li>
        <li><Link to="/alert"> Alert </Link> </li>
        <li><Link to="/buttons"> Buttons </Link> </li>
        <li><Link to="/like"> Like </Link> </li>
        <li><Link to="/cart"> Clear Shoping Cart </Link> </li>
        <li><Link to="/text-expand"> Expand Text </Link> </li>
        <li><Link to="/form"> Form </Link> </li>
        <li><Link to="/expense-tracker"> Expense Tracker </Link> </li>

      </ul>
    </div>
  );
};

export default Home;
