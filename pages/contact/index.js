import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styles from "./style.module.css";
export default function ContactPage() {
    const router = useRouter();
    const initalAskTemplate = router.query.askTemplate;
    const renderTemplate = `${initalAskTemplate}\n----------------------------\n기타요청사항을 적어주세요`;
    const defaultValue = initalAskTemplate ? renderTemplate : "주문을 원하시는 상품을 적어주세요";

    const [loading, setLoading] = useState(false);
    const nameInput = useRef(null);
    const phoneInput = useRef(null);
    const mailInput = useRef(null);
    const contentInput = useRef(null);

    const isEmail = (email) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        return emailRegex.test(email);
    };

    const submitContact = async function () {
        if (!nameInput.current.value.length) {
            alert("이름을 입력해주세요");
            nameInput.current.focus();
            return;
        }

        if (!phoneInput.current.value.length) {
            alert("연락처를 입력해주세요");
            phoneInput.current.focus();
            return;
        }

        if (!mailInput.current.value.length) {
            alert("이메일주소를 입력해주세요");
            mailInput.current.focus();
            return;
        }

        if (!isEmail(mailInput.current.value)) {
            alert("이메일주소를 바르게 입력해주세요");
            mailInput.current.focus();
            return;
        }

        if (!contentInput.current.value.length) {
            alert("내용을 입력해주세요");
            contentInput.current.focus();
            return;
        }

        setLoading(true);
        const name = nameInput.current.value;
        const phone = phoneInput.current.value;
        const email = mailInput.current.value;
        const content = contentInput.current.value;

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ name, phone, email, content }),
        });

        if (res.status === 201) {
            setTimeout(function () {
                alert("문의가 완료되었습니다. 빠른시일내에 연락드리겠습니다.");
                nameInput.current.value = "";
                phoneInput.current.value = "";
                mailInput.current.value = "";
                contentInput.current.value = "";
                setLoading(false);
            }, 1000);
        } else {
            alert("문의보내기를 실패했습니다.");
            setLoading(false);
        }
    };
    return (
        <>
            {loading && <div className={styles.loading}>문의를 보내는 중입니다</div>}
            <div className={styles.contactWrapper}>
                <div className={styles.title}>대량/예약주문 문의하기</div>
                <div className={styles.subTitle}>대량 또는 예약주문을 원하시면 아래에 내용을 작성해주시면, 빠른시일내에 연락해드리겠습니다.</div>
                <div className={styles.contactItem}>
                    <div className={styles.label}>이름</div>
                    <input type="text" ref={nameInput} placeholder="이름 또는 단체명을 입력해주세요" />
                </div>
                <div className={styles.contactItem}>
                    <div className={styles.label}>연락처</div>
                    <input type="text" ref={phoneInput} placeholder="연락처를 입력해주세요" />
                </div>
                <div className={styles.contactItem}>
                    <div className={styles.label}>이메일주소</div>
                    <input type="text" ref={mailInput} placeholder="이메일 주소를 입력해주세요" />
                </div>
                <div className={styles.contactTextarea}>
                    <div className={styles.label}>내용</div>
                    <textarea ref={contentInput} defaultValue={defaultValue}></textarea>
                </div>
                <button type="button" className={styles.contactBtn} onClick={submitContact}>
                    작성하기
                </button>
            </div>
        </>
    );
}
