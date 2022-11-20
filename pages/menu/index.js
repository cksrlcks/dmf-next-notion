import useDatabase from "../../hook/useDatabase";
import MenuList from "../../components/menuList";

export default function MenuPage() {
    const { data, error } = useDatabase("/api/menu/");

    if (error) return <div className="super-loading">데이터를 가져오는데 실패했습니다.</div>;
    if (!data) return <div className="super-loading">메뉴를 가져오고 있습니다.</div>;
    return (
        <div className="app">
            <MenuList data={data.results} />
        </div>
    );
}
