import React from "react";
import styled from "styled-components";
import TABLES from "../Tables";

const StarshipsBlock = styled.div``;

const config = {
  height: "40px",
};

function Starships({ starships }) {
  const titles = [
    "Name",
    "Model",
    "Manuafcturer",
    "Cost in credits",
    "Length",
    "Crew",
    "Passengers",
    "Cargo capacity",
  ];
  return (
    <StarshipsBlock>
      <TABLES.COMMON_TABLE tableConfig={config} titles={titles}>
        {starships.map((starship, key) => {
          return (
            <TABLES.TABLE_ROW key={key}>
              <td>{starship.name}</td>
              <td>{starship.model}</td>
              <td>{starship.manufacturer}</td>
              <td>{starship.cost_in_credits}</td>
              <td>{starship.length}</td>
              <td>{starship.crew}</td>
              <td>{starship.passengers}</td>
              <td>{starship.cargo_capacity}</td>
            </TABLES.TABLE_ROW>
          );
        })}
      </TABLES.COMMON_TABLE>
    </StarshipsBlock>
  );
}

export default Starships;
