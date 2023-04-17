import useSWR from 'swr'
import Producto from '../components/Producto'
import useCafe from '../hooks/useCafe'
import clienteAxios from '../config/axios'


export default function Inicio() {

    const {categoriaActual} = useCafe()
       //consultaSWR

       const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
       const { data, error, isLoading } = useSWR('/api/productos', fetcher, {refreshInterval: 1000})
       /* console.log(data)
       console.log(error)
       console.log(isLoading) */
       if(isLoading) return 'cargando';

    const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

    return (
<>
      
<h2 className="mt-5 ml-5 font text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">{categoriaActual.nombre}</h2>
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
  