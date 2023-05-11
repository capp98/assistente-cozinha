export default function Home() {
  return (
    <>
      <div>
        <h1 class="ml-2 mb-1 text-xl mt-0">Adiciona</h1>
        <div id="adicionaProduto">
          <form action="" class="w-full grid grid-rows-2 grid-columns-2">
            <input type="text" class="form-input" placeholder="Nome" />
            <input type="text" class="form-input" placeholder="Validade" />
            <input type="text" class="form-input" placeholder="Quantidade" />
            <input type="text" class="form-input" placeholder="Unidade" />
          </form>
        </div>
      </div>
      <div>
        <h1 class="ml-2 mb-1 text-xl mt-0">Lista</h1>
        <div id="listaProduto">
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Miojo</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Macarrão</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Nescau</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
