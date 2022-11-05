import { getDatabase, MENU_DATABASE_ID } from "../../lib/notion";
import MenuList from "../../components/menu";

export default function MenuPage({ data }) {
    return (
        <div className="app">
            <MenuList data={data} />
        </div>
    );
}

export async function getServerSideProps() {
    const response = await getDatabase(MENU_DATABASE_ID, {
        sorts: [
            {
                property: "index",
                direction: "ascending",
            },
            {
                property: "write_date",
                direction: "descending",
            },
        ],
    });

    return {
        props: {
            data: response,
        },
    };
}
