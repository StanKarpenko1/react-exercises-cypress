import { useState } from "react";
import Alert from "../components/Alert/Alert";
import GoHomeButton from "../components/GoHome";

const AlertPage = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div>
      <h1>Alert Page</h1>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          This is an alert message!
        </Alert>
      )}
      <GoHomeButton />
    </div>
  );
};

export default AlertPage;
