import { Link } from "react-router-dom";
import styles from '../../styles/App.module.css'

function GoHomeButton() {
  return (
    <>
    <div className={styles.buttonGroup}>
    <button>
        <Link to="/">Go Home</Link>
      </button>

    </div>
      
    </>
  );
}

export default GoHomeButton
