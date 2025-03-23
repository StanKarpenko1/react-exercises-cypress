import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import styles from "./Like.module.css";

interface Props {
    status: boolean;
    onClick: () => void;
  }

const Like = ({status, onClick}: Props) => {
    const className = `${styles.heart} ${status ? styles.heartRed : styles.heartEmpty}`;

    return status ? (
        <FaHeart className={className} onClick={onClick}/>
    ) : (
        <CiHeart className={className} onClick={onClick}/>
    )   
}

export default Like