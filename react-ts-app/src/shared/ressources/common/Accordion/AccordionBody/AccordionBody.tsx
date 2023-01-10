import { formatClassList } from "../../../../utils/common/styles";
import styles from "./AccordionBody.module.css";
import { useState } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";

export const AccordionBody = forwardRef((props: any, ref: any) => {
    const [extended, setExtended] = useState(false)

    const classList = [
        'AccordionBody',
        (props["expended"] ? 'expended' : 'd')
    ]



    useImperativeHandle(ref, () => ({
        toggleAccordion() {        
            setExtended(!extended);
        }
    }));

    return (
        <div className={formatClassList(styles, classList)}>
            {props.children}
        </div>
    )
});