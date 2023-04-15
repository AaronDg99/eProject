
import { formatearDinero } from "../helpers";
import useCafe from "../hooks/useCafe"
import ResumenProductos from "./ResumenProductos";

export default function Resumen() {

const {pedido, total} = useCafe();
const comprobarPedido = () => pedido.length === 0;

console.log(comprobarPedido)

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5"
    >
        <h1 className="text-4xl font-black">
        Mi Carrito</h1>

          <p className="text-lg my-5">
          Resumen del Carrito
          </p>

          <div className="py-10">
            {pedido.length === 0 ? (

            <p className="text-center text-2xl">
            no hay elementos
            </p>
            ):(
          pedido.map(producto => (

            <ResumenProductos
            key={producto.id}
            producto={producto}
            />
          ))
            )}

          </div>
                  <p className="text-xl mt-10">
                    Total: {''}
                    {formatearDinero(total)}
                  </p>
                  <form className="w-full">
                    <div className="mt-5">
                      <input type="submit"
                      className= {`${comprobarPedido()? 'bg-indigo-100' : 'bg-indigo-400 hover:bg-indigo-300'} px-5  py-2 rounded uppercase font-bold  text-white text-center w-full`}
                      value="Confirmar Pedido"
                      disabled= {comprobarPedido()}
                       />
                    </div>
                  </form>
    </aside>
  )
}
