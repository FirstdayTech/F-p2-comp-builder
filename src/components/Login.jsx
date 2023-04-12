import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Login;
