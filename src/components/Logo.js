import logo from "../assets/logo.svg";
import styles from "../styles.module.css";

export default function Logo(){
    return(
        <div className={styles.container}>
            <a href="https://fem-17-huddle-landingpage.netlify.app/" >
                <img src={logo} alt="logo" className={styles.logo}/>
            </a>
        </div>
    )
}