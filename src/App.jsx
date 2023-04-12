import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import ChampionList from "./components/ChampionList";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import CompList from "./components/CompList";
import { getChampions } from "./api";

const App = () => {
  const [ champions, setChampions ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ selectedView, setSelectedView ] = useState("champions");
  const [ comps, setComps ] = useState([
    {
      id: 1,
      name: "Comp 1",
      champions: [ "Aatrox", "Ahri" ],
    },
    {
      id: 2,
      name: "Comp 2",
      champions: [ "Aatrox", "Ahri" ],
    },
    // Adicione mais composições conforme necessário
  ]);

  useEffect(() => {
    getChampions().then((response) => setChampions(response.data));
  }, []);

  const filteredChampions = champions.filter((champion) =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    switch (selectedView) {
      case "champions":
        return (
          <>
            <SearchBar onSearch={setSearchTerm} />
            <ChampionList champions={filteredChampions} />
          </>
        );
      case "comps":
        return <CompList comps={comps} />;
      default:
        return <div>Selecione uma opção da barra lateral</div>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onSelect={setSelectedView} />
      <Container>
        <main style={{ flexGrow: 1, padding: "24px" }}>{renderContent()}</main>
      </Container>
    </div>
  );
};

export default App;
