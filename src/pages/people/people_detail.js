import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer } from "../../components";
import { PEOPLE_URL } from "../../constants";

export const PeopleDetail = props => {
  const [data, setData] = useState({ people: [] });
  let { id } = useParams();

  useEffect(() => {
    axios(`${PEOPLE_URL}${id}/`).then(result => {
      setData({
        id,
        ...result.data
      });
    });
  }, [id]);
  return (
    <div>
      <DetailContainer>{JSON.stringify(data, null, 2)}</DetailContainer>;
      <DetailContainer>Form goes here.</DetailContainer>
    </div>
  );
};
