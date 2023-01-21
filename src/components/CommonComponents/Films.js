import React from "react";
import styled from "styled-components";
import TABLES from "../Tables";

const FilmsBlock = styled.div``;

const config = {
  height: "40px",
};

function Films({ films }) {
  const titles = [
    "Title",
    "Epsode Number",
    "Director",
    "Producer",
    "Release Date",
    "Opening Crawl",
  ];
  return (
    <FilmsBlock>
      <TABLES.COMMON_TABLE tableConfig={config} titles={titles}>
        {films.map((film, key) => {
          return (
            <TABLES.TABLE_ROW key={key}>
              <td>{film.title}</td>
              <td>{film.episode_id}</td>
              <td>{film.director}</td>
              <td>{film.producer}</td>
              <td>{film.release_date}</td>
              <td>{film.opening_crawl}</td>
            </TABLES.TABLE_ROW>
          );
        })}
      </TABLES.COMMON_TABLE>
    </FilmsBlock>
  );
}

export default Films;
