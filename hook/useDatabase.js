import { useEffect, useState } from "react";

export default function useDatabase(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    method: "POST",
                });
                const result = await response.json();
                setData(result.response);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { data, error, loading };
}
