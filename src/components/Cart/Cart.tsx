import styles from '../../styles/App.module.css'

interface Props {
    cartItems: string[];
    onClear: () => void;
}

const  Cart = ({cartItems, onClear}: Props) => {
  return (
    <> 

        <div>Cart</div>
        <ul>
            {cartItems.map(item => <li key={item}>{item}</li> )}
        </ul>
        <div className={styles.buttonGroup}>
            <button onClick={onClear}>Clear</button>
        </div>

    </>
  )
}

export default Cart