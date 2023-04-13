import { createContext, useState} from "react"
import { categorias as categoriasDB} from "../data/Categorias";

const CafeContext = createContext();

const CafeProvider = ({children}) => {

   const [categorias, setCategorias] = useState(categoriasDB);
   const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
   const handleClickCategoria = id => {

    const categoria = categorias.filter(categoria =>categoria.id === id)[0]
    setCategoriaActual(categoria)
   }



    return(

<CafeContext.Provider
value={{
    categorias,
    categoriaActual,
    handleClickCategoria

}}

>{children}</CafeContext.Provider>
    )

}

export{

    CafeProvider
}
export default CafeContext