import React, { useState, useEffect } from "react";
import axios from "axios";
import { compose, path } from "ramda";
import { List } from "../../components";
import { PEOPLE_URL } from "../../constants";
import { build_items } from "../../util";

const process_results = data => {
  return compose(path(["data", "results"]))(data);
};

export const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetch() {
      const result = await axios(`${PEOPLE_URL}?page=${page}`);
      const new_people = process_results(result);
      const full_list = [...people, ...new_people];
      setPeople(full_list);
      if (result.data.next) {
        setPage(page + 1);
      }
    }

    // add the then() to get rid of the warnings.
    fetch().then();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <List>{build_items("people/", people)}</List>;
};
