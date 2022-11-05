export default function Tab({ styles, handleTab, currentTab, data }) {
    const allNum = data.length;
    const category01Num = data.filter((item) => item.properties.category.select?.name === "뼈간식").length;
    const category02Num = data.filter((item) => item.properties.category.select?.name === "건조간식").length;
    const category03Num = data.filter((item) => item.properties.category.select?.name === "화식").length;
    const category04Num = data.filter((item) => item.properties.category.select?.name === "베이커리").length;
    return (
        <div className={styles["category-tab"]}>
            <button type="button" onClick={() => handleTab("", 0)} className={`${styles["tab-item"]} ${currentTab === 0 ? styles.on : ""}`} data-num={allNum}>
                전체
            </button>
            <button type="button" onClick={() => handleTab("뼈간식", 1)} className={`${styles["tab-item"]} ${currentTab === 1 ? styles.on : ""}`} data-num={category01Num}>
                뼈간식
            </button>
            <button type="button" onClick={() => handleTab("건조간식", 2)} className={`${styles["tab-item"]} ${currentTab === 2 ? styles.on : ""}`} data-num={category02Num}>
                건조간식
            </button>
            <button type="button" onClick={() => handleTab("화식", 3)} className={`${styles["tab-item"]} ${currentTab === 3 ? styles.on : ""}`} data-num={category03Num}>
                화식
            </button>
            <button type="button" onClick={() => handleTab("베이커리", 4)} className={`${styles["tab-item"]} ${currentTab === 4 ? styles.on : ""}`} data-num={category04Num}>
                베이커리
            </button>
        </div>
    );
}
