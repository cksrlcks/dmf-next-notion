import notion, { MENU_DATABASE_ID } from "../../../lib/notion";

export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method !== "POST") {
        return res.status(405).json({ message: `${req.method} requests are not allowed` });
    }
    try {
        const response = await notion.getDatabase(MENU_DATABASE_ID, {
            filter: {
                or: [
                    {
                        property: "id",
                        formula: {
                            string: {
                                equals: id,
                            },
                        },
                    },
                ],
            },
        });

        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ msg: "There was an error" });
    }
}
