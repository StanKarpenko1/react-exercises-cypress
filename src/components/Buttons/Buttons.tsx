import { useState } from "react";
import Alert from "../Alert/Alert";

interface Props {
    children: string
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void 
}

const Buttons = ({children, color = "primary"}: Props) => {

    const [alertVisible, setAlertVisible] =  useState(false)

  return (
    <>
        {alertVisible && <Alert onClose={() => setAlertVisible(false)}> My alert </Alert>}

        <button 
            className={"btn btn-" + color} 
            onClick={() => setAlertVisible(!alertVisible)}> {children} </button>
        
    </>
  )
}

export default Buttons