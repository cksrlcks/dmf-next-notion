import { getDatabase, MENU_DATABASE_ID } from "../../lib/notion";
import { useState } from "react";
import Show from "../../components/show";

export default function ShowPage({ data, changeSlideShowTime, autoTime }) {
    const [menu, setMenus] = useState(data);
    return (
        <>
            {!menu.length ? (
                <div className="empty">슬라이드쇼를 위한 사진리스트가 없습니다.</div>
            ) : (
                <Show menu={menu} autoTime={autoTime} changeSlideShowTime={changeSlideShowTime} />
            )}
        </>
    );
}

export async function getServerSideProps() {
    const response = await getDatabase(MENU_DATABASE_ID);

    return {
        props: {
            data: response,
        },
    };
}
