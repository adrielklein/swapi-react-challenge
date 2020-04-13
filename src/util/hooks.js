import axios from "axios";
import { compose, path } from "ramda";
import { useEffect, useState } from "react";

const process_results = data => {
  return compose(path(["data", "results"]))(data);
};

export const useItems = url => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetch() {
      const result = await axios(`${url}?page=${page}`);
      const new_items = process_results(result);
      const full_list = [...items, ...new_items];
      setItems(full_list);
      if (result.data.next) {
        setPage(page + 1);
      }
    }
    // add the then() to get rid of the warnings.
    fetch().then();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return items;
};
