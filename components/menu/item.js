import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function getColorName(string) {
    if (!string) return "";
    switch (string) {
        case "인기":
            return "popular";
        case "추천":
            return "recommend";
        case "신규":
            return "new";
        default:
            return "";
    }
}

export default function MenuItem({ product, styles }) {
    console.log(product);
    return (
        <li className={styles["list-item"]}>
            <Link href={`/menu/${product.id}`}>
                <div className={styles["item-badge"]}>
                    {product.properties.badge?.multi_select?.map((badge) => {
                        const colorName = getColorName(badge.name);
                        return (
                            <span key={badge.id} className={`${styles.badge} ${styles[colorName]}`}>
                                {badge.name}
                            </span>
                        );
                    })}
                </div>
                <figure className={`${styles["item-img"]} ${product.properties.sold_out.status.name === "품절" ? styles.soldOut : ""}`}>
                    {product.properties.cover_img?.files?.length ? (
                        <img src={product.properties.cover_img.files[0]?.file.url} alt="" />
                    ) : (
                        <div className={styles["no-img"]}>
                            <FontAwesomeIcon icon={faPaw} />
                        </div>
                    )}
                </figure>
                <div className={styles["item-category"]}>{product.properties.category.select?.name}</div>
                <div className={styles["item-title-wrapper"]}>
                    <div className={styles["item-title"]}>{product.properties.menu_name.title[0]?.plain_text}</div>
                    <div className={styles["item-price"]}>
                        {product.properties.price.number.toLocaleString()}
                        <span>원</span>
                    </div>
                </div>
                <div className={styles["item-content"]}>{product.properties.menu_description.rich_text[0].plain_text}</div>
            </Link>
        </li>
    );
}

/**
 * 
 * <div key={product.id}>
        <div>{product.properties.category.select?.name}</div>
        <div>
            {product.properties.badge.multi_select?.map((badge) => (
                <div key={badge.id}>{badge.name}</div>
            ))}
        </div>
        <figure>{product.properties.cover_img.files.length ? <img src={product.properties.cover_img.files[0]?.file.url} alt="" /> : <div>사진없음</div>}</figure>
        <div>{product.properties.menu_name.title[0]?.plain_text}</div>
        <div>{product.properties.price.number}</div>
    </div>
 */
