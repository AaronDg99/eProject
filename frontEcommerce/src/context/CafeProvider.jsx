import { createContext, useState, useEffect} from "react"
import {toast} from 'react-toastify';
import clienteAxios from "../config/axios";

const CafeContext = createContext();

const CafeProvider = ({children}) => {

   const [categorias, setCategorias] = useState([])
   const [categoriaActual, setCategoriaActual] = useState({})
   const [modal, setModal] = useState(false)
   const [producto, setProducto] = useState({})
   const [pedido, setPedido] = useState ([])
   const [total, setTotal] = useState (0)
   



   useEffect(()=> {

        const nuevoTotal = pedido.reduce((total, producto)=> (producto.precio * producto.cantidad) + total, 0 )
        setTotal(nuevoTotal)
   }, [pedido])

//Cargar Categorias desde laravel con Axios
   const obtenerCategorias =async () =>{
    
    try {
        // console.log(import.meta.env.VITE_API_URL)
        //(const {data} = await axios ('http://127.0.0.1:8000/api/categorias'))
        // const {data} = await axios (`${import.meta.env.VITE_API_URL}/api/categorias`)
        const {data} = await clienteAxios ( '/api/categorias' ) 
        setCategorias(data.data)
        setCategoriaActual(data.data[0])
    } catch (error) {
        console.log(error)
    }

   }

   useEffect (()=>{
    obtenerCategorias();
   }, [])

   const handleClickCategoria = id => {
    const categoria = categorias.filter(categoria =>categoria.id === id)[0]
    setCategoriaActual(categoria)
   }

const handleClickModal = () => {
    setModal(!modal)

}


const handleSetProducto = producto =>{
    setProducto(producto)

}

const handleAgregarPedido = ({categoria_id,...producto}) => {
    
    if(pedido.some(pedidoState => pedidoState.id === producto.id )) {

        const pedidoActualizado = pedido.map(pedidoState => 
         pedidoState.id === producto.id ?producto :pedidoState)
         
   
         setPedido(pedidoActualizado)
         toast.success('Guardado Correctamente :)')
         
      }else{

        setPedido([...pedido, producto])
        toast.success('Agregado al Pedido :)')
      }
}

const handleEditarCantidad = id =>{
const productoActualizar = pedido.filter(producto => producto.id === id) [0]
setProducto(productoActualizar)
setModal(!modal)

}

const handleEliminarPedido = id => {

    const pedidoActualizado = pedido.filter (producto => producto.id !== id)
    setPedido(pedidoActualizado)
    toast.error('eliminado del pedido')
}

    return(

<CafeContext.Provider
value={{
    categorias,
    categoriaActual,
    handleClickCategoria,
    modal,
    handleClickModal,
    producto,
    handleSetProducto,
    pedido,
    handleAgregarPedido,
    handleEditarCantidad,
    handleEliminarPedido,
    total

}}

>{children}</CafeContext.Provider>
    )

}

export{

    CafeProvider
}
export default CafeContext