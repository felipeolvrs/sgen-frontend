import { Link } from "react-router-dom";

function Asidebar() {
  return (
    <aside className="flex w-52 flex-col bg-slate-600 p-4 shadow-lg">
      <ul className="text-center mt-10 space-y-3  h-screen" role="menu">
        <li role="menuitem">
          <Link
            to="/"
            className="block hover:bg-slate-400 p-3 cursor-pointer border rounded-xl text-white transition-all duration-300 ease-in-out shadow-md"
          >
            Menu
          </Link>
        </li>
        <li role="menuitem">
          <Link
            to="/pedidos"
            className="block hover:bg-slate-400 p-3 cursor-pointer border rounded-xl text-white transition-all duration-300 ease-in-out shadow-md"
          >
            Pedidos
          </Link>
        </li>
        <li role="menuitem">
          <Link
            to="/produtos"
            className="block hover:bg-slate-400 p-3 cursor-pointer border rounded-xl text-white transition-all duration-300 ease-in-out shadow-md"
          >
            Produtos
          </Link>
        </li>
        <li role="menuitem">
          <Link
            to="/fornecedores"
            className="block hover:bg-slate-400 p-3 cursor-pointer border rounded-xl text-white transition-all duration-300 ease-in-out shadow-md"
          >
            Fornecedores
          </Link>
        </li>
        <li role="menuitem">
          <Link
            to="/relatorios"
            className="block hover:bg-slate-400 p-3 cursor-pointer border rounded-xl text-white transition-all duration-300 ease-in-out shadow-md"
          >
            Relatórios
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Asidebar;
