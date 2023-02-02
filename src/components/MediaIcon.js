import styles from "../styles.module.css";
import Icon from "./Icon.js"

export default function MediaIcon({svg, classes, title, fill}){
    
    return(
        <div className={styles.icon}>
            <Icon svg={svg} classes={classes} title={title} fill={fill}/>
        </div>
    )
}