import { formatearDinero } from "../helpers"
import useCafe from "../hooks/useCafe"

export default function Producto({producto}) {

  const {handleClickModal, handleSetProducto} = useCafe();
  const {nombre, imagen, precio} = producto
  return (

    <div 
    className="mt-5 aspect-h-1 aspect-w-1 w-full overflow-hidden
     rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 "
    >
    
      <img src={`/img/${imagen}.jpg`}
      alt={`imagen ${nombre}`}
      className="h-120 w-full object-cover object-center group-hover:opacity-75"/>
      <div className="p-5">
      <h3 className="mt-4 text-sm text-gray-700">{nombre}</h3>
        <p className="mt-1 mf-1 text-lg font-medium text-gray-900">{ formatearDinero (precio)}</p>
        
        <button type="button" className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm uppercase font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        onClick={() => {
          handleClickModal();
          handleSetProducto(producto);
        }}
        >Agregar</button>
      </div>
    </div>
  )
}
