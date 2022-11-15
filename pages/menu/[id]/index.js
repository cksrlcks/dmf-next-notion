import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import useDatabase from "../../../hook/useDatabase";
import Detail from "../../../components/menuDetail";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DetailView() {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const { id } = router.query;
    const urlId = id?.replace(/\-/g, "");
    const { data, error } = useDatabase(`/api/menu/${urlId}`);

    function isScrolledCheck() {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", isScrolledCheck);
        return () => {
            window.addEventListener("scroll", isScrolledCheck);
        };
    }, []);

    if (error) return <div className="super-loading">데이터를 가져오는데 실패했습니다.</div>;
    if (!data) return <div className="super-loading">정보를 가져오고 있습니다.</div>;

    return (
        <>
            <header className={`sub-header ${isScrolled && "on"}`}>
                <button type="button" className="back-btn" onClick={() => router.back()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </header>
            <Detail item={data[0]} />
        </>
    );
}
