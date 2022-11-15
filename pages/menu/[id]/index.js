import { useRouter } from "next/router";
import useDatabase from "../../../hook/useDatabase";
import Detail from "../../../components/menuDetail";

export default function DetailView() {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useDatabase(`/api/menu/${id.replace(/\-/g, "")}`);

    if (error) return <div className="super-loading">데이터를 가져오는데 실패했습니다.</div>;
    if (!data) return <div className="super-loading">정보를 가져오고 있습니다.</div>;

    return <Detail item={data[0]} />;
}
