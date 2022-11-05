import Detail from "../../../components/menuDetail";
import { getDatabase, MENU_DATABASE_ID } from "../../../lib/notion";

export default function DetailView({ data }) {
    return <Detail item={data[0]} />;
}

export async function getServerSideProps(context) {
    const response = await getDatabase(MENU_DATABASE_ID, {
        filter: {
            or: [
                {
                    property: "id",
                    formula: {
                        string: {
                            equals: context.query.id.replace(/\-/g, ""),
                        },
                    },
                },
            ],
        },
    });

    return {
        props: {
            data: response,
        },
    };
}
