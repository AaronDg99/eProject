import  {useContext} from 'react'
import  CafeContext from '../context/cafeProvider'

const useCafe = () =>{
return useContext(CafeContext)

} 

export default useCafe