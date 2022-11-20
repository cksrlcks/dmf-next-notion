import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faBone, faPaperPlane, faGear, faList } from "@fortawesome/free-solid-svg-icons";
import storeIcon from "../../public/assets/img/store-icon.svg";
import styles from "./style.module.css";
const Nav = () => {
    const { pathname } = useRouter();
    return (
        <nav className={styles.nav}>
            <Link href="/setting" legacyBehavior>
                <a className={`${pathname?.includes("/setting") ? styles.active : ""} ${styles.setting}`} title="설정">
                    <FontAwesomeIcon icon={faGear} />
                    <span className="a11y">설정</span>
                </a>
            </Link>
            <ul>
                <li>
                    <Link href="/menu" legacyBehavior>
                        <a className={pathname?.includes("/menu") ? styles.active : ""} title="전체메뉴">
                            <FontAwesomeIcon icon={faBone} />
                            <span className="a11y">메뉴</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/show" legacyBehavior>
                        <a className={pathname?.includes("/show") ? styles.active : ""} title="슬라이드쇼">
                            <FontAwesomeIcon icon={faCirclePlay} />
                            <span className="a11y">슬라이드쇼</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" legacyBehavior>
                        <a className={pathname?.includes("/contact") ? styles.active : ""} title="문의">
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span className="a11y">문의</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/board" legacyBehavior>
                        <a className={pathname?.includes("/board") ? styles.active : ""} title="페이징 연습">
                            <FontAwesomeIcon icon={faList} />
                            <span className="a11y">페이징 연습</span>
                        </a>
                    </Link>
                </li>
            </ul>

            <div className={styles.store}>
                <a href="https://smartstore.naver.com/dmafs" target="_blank">
                    <Image src={storeIcon} alt="스마트스토어 바로가기" />
                    <span className="a11y">스마트스토어</span>
                </a>
            </div>
        </nav>
    );
};

export default Nav;
