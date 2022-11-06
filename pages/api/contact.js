import { createContact } from "../../lib/notion";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: `${req.method} requests are not allowed` });
    }
    try {
        const { name, phone, email, content } = JSON.parse(req.body);
        await createContact({ name, phone, email, content });
        res.status(201).json({ msg: "Success" });
    } catch (error) {
        res.status(500).json({ msg: "There was an error" });
    }
}
