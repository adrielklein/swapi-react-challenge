import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer } from "../../components";
import { PLANET_URL } from "../../constants";

export const PlanetDetail = props => {
  const [data, setData] = useState({ ships: [] });
  let { id } = useParams();

  useEffect(() => {
    axios(`${PLANET_URL}${id}/`).then(result => {
      setData({
        id,
        ...result.data
      });
    });
  }, [id]);
  return <DetailContainer>{JSON.stringify(data, null, 2)}</DetailContainer>;
};
