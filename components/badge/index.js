import styles from "./style.module.css";

export default function Badge({ badges }) {
    function getColorName(string) {
        if (!string) return "";
        let badgeString = "";
        switch (string) {
            case "추천":
                badgeString = "rec";
                break;
            case "인기":
                badgeString = "popular";
                break;
            case "신규":
                badgeString = "new";
                break;
            case "온라인전용":
                badgeString = "online";
                break;
            default:
                badgeString = "";
        }
        return badgeString;
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
