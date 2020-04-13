import React from "react";
import { List } from "../../components";
import { build_items } from "../../util";
import { useItems } from "../../util/hooks";
import { PLANET_URL } from "../../constants";

export const PlanetList = () => {
  const items = useItems(PLANET_URL);
  return <List>{build_items("planets/", items)}</List>;
};
