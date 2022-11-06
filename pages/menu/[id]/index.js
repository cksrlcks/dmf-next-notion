import useDatabase from "../../../hook/useDatabase";
import Detail from "../../../components/menuDetail";

export default function DetailView({ params }) {
    const { id } = params;
    const { data, loading, error } = useDatabase(`/api/menu/${id.replace(/\-/g, "")}`);
    if (loading) {
        return <div className="super-loading">정보를 가져오고 있습니다.</div>;
    } else {
        if (data.length) {
            return <Detail item={data[0]} />;
        }
    }
}
export function getServerSideProps(context) {
    return {
        props: { params: context.params },
    };
}
