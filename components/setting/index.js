import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

export default function Setting({ changeSlideShowTime, autoTime }) {
    const handleTime = function (e) {
        changeSlideShowTime(e.target.value);
    };
    return (
        <div className={styles.settingWrapper}>
            <a href="https://www.notion.so/a7687f58631f442daa843c7b9271c829" className={styles.settingBtn} target="_blank">
                <div className={styles.label}>메뉴수정</div>
                <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a href="https://www.notion.so/a719b9df76a246c5ac82fc90b2ae9ff9" className={styles.settingBtn} target="_blank">
                <div className={styles.label}>문의내역</div>
                <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <div className={styles.settingBtn}>
                <div className={styles.label}>자동재생 속도</div>
                <div className={styles.controls}>
                    <label>
                        <input type="radio" value="5000" name="speed" onChange={handleTime} defaultChecked={autoTime == 5000} />
                        <span className={styles.controlBtn}>느리게</span>
                    </label>
                    <label className={styles.controlBtn}>
                        <input type="radio" value="3000" name="speed" onChange={handleTime} defaultChecked={autoTime == 3000} />
                        <span className={styles.controlBtn}>보통</span>
                    </label>
                    <label className={styles.controlBtn}>
                        <input type="radio" value="2000" name="speed" onChange={handleTime} defaultChecked={autoTime == 2000} />
                        <span className={styles.controlBtn}>빠르게</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
