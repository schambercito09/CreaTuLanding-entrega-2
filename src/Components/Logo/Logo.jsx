import styles from "./Logo.module.css"

import logo from "./assets/logo.png";

export const Logo = () => {
  return (
    <div>
        <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default logo