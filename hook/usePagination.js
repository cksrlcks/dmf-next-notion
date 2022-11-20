import useSWR from "swr";

const fetcher = (url, cursor) =>
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            start_cursor: cursor,
            page_size: 8,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            return data.response;
        });

export default function usePagination(url, cursor) {
    const { data, error } = useSWR([url, cursor], fetcher);
    return { data, error };
}
