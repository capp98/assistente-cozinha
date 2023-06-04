import { useState } from 'react';
import mysql from 'mysql';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [calorias, setCalorias] = useState('');
  const [carboidratos, setCarboidratos] = useState('');
  const [proteinas, setProteinas] = useState('');
  const [gorduras, setGorduras] = useState('');
  const [mercado, setMercado] = useState('');
  const [unidade, setUnidade] = useState('');
  const [preco, setPreco] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Crie uma conexão com o banco de dados SQL
      const connection = mysql.createConnection({
        host: 'localhost',
        user: 'seu_usuario',
        password: 'sua_senha',
        database: 'nome_do_banco_de_dados',
      });

      // Conecte-se ao banco de dados
      await new Promise((resolve, reject) => {
        connection.connect((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });

      // Insira os dados no banco de dados
      const query = `INSERT INTO alimentos (nome, categoria, descricao, calorias, carboidratos, proteinas, gorduras, mercado, unidade, preco)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const values = [
        nome,
        categoria,
        descricao,
        calorias,
        carboidratos,
        proteinas,
        gorduras,
        mercado,
        unidade,
        preco,
      ];

      await new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });

      console.log('Dados inseridos com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    } finally {
      // Feche a conexão com o banco de dados
      connection.end();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="nome">Nome do Alimento:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="categoria">Categoria:</label>
      <input
        type="text"
        id="categoria"
        name="categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="descricao">Descrição:</label>
      <input
        type="text"
        id="descricao"
        name="descricao"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="calorias">Calorias:</label>
      <input
        type="text"
        id="calorias"
        name="calorias"
        value={calorias}
        onChange={(e) => setCalorias(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="carboidratos">Carboidratos:</label>
      <input
        type="text"
        id="carboidratos"
        name="carboidratos"
        value={carboidratos}
        onChange={(e) => setCarboidratos(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="proteinas">Proteínas:</label>
      <input
        type="text"
        id="proteinas"
        name="proteinas"
        value={proteinas}
        onChange={(e) => setProteinas(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="gorduras">Gorduras:</label>
      <input
        type="text"
        id="gorduras"
        name="gorduras"
        value={gorduras}
        onChange={(e) => setGorduras(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="mercado">Mercado:</label>
      <input
        type="text"
        id="mercado"
        name="mercado"
        value={mercado}
        onChange={(e) => setMercado(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="unidade">Unidade de Medida:</label>
      <input
        type="text"
        id="unidade"
        name="unidade"
        value={unidade}
        onChange={(e) => setUnidade(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="preco">Preços:</label>
      <input
        type="text"
        id="preco"
        name="preco"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <br />
      <br />

      <input type="submit" value="Adicionar" />
    </form>
  );
}
