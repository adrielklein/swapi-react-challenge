import React from "react";
import { useLocation } from "react-router-dom";
import { Drawer } from "./drawer";
import { Menu, MenuItem } from "./menu";
import styled from "styled-components";

const StarWarsLogo = styled.img`
  width: 80%;
  margin: 0 auto;
`;

const LogoCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Nav = () => {
  let { pathname } = useLocation();

  return (
    <Drawer>
      <LogoCenter>
        <StarWarsLogo src="/starwars_logo.png" alt="star wars logo" />
      </LogoCenter>
      <Menu>
        <MenuItem
          to="/planets"
          selected={pathname.startsWith("/planets")}
          src="/alderaan.png"
          alt="alderaan"
          label="Planets"
        />
        <MenuItem
          to="/ships"
          selected={pathname.startsWith("/ships")}
          src="/falcon.png"
          alt="falcon"
          label="Spaceships"
        />
        <MenuItem
          to="/vehicles"
          selected={pathname.startsWith("/vehicles")}
          src="/atst.png"
          alt="atst"
          label="Vehicles"
        />
        <MenuItem
          to="/people"
          selected={pathname.startsWith("/people")}
          src="/stormtrooper.png"
          alt="stormtrooper"
          label="People"
        />
        <MenuItem
          to="/species"
          selected={pathname.startsWith("/species")}
          src="/porg.png"
          alt="porg"
          label="Species"
        />
      </Menu>
    </Drawer>
  );
};
