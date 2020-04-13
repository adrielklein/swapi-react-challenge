import { map, path } from "ramda";
import { extract_id_from_url } from "./index";
import { Link } from "react-router-dom";
import { ListItem } from "../components";
import React from "react";

export const build_items = (base_path, iterable) => {
  if (typeof iterable == "undefined") return [];

  return map(item => {
    const item_id = extract_id_from_url(item.url);
    return (
      <Link to={`${base_path}${item_id}`} key={item_id}>
        <ListItem>{path(["name"], item)}</ListItem>
      </Link>
    );
  }, iterable);
};
