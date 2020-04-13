import React from "react";
import { List } from "../../components";
import { SHIP_URL } from "../../constants";
import { build_items } from "../../util";
import { useItems } from "../../util/hooks";

export const ShipList = () => {
  const items = useItems(SHIP_URL);
  return <List>{build_items("ships/", items)}</List>;
};
