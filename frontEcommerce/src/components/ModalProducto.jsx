import {useState, useEffect} from 'react'
import useCafe from "../hooks/useCafe"
import { formatearDinero } from "../helpers";


export default function ModalProducto() {

  const {producto, handleClickModal, handleAgregarPedido, pedido} = useCafe();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect (() =>{
   if(pedido.some(pedidoState => pedidoState.id === producto.id )) {

     const productoEdicion = pedido.filter(pedidoState => 
      pedidoState.id === producto.id)[0]
      

      setCantidad(productoEdicion.cantidad)
      setEdicion(true)
   }

  }, [pedido])

  return (
    <div 
    className="md:flex items-center gap-10 ">
    <div className="md:w-1/3">
      
        <img src={`/img/${producto.imagen}.jpg`}
        
        alt={`Imagen Poducto ${producto.nombre}`} />

    </div>

    <div className="md:w-2/3">
    <div
      className="flex justify-end"
    >
        <button
        onClick={handleClickModal}
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>

        </button> 
    </div>
    <div className='p-8 sm:p-6'>
            <h1 className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{producto.nombre}</h1>
            <h1 className='font-bold text-[#0FB478] text-[22px] leading-7 mb-1'> {formatearDinero (producto.precio)}</h1>
    <div className='flex gap-4 mt-5'>
        <p className='mf-1 text-lg font-medium text-gray-900'>{cantidad} Piezas</p>
          <button
       type='button'
       onClick={()=>{
         if(cantidad <= 1) return
       setCantidad(cantidad - 1)
        } }
          >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

          </button>
          <button
          type='button'
          onClick={()=>{
            if(cantidad >= 5) return
          setCantidad(cantidad + 1)
           } }
          >
                
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </button>

      </div>
        <br />
    <button 
    className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
    onClick={ () =>  {
      handleAgregarPedido({...producto, cantidad})
      handleClickModal()
    }}
    >
        {edicion ? 'Guardar Cambios' : 'Añadir al pedido'}
      <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
        </div>
    </button>
      </div>
    </div>
</div>
  )
}
