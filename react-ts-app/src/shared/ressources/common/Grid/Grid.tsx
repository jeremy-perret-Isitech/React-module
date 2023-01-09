import { Fragment, ReactElement } from "react"
import styles from './Grid.module.css';

export const Grid = (props: any) => {
    return (
        <Fragment>
            <div className={styles.grid}>
                {props.children}</div>
        </Fragment>
    )
}