import { formatClassList } from "../../../../utils/common/styles";
import styles from "./Accordion.module.css";

export const Accordion = (props: any) => {
    const classList = [
        'accordion'
    ]
    return (
        <div className={formatClassList(styles, classList)}>
            {props.children}
        </div>
    )
}