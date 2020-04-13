import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const Menu = styled.div`
  padding: 20px;
`;

const StyledLink = styled(Link)`
  margin: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${props => (props.selected ? "#2b2b2b" : "#0")};
  border-radius: 35px;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
`;

export const MenuIcon = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
`;

export const MenuLabel = styled.div`
  display: flex;
  align-items: center;
  color: #d8d8d8;
`;

export const MenuItem = ({ selected, to, src, alt, label }) => {
  return (
    <StyledLink to={to}>
      <Wrapper selected={selected}>
        <MenuIcon src={src} alt={alt} />
        <MenuLabel>{label}</MenuLabel>
      </Wrapper>
    </StyledLink>
  );
};
