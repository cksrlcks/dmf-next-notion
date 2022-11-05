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
                    <label className={styles.controlBtn}>
                        <input type="radio" value="2000" name="speed" onChange={handleTime} defaultChecked={autoTime == 2000} />
                        2초
                    </label>
                    <label className={styles.controlBtn}>
                        <input type="radio" value="4000" name="speed" onChange={handleTime} defaultChecked={autoTime == 4000} />
                        4초
                    </label>
                    <label className={styles.controlBtn}>
                        <input type="radio" value="6000" name="speed" onChange={handleTime} defaultChecked={autoTime == 6000} />
                        6초
                    </label>
                </div>
            </div>
        </div>
    );
}
