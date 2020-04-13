import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer } from "../../components";
import { SPECIES_URL } from "../../constants";

export const SpeciesDetail = props => {
  const [data, setData] = useState({ species: [] });
  let { id } = useParams();

  useEffect(() => {
    axios(`${SPECIES_URL}${id}/`).then(result => {
      setData({
        id,
        ...result.data
      });
    });
  }, [id]);
  return <DetailContainer>{JSON.stringify(data, null, 2)}</DetailContainer>;
};
