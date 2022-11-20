import { useState, useEffect } from "react";
import Tab from "./tab";
import MenuItem from "../menuItem";
import styles from "./style.module.css";

export default function MenuList({ data }) {
    const [menus, setMenus] = useState(data);
    const [currentTab, setCurrentTab] = useState(0);

    const changeCategory = function (name, num) {
        if (name.length) {
            const filterdList = data.filter((item) => item.properties.category.select?.name === name);
            setMenus((prev) => filterdList);
        } else {
            setMenus((prev) => data);
        }

        setCurrentTab(num);
    };
    return (
        <div>
            <Tab styles={styles} handleTab={changeCategory} currentTab={currentTab} data={data} />
            <ul className={styles["menu-list"]}>
                {menus.map((item) => {
                    return <MenuItem product={item} key={item.id} />;
                })}
            </ul>
        </div>
    );
}
