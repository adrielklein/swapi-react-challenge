import { compose, split, last, filter } from "ramda";

export const extract_id_from_url = compose(
  last,
  filter(item => item !== ""),
  split("/")
);

export * from "./build_items";
