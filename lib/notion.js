import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_KEY,
});

export const MENU_DATABASE_ID = process.env.NOTION_MENU_DATABSE_ID;
export const CONTACT_DATABSE_ID = process.env.NOTION_CONTACT_DATABSE_ID;

export const getDatabase = async (databaseId, option) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        ...option,
    });

    return response.results;
};

export const createContact = async ({ name, phone, email, content }) => {
    // const response = await notion.databases.query({
    //     database_id: CONTACT_DATABSE_ID,
    // });

    // console.log(response.results);
    console.log(name, phone, email, content);
    await notion.pages.create({
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
};
