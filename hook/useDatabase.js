import useSWR from "swr";

const fetcher = (url) =>
    fetch(url, {
        method: "POST",
    })
        .then((r) => r.json())
        .then((data) => data.response);

export default function useDatabase(url) {
    const { data, error } = useSWR(url, fetcher);

    return { data, error };
}
