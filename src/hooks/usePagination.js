import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function usePagination(collection, searchPhrase, limit) {

    const store = useSelector(s => s[collection]);
    const { count, page } = store;

    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [pageState, setPageState] = useState({
        prev: null,
        current: 1,
        next: null,
        max: 1,
    });

    const startIndex = (page - 1) * limit;

    useEffect(() => {
        setError(null);
        setData([...store[collection].slice(startIndex, limit + startIndex)]);
        if (store[collection].length === 0) {
            if (data.length === 0) {
                setError({ message: "Nie znalazłam nic co by pasowało..." });
            } else {
                setError({ message: "Niestety nie znalazłam nic więcej..." });
            }
        }
        setPageState({
            prev: page > 1 ? page - 1 : null,
            current: page,
            next: count - (limit * page) > 0 ? page + 1 : null,
            max: Math.ceil(count / limit),
        });
    }, [store[collection], count, limit, page, startIndex]);

    return { error, data, pageState };
}