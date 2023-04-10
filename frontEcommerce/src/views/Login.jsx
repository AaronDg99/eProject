import { Link } from 'react-router-dom'

    export default function Login() {
      return (
        <>
     <form className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <h1 className="text-4xl font-bold shadow-sm">Inicia Sesión</h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">El mejor café aquí! Ingresa ahora mismo</p>
        

        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <label htmlFor="Email" 
        className="block text-sm font-semibold leading-6 text-gray-900"
        >Email</label>
  
          <div className="mt-2.5">
            <input type="email" name="Email" id="Email" 
            autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder="Ingresa tu email"/>
          </div>
        </div>
              <br/>
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <label htmlFor="Password" 
        className="block text-sm font-semibold leading-6 text-gray-900"
        >Contraseña</label>
  
          <div className="mt-2.5">
            <input type="password" name="Password" id="Password" 
            autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder="Ingresa tu contraseña"/>
          </div>
        </div>

        <div className="mt-10">
        <button type="submit" 
        value="Iniciar Sesión"
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 uppercase focus-visible:outline-indigo-600">Iniciar Sesión</button>
      </div>
      <br />
      <div className="text-sm">
      <Link to="/auth/registro" class="font-medium text-indigo-600 hover:text-indigo-500">
        Si no tienes cuenta registrate ahora mismo</Link>
        </div>
        <br />
      </form>
      </>
      )
    }
    