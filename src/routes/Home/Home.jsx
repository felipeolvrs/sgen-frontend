function Home() {
  return (
    <main>
      <header className="bg-slate-400 p-4">
        <h1 className="text-2xl">Dashboard de Vendas</h1>
      </header>

      <section className="bg-slate-400 flex flex-grow gap-4 p-5 mt-5">
        <article className="flex flex-col p-5 gap-3 bg-slate-100 w-auto">
          <h2 className="text-xl">Vendas de Hoje</h2>
          <p>Valor de Vendas: R$ 1000</p>
        </article>
       
      </section>

      <section className="bg-slate-400 flex flex-col gap-3 mt-5 p-5">
        <h2 className="text-2xl">Resumo das Vendas</h2>
        <article className="flex flex-col p-5 gap-3 bg-slate-100 w-auto">
          <h3 className="text-xl">Vendas de Hoje</h3>
          <p>Valor de Vendas: R$ 1000</p>
        </article>

      </section>
    </main>
  );
}

export default Home;
