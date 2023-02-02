import styles from "../styles.module.css";

export default function Button(){
    return(
        <button className={`${styles.btn} ${styles.cta}`}> Register </button>

    )
}