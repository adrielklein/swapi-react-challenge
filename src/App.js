import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { ShipList, ShipDetail } from "./pages/ships";
import { PlanetDetail, PlanetList } from "./pages/planets";
import { SpeciesDetail, SpeciesList } from "./pages/species";
import { VehicleDetail, VehicleList } from "./pages/vehicles";
import { PeopleDetail } from "./pages/people/people_detail";
import { PeopleList } from "./pages/people/people_list";
import { Nav } from "./components";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 240px auto;
  background-color: #2b2b2b;
  padding: 10px 20px 10px 10px;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
`;
const ContentLabel = styled(Link)`
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  color: white;
  font-size: 52px;
  border-radius: 35px;
  margin: 0 20px;
  padding-left: 50px;
  width: 100%;
  height: 162px;
`;

const ContentIcon = styled.img`
  height: 250px;
`;

function App() {
  return (
    <Router>
      <Container>
        <Nav />

        <div>
          <Switch>
            <Route path="/people/:id">
              <ContentHeader>
                <ContentLabel to="/people">People</ContentLabel>
                <ContentIcon src="/stormtrooper.png" />
              </ContentHeader>
              <PeopleDetail />
            </Route>
            <Route path="/people">
              <ContentHeader>
                <ContentLabel to="/people">People</ContentLabel>
                <ContentIcon src="/stormtrooper.png" />
              </ContentHeader>
              <PeopleList />
            </Route>

            <Route path="/ships/:id">
              <ContentHeader>
                <ContentLabel to="/ships">Spaceships</ContentLabel>
                <ContentIcon src="/falcon.png" />
              </ContentHeader>
              <ShipDetail />
            </Route>
            <Route path="/ships">
              <ContentHeader>
                <ContentLabel to="/ships">Spaceships</ContentLabel>
                <ContentIcon src="/falcon.png" />
              </ContentHeader>
              <ShipList />
            </Route>

            <Route path="/vehicles/:id">
              <ContentHeader>
                <ContentLabel to="/vehicles">Vehicles</ContentLabel>
                <ContentIcon src="/atst.png" />
              </ContentHeader>
              <VehicleDetail />
            </Route>
            <Route path="/vehicles">
              <ContentHeader>
                <ContentLabel to="/vehicles">Vehicles</ContentLabel>
                <ContentIcon src="/atst.png" />
              </ContentHeader>
              <VehicleList />
            </Route>

            <Route path="/planets/:id">
              <ContentHeader>
                <ContentLabel to="/planets">Planets</ContentLabel>
                <ContentIcon src="/alderaan.png" />
              </ContentHeader>
              <PlanetDetail />
            </Route>
            <Route path="/planets">
              <ContentHeader>
                <ContentLabel to="/planets">Planets</ContentLabel>
                <ContentIcon src="/alderaan.png" />
              </ContentHeader>
              <PlanetList />
            </Route>

            <Route path="/species/:id">
              <ContentHeader>
                <ContentLabel to="/species">Species</ContentLabel>
                <ContentIcon src="/porg.png" />
              </ContentHeader>
              <SpeciesDetail />
            </Route>
            <Route path="/species">
              <ContentHeader>
                <ContentLabel to="/species">Species</ContentLabel>
                <ContentIcon src="/porg.png" />
              </ContentHeader>
              <SpeciesList />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
