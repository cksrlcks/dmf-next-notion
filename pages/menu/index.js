import useDatabase from "../../hook/useDatabase";
import MenuList from "../../components/menu";

export default function MenuPage() {
    const { data, loading, error } = useDatabase("/api/menu/");

    return <div className="app">{loading ? <div className="super-loading">메뉴를 가져오고 있습니다.</div> : <MenuList data={data} />}</div>;
}
