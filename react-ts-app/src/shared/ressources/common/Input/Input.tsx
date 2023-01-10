import { formatClassList } from "../../../utils/common/styles"
import styles from "./Input.module.css";

export const Input = (props: any) => {
    const classList = ['']
    return (
        <div className={formatClassList(styles, classList)}>
            {props.children}
        </div>
    )
}