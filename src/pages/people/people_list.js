import React from "react";
import { List } from "../../components";
import { PEOPLE_URL } from "../../constants";
import { build_items } from "../../util";
import { useItems } from "../../util/hooks";

export const PeopleList = () => {
  const items = useItems(PEOPLE_URL);
  return <List>{build_items("people/", items)}</List>;
};
