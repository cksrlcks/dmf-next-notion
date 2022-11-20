import { Client } from "@notionhq/client";

export const MENU_DATABASE_ID = process.env.NOTION_MENU_DATABSE_ID;
export const CONTACT_DATABSE_ID = process.env.NOTION_CONTACT_DATABSE_ID;

class NotionService {
    constructor() {
        this.notion = new Client({
            auth: process.env.NOTION_KEY,
        });
    }

    async getDatabase(databaseId, option) {
        const response = await this.notion.databases.query({
            database_id: databaseId,
            ...option,
        });
        return response;
    }

    async createContact({ name, phone, email, content }) {
        await this.notion.pages.create({
            parent: {
                database_id: CONTACT_DATABSE_ID,
            },
            properties: {
                name: {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
                phone: {
                    rich_text: [
                        {
                            text: {
                                content: phone,
                            },
                        },
                    ],
                },
                email: {
                    rich_text: [
                        {
                            text: {
                                content: email,
                            },
                        },
                    ],
                },
                message: {
                    rich_text: [
                        {
                            text: {
                                content: content,
                            },
                        },
                    ],
                },
            },
        });
    }
}

const notion = new NotionService();
export default notion;
