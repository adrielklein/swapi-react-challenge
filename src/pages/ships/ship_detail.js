import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer } from "../../components";
import { SHIP_URL } from "../../constants";

export const ShipDetail = props => {
  const [data, setData] = useState({ ships: [] });
  let { id } = useParams();

  useEffect(() => {
    axios(`${SHIP_URL}${id}/`).then(result => {
      setData({
        id,
        ...result.data
      });
    });
  }, [id]);
  return <DetailContainer>{JSON.stringify(data, null, 2)}</DetailContainer>;
};
