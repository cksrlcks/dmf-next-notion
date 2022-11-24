import { useState, useEffect } from "react";
import Tab from "./tab";
import MenuItem from "../menuItem";
import styles from "./style.module.css";

const filters = ["전체", "뼈간식", "건조간식", "화식", "베이커리"];
const getFilteredLists = (originList, filterName) => {
    if (filterName === "전체") {
        return originList;
    }
    return originList.filter((item) => item.properties.category.select?.name === filterName);
};

export default function MenuList({ data }) {
    const [filter, setFilter] = useState(filters[0]);
    const filtered = getFilteredLists(data, filter);

    return (
        <div>
            <Tab styles={styles} filters={filters} filter={filter} onFilterChange={setFilter} data={data} />
            <ul className={styles["menu-list"]}>
                {filtered.map((item) => {
                    return <MenuItem product={item} key={item.id} />;
                })}
            </ul>
        </div>
    );
}
