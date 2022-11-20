import Link from "next/link";
import Badge from "../badge";
import Thumbnail from "../thumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

export default function MenuItem({ product, link }) {
    return (
        <li className={styles["list-item"]}>
            <Link href={`/menu/${product.id}`} className={link !== undefined && !link && styles.disabled}>
                <div className={styles["item-badge"]}>
                    <Badge badges={product.properties.badge?.multi_select} />
                </div>
                <figure className={`${styles["item-img"]} ${product.properties.sold_out.status.name === "품절" ? styles.soldOut : ""}`}>
                    {product.properties.cover_img?.files?.length ? (
                        <Thumbnail url={product.properties.cover_img.files[0]?.name} size={"c_fill,h_440,w_440"} />
                    ) : (
                        <div className={styles["no-img"]}>
                            <FontAwesomeIcon icon={faPaw} />
                        </div>
                    )}
                </figure>
                <div className={styles["item-category"]}>{product.properties.category.select?.name}</div>
                <div className={styles["item-title-wrapper"]}>
                    <div className={styles["item-title"]}>{product.properties.menu_name?.title[0]?.plain_text}</div>
                    <div className={styles["item-price"]}>
                        {product.properties.price.number?.toLocaleString()}
                        <span>원</span>
                    </div>
                </div>
                <div className={styles["item-content"]}>{product.properties.menu_description?.rich_text[0]?.plain_text}</div>
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
