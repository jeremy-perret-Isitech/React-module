import { Fragment, useState } from "react";
import styles from './PrimaryButton.module.css';

export const PrimaryButton = (props: any) => {
    
    const [data, setData] = useState(props.text);
    const [bounce, setBounce] = useState(false);

    const changeValue = () => {
        data === "Changed" ? setData(props.text) : setData("Changed");
    }

    const toggleBounce = () => {
        setBounce(!bounce);
    }
    
    return (
        <Fragment>
            <h1>{data}</h1>
            <button className={styles.button} onClick={changeValue} onMouseEnter={toggleBounce} onMouseLeave={toggleBounce}>{props.text}</button>
        </Fragment>
    )
}