import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaw } from "@fortawesome/free-solid-svg-icons";
export default function Detail({ item }) {
    const router = useRouter();
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

    return (
        <div className={styles.productView}>
            <div className={styles.viewLeft}>
                {item.properties.cover_img?.files?.length ? (
                    <img src={item.properties.cover_img.files[0]?.file.url} alt="" />
                ) : (
                    <div className={styles["no-img"]}>
                        <FontAwesomeIcon icon={faPaw} />
                    </div>
                )}
            </div>
            <div className={styles.viewRight}>
                <button type="button" className={styles.goBack} onClick={() => router.back()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <section className={styles.productSummary}>
                    <div className={styles.itemBadge}>
                        {item.properties.badge?.multi_select?.map((badge) => {
                            const colorName = getColorName(badge.name);
                            return (
                                <span key={badge.id} className={`${styles.badge} ${styles[colorName]}`}>
                                    {badge.name}
                                </span>
                            );
                        })}
                    </div>
                    <div className={styles.category}>{item.properties.category.select?.name}</div>
                    <div className={styles.title}>{item.properties.menu_name.title[0]?.plain_text}</div>
                    <div className={styles.content}>{item.properties.menu_description.rich_text[0].plain_text}</div>
                </section>
                <section className={styles.price}>
                    <span>판매가</span>
                    {item.properties.price.number.toLocaleString()}원
                </section>
                <section className={styles.btnWrapper}>
                    {item.properties.store_link.url && (
                        <a href={item.properties.store_link.url} className={styles.storeBtn}>
                            스마트스토어 구매하기
                        </a>
                    )}
                    <Link
                        href={{
                            pathname: "/contact",
                            query: {
                                askTemplate: `문의상품 : ${item.properties.category.select?.name}-${item.properties.menu_name.title[0]?.plain_text}`,
                            },
                        }}
                        as="/contact"
                        legacyBehavior
                    >
                        <a className={styles.contactBtn}>대량/예약주문 하기</a>
                    </Link>
                </section>
            </div>
        </div>
    );
}
