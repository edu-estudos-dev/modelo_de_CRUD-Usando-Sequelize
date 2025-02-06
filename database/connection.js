import { Sequelize } from "sequelize";

// Cria uma instância do Sequelize 
const connection = new Sequelize('testeSequelize', 'root', '', {
  host: '127.0.0.1', 
  dialect: 'mysql'
});

// Conexão com o banco
connection
  .authenticate()
  .then(() => {
    console.log("Conectado ao banco de dados");
    return connection.sync({ force: false }); 
  })
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((msgErro) => {
    console.error(msgErro);
  });

export default connection;