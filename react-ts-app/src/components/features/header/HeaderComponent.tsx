import { Fragment } from "react"
import styles from "./HeaderComponent.module.css";

export const HeaderComponent = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <div className="content">
                    <h1>Header part</h1>
                </div>
            </div>
        </Fragment>
    )
}