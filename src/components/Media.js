import styles from "../styles.module.css";
import MediaIcon from "./MediaIcon.js";



export default function Media(){
    return(
        <div className={`${styles.container} ${styles.media}`}>
            <MediaIcon svg="facebook" classes="svg-icon" title="Facebook" fill="white"/>
            <MediaIcon svg="instagram" classes="svg-icon" title="Instagram" fill="white"/>
            <MediaIcon svg="twitter" classes="svg-icon" title="Twitter" fill="white"/>
        </div>
    )
}