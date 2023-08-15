import { useEffect, useState } from "react";
import { HNItem, getItem } from "../../util/hn";

export function useItem(id: number) {
  const [item, setItem] = useState<HNItem | undefined>();

  useEffect(() => {
    getItem(id).then(setItem);
  }, [id]);

  return item;
}
