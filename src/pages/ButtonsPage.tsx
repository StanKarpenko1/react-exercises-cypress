import { useState } from "react";
import Buttons from "../components/Buttons/Buttons";
import Alert from "../components/Alert/Alert";
import GoHomeButton from "../components/GoHome";

const ButtonsPage = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <div>
        <h1>Buttons Page</h1>

        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
        )}

        <Buttons color="primary" onClick={() => setAlertVisible(!alertVisible)}>
          Click Me
        </Buttons>
      </div>
      
      <div>
        <GoHomeButton />
      </div>
    </>
  );
};

export default ButtonsPage;
