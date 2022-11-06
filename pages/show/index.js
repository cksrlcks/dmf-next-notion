import useDatabase from "../../hook/useDatabase";
import Show from "../../components/show";

export default function ShowPage({ changeSlideShowTime, autoTime }) {
    const { data, loading, error } = useDatabase("/api/menu/");
    return (
        <>
            {loading && <div className="super-loading">슬라이드쇼를 준비중입니다</div>}
            {!loading && !data.length ? (
                <div className="empty">슬라이드쇼를 위한 사진리스트가 없습니다.</div>
            ) : (
                <Show menu={data} autoTime={autoTime} changeSlideShowTime={changeSlideShowTime} />
            )}
        </>
    );
}
