import styles from "../styles.module.css";
import heroImage from "../assets/illustration-mockups.svg";
import Button from "./Button";

const HeroText = ()=>{
    return(
        <>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion
            </p>
        </>
    )
}

export default function Hero(){
    return(
        <div className={`${styles.hero} ${styles.container}`}>
            <img src={heroImage} alt=""/>
            <div>
                <HeroText />
                <Button />
            </div>
        </div>
    )
}