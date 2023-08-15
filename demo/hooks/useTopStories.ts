import { useEffect, useState } from "react";
import { getTopStories } from "../../util/hn";

export function useTopStories(pageSize: number = 30) {
  const [fetching, setFetching] = useState(true);
  const [ids, setIds] = useState<number[]>([]);

  const fetchIds = async (offset: number = 0): Promise<number[]> => {
    setFetching(true);
    try {
      const ids = await getTopStories();
      return ids.slice(offset, offset + pageSize);
    } finally {
      setFetching(false);
    }
  };

  const refresh = async () => {
    const ids = await fetchIds();
    setIds(ids);
  };

  const fetchMore = async () => {
    setFetching(true);
    try {
      const moreIds = await fetchIds(ids.length);
      setIds([...new Set([...ids, ...moreIds])]);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    refresh().catch(console.error);
  }, []);

  return { ids, fetching, refresh, fetchMore };
}
