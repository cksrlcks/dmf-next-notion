import { getDatabase, MENU_DATABASE_ID } from "../../lib/notion";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: `${req.method} requests are not allowed` });
    }

    try {
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
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error });
    }
}
