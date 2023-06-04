import Formulario from '../components/formulario';

export default function Home() {
  return (
    <>
      <div>
        <h1 class="ml-2 mb-1 text-xl mt-0">Adiciona</h1>
        <div id="adicionaProduto">
          <Formulario />
        </div>
      </div>
      <div>
        <h1 class="ml-2 mb-1 text-xl mt-0">Lista</h1>
        <div id="listaProduto">
          <table>
            <thead>
              <tr>
                <th>Nome do Alimento</th>
                <th>Categoria</th>
                <th>Descrição</th>
                <th>Valor Nutricional</th>
                <th>Mercado</th>
                <th>Unidade de Medida</th>
                <th>Preços</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maçã</td>
                <td>Frutas</td>
                <td>Fruta suculenta e doce</td>
                <td>
                  <ul>
                    <li>
                      Calorias: <span class="valor-nutricional">52</span>
                    </li>
                    <li>
                      Carboidratos: <span class="valor-nutricional">14g</span>
                    </li>
                    <li>
                      Proteínas: <span class="valor-nutricional">0g</span>
                    </li>
                    <li>
                      Gorduras: <span class="valor-nutricional">0g</span>
                    </li>
                  </ul>
                </td>
                <td>Mercado A</td>
                <td>Unidade (uni.)</td>
                <td>R$ 2,00 (por unidade)</td>
              </tr>
              <tr>
                <td>Cenoura</td>
                <td>Legumes</td>
                <td>Vegetal de cor laranja e sabor adocicado</td>
                <td>
                  <ul>
                    <li>
                      Calorias: <span class="valor-nutricional">41</span>
                    </li>
                    <li>
                      Carboidratos: <span class="valor-nutricional">10g</span>
                    </li>
                    <li>
                      Proteínas: <span class="valor-nutricional">1g</span>
                    </li>
                    <li>
                      Gorduras: <span class="valor-nutricional">0g</span>
                    </li>
                  </ul>
                </td>
                <td>Mercado B</td>
                <td>Quilograma (kg)</td>
                <td>R$ 3,50 (por kg)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
