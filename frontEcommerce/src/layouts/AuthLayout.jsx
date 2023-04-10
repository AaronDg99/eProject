import { Outlet } from 'react-router-dom'
//aqui se hereda la imagen correspondiente para todos los hijos
//Se debe de importar Outlet para la utilizacion de los componentes que vamos a heredar
export default function AuthLayout() {
  return (
    
    <main className='max-w-4xl m-auto mt-10 md:mt-5 flex flex-col md:flex-row items-center'>
      
    <img 
        src="../img/logo.jpg" 
        alt="Imagen Logotiop" 
        className='max-w-xs'
    />
     <div className='p-10 w-full'>
      
      <Outlet/>
     </div>
    </main>
  )
}
