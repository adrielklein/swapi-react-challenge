import React from "react";
import { List } from "../../components";
import { SPECIES_URL } from "../../constants";
import { build_items } from "../../util";
import { useItems } from "../../util/hooks";

export const SpeciesList = () => {
  const items = useItems(SPECIES_URL);
  return <List>{build_items("species/", items)}</List>;
};
