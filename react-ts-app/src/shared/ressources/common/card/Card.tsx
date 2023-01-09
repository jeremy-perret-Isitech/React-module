import { Fragment, ReactElement } from "react"
import styles from './Card.module.css';
import { formatClassList } from "../../../utils/common/styles";

export const Card = (props: any) => {
    const classList = [
        'card',
        (props["hover-animated"] ? 'hover' : '')
    ]

    return (
        <Fragment>
            <div className={formatClassList(styles, classList)}>
                {props.children}
            </div>
        </Fragment>
    )
}