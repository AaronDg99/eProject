
export default function Categoria({categoria}) {
    
    const {icono, id, nombre} = categoria

  return (
    
    
    <div className="flex flex-row items-center w-full h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <img src={`/img/icono_${icono}.svg`}
       alt="Imagen Icono" 
       className="w-10"/>

       <p className="text-lg font-semibold truncate">{nombre}</p>
    </div>
    



  )
}
