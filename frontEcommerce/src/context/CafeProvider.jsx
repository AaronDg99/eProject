import { createContext } from "react"

const CafeContext = createContext();

const CafeProvider = ({children}) => {

    return(

<CafeContext.Provider
value={{


}}

>{children}</CafeContext.Provider>
    )

}

export{

    CafeProvider
}
export default CafeContext