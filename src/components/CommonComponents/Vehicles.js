import React from "react";
import styled from "styled-components";
import TABLES from "../Tables";

const VehiclesBlock = styled.div``;

const config = {
  height: "40px",
};

function Vehicles({ vehicles }) {
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
    <VehiclesBlock>
      <TABLES.COMMON_TABLE tableConfig={config} titles={titles}>
        {vehicles.map((vehicle, key) => {
          return (
            <TABLES.TABLE_ROW key={key}>
              <td>{vehicle.name}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.manufacturer}</td>
              <td>{vehicle.cost_in_credits}</td>
              <td>{vehicle.length}</td>
              <td>{vehicle.crew}</td>
              <td>{vehicle.passengers}</td>
              <td>{vehicle.cargo_capacity}</td>
            </TABLES.TABLE_ROW>
          );
        })}
      </TABLES.COMMON_TABLE>
    </VehiclesBlock>
  );
}

export default Vehicles;
