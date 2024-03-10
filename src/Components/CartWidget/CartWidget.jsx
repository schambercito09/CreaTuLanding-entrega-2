import styles from "./CartWidget.module.css"

import cart from "./assets/cart.png";


export const CartWidget = () => {
  return (
    <div>
        <img className={styles.cart}  src={cart} alt="Cart-Widget" />
        0
    </div>
  )
}

export default CartWidget