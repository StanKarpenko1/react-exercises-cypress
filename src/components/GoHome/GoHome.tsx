import { Link } from "react-router-dom";

function GoHomeButton() {
  return (
    <>
      <button>
        <Link to="/">Go Home</Link>
      </button>
    </>
  );
}

export default GoHomeButton
