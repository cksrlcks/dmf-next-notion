import { useEffect, useState } from "react";
import usePagination from "../../hook/usePagination";
import MenuItem from "../../components/menuItem";
import styles from "./style.module.css";

export default function Board() {
    const [list, setList] = useState([]);
    const [nextCursor, setNextCursor] = useState(undefined);
    const [hasMore, setHasMore] = useState(false);
    const { data, error } = usePagination("/api/board", nextCursor);

    useEffect(() => {
        if (data) {
            if (nextCursor) {
                setList((prev) => {
                    return [...prev, ...data.results];
                });
            } else {
                setList(data.results);
            }

            setHasMore(data.has_more);
        }
    }, [data]);

    const loadMore = () => {
        setNextCursor(data.next_cursor);
    };

    return (
        <>
            {!data && <div className={styles.loading}>정보를 가져오는 중입니다.</div>}
            <ul className={styles["menu-list"]}>
                {list.map((item) => (
                    <MenuItem product={item} key={item.id} link={false} />
                ))}
            </ul>
            {hasMore && (
                <button type="button" onClick={loadMore} disabled={!data} className={styles["load-more"]}>
                    더불러오기
                </button>
            )}
        </>
    );
}
