function Pedidos() {
  return (
    <div>
      <div className="flex flex-col gap-2 justify bg-slate-400 pt-28 p-4">
        <div className="flex justify-between items-center bg-slate-400 p-2 px-10  border">
          <input
            type="text"
            placeholder="Pesquise alguma coisa"
            className="p-1 border w-2/3 rounded"
          />
          <div>
            <button className="ml-2 p-2 bg-blue-500 text-white rounded">
              🔍
            </button>
            <button className="ml-2 p-2 bg-green-500 text-white rounded">
              Adicionar
            </button>
          </div>
        </div>
        <div className="mt-10">
          <article className="flex items-center  p-2 gap-3 bg-slate-100 justify-between">
            <div
              className="flex justify-center items-center h-full p-2
           rounded-lg "
            >
              <h3 className="text-xl font-bold">Vendas de Hoje</h3>
              <p className="text-lg text-gray-700 ml-2">
                <span className="font-semibold">Valor de Vendas:</span> R$ 1000
              </p>
            </div>

            <div>
              <button className="ml-2 p-2 bg-green-500 text-white rounded">
                Adicionar
              </button>
              <button className="ml-2 p-2 bg-red-600 text-white rounded">
                X
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
