import React from "react";
import { List } from "../../components";
import { VEHICLES_URL } from "../../constants";
import { build_items } from "../../util";
import { useItems } from "../../util/hooks";

export const VehicleList = () => {
  const items = useItems(VEHICLES_URL);
  return <List>{build_items("vehicles/", items)}</List>;
};
