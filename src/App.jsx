import React, { useState, useEffect } from "react";
import { Container, IconButton, Toolbar, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChampionList from "./components/ChampionList";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import CompList from "./components/CompList";
import Login from "./components/Login";
import { getChampions } from "./api";

const App = () => {
  const theme = useTheme();
  const [champions, setChampions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedView, setSelectedView] = useState("champions");
  const [comps, setComps] = useState([
    {
      id: 1,
      name: "Comp 1",
      champions: ["Aatrox", "Ahri"],
    },
    {
      id: 2,
      name: "Comp 2",
      champions: ["Aatrox", "Ahri"],
    },
    // Adicione mais composições conforme necessário
  ]);

  useEffect(() => {
    getChampions().then((response) => setChampions(response.data));
  }, []);

  const filteredChampions = champions.filter((champion) =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleLogin = (email, password) => {
    // Substitua os valores abaixo pelos e-mails e senhas estáticas corretos
    const validEmail = "usuario@teste.com";
    const validPassword = "senha123";

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert("E-mail ou senha incorretos");
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

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
        {/* Remova a referência ao appBar */}
        <main style={{ flexGrow: 1, padding: "24px" }}>{renderContent()}</main>
      </Container>
    </div>
  );
};

export default App;
