import useDatabase from "../../hook/useDatabase";
import Show from "../../components/show";

export default function ShowPage({ changeSlideShowTime, autoTime }) {
    const { data, error } = useDatabase("/api/menu/");

    if (error) return <div className="super-loading">데이터를 가져오는데 실패했습니다.</div>;
    if (!data) return <div className="super-loading">슬라이드쇼를 준비중입니다.</div>;
    return !data.results.length ? (
        <div className="empty">슬라이드쇼를 위한 사진리스트가 없습니다.</div>
    ) : (
        <Show menu={data.results} autoTime={autoTime} changeSlideShowTime={changeSlideShowTime} />
    );
}
