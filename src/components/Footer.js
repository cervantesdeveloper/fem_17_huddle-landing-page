import React from 'react';
import styles from "../styles.module.css"

export default function Footer(){
    return(
        <footer> 
            <p className={styles.attribution}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
                Coded by <a href="https://cervantesdeveloper.com/" target="_blank" rel='noreferrer'>Cervantes Developer</a>.
            </p>
        </footer>
    )
}