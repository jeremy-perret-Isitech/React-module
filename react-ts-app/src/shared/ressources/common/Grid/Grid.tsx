import styles from './Grid.module.css';

export const Grid = (props: any) => {
    return (
        <div className={styles.grid}>
            {props.children}
        </div>
    )
}