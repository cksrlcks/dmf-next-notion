export default function Tab({ styles, filters, filter, onFilterChange, data }) {
    return (
        <div className={styles["category-tab"]}>
            {filters.map((item) => {
                const count = item === "전체" ? data.length : data.filter((menu) => menu.properties.category.select?.name === item).length;
                return (
                    <button type="button" className={`${styles["tab-item"]} ${item === filter ? styles.on : ""}`} onClick={() => onFilterChange(item)} data-num={count}>
                        {item}
                    </button>
                );
            })}
        </div>
    );
}
