const express = require('express');
const app = express();
const port = 3000; // Porta que sua API irá escutar

// Configuração para permitir o uso de JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
