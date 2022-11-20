import useSWR from "swr";

const fetcher = (url, option) =>
    fetch(url, {
        method: "POST",
        ...option,
    })
        .then((r) => r.json())
        .then((data) => data.response);

export default function useDatabase(url) {
    const { data, error } = useSWR(url, fetcher);

    return { data, error };
}
