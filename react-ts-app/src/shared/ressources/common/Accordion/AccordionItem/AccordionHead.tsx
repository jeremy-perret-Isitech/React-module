import styles from "./AccordionHead.module.css";
import { formatClassList } from "../../../../utils/common/styles";

export const AccordionHead = (props: any) => {
    const classList = ['accordionHead'];

    return (
        <div className={formatClassList(styles, classList)}>
            {props.children}
        </div>
    )
}