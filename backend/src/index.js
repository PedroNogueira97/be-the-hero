const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Buscar/listar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identifcar recursos Ex: /users/:id
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle etc..
    * NoSQL: MongoDB, CouchDB, Etc..
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


