import styles from "./style.module.css";

const colorSet = {
    추천: "rec",
    인기: "popular",
    신규: "new",
    온라인전용: "online",
};

export default function Badge({ badges }) {
    function getColorName(string) {
        return colorSet[string] ? colorSet[string] : "";
    }

    return (
        <>
            {badges.map((badge) => {
                const colorName = getColorName(badge.name);
                return (
                    <span key={badge.id} className={`${styles.badge} ${styles[colorName]}`}>
                        {badge.name}
                    </span>
                );
            })}
        </>
    );
}
