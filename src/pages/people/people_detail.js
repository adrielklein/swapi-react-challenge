import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer } from "../../components";
import { PEOPLE_URL } from "../../constants";

const Attribute = ({ title, value, onChange }) => {
  return (
    <div>
      <label>
        {title}:
        <input
          type="text"
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </label>
    </div>
  );
};

const PersonForm = ({ attributes, setAttributes, id }) => {
  const [name, setName] = useState(attributes.name);
  const [height, setHeight] = useState(attributes.height);
  const [mass, setMass] = useState(attributes.mass);
  const [eyeColor, setEyeColor] = useState(attributes.eye_color);
  const handleSubmit = async () => {
    const newAttributes = {
      name,
      height,
      mass,
      eye_color: eyeColor
    };
    await axios.patch(`${PEOPLE_URL}${id}/`, newAttributes);
    setAttributes({ ...attributes, ...newAttributes });
  };
  return (
    <div>
      <Attribute title={"Name"} value={name} onChange={setName} />
      <Attribute title={"Height"} value={height} onChange={setHeight} />
      <Attribute title={"Mass"} value={mass} onChange={setMass} />
      <Attribute title={"Eye Color"} value={eyeColor} onChange={setEyeColor} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

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
  const hasLoaded = data && data.name;
  return (
    <div>
      <DetailContainer>{JSON.stringify(data, null, 2)}</DetailContainer>;
      <DetailContainer>
        {hasLoaded && (
          <PersonForm attributes={data} id={id} setAttributes={setData} />
        )}
      </DetailContainer>
    </div>
  );
};
