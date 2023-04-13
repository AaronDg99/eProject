import { categorias } from "../data/Categorias";
import useCafe from "../hooks/useCafe";
import Categoria from "./Categoria";


export default function Sidebar() {

const {categorias} = useCafe()

  return (
<aside  className="md:w-72 ml-5 -mr-14">

<div className="p-4">

  <img 
        src="../img/logo.jpg" 
        alt="Imagen Logotiop" 
        className='w-40 h-40 rounded-full'
    />


</div>
<div className="mt-1 ">
{categorias.map(categoria =>(

    <Categoria
    key={categoria.id}
        categoria={categoria}
    />
))}
</div>
<div className="my-5 py-5">
    <button 
    type="button"
    className=" block w-40 rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
        Cancelar Orden
    </button>
</div>
    
</aside>
    
  )
}
