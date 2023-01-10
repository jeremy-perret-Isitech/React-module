import { formatClassList } from "../../../utils/common/styles"
import styles from "./Filter.module.css";
import { useState } from "react";

export const Filter = (props: any) => {
    const [selected, setSelected] = useState(props.selected)
    const classList = ['']

    const dropdownChangeHandler = (event: any) => {
        setSelected(event.target.value);
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className={formatClassList(styles, classList)}>
            <select value={selected} onChange={dropdownChangeHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}