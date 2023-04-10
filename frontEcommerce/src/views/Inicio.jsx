import Producto from '../components/Producto'
import {productos} from '../data/productos.js'



export default function Inicio() {

    return (
<>
      
<h2 className="mt-5 ml-5 font text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">INICIO</h2>
<p className="mt-5 ml-5 text-xl text-gray-500">Elige y personaliza tu pedido</p>
   <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
      {productos.map(producto=> (

        <Producto
        key = {producto.imagen}
        producto={producto}
        />

    ))}
      
    </div>
</>
    )
  }
  