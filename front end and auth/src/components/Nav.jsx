import { NavLink } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import {
  ClerkProvider,

  SignIn,
  SignUp,
  UserButton
} from "@clerk/clerk-react";


function Nav() {

  const { userId } = useAuth()

  return (
    <header class="text-gray-400 bg-gray-900 body-font  top-0 sm:font-medium">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl" ><a href="App.jsx">EcoLens</a></span>
        </a>

        {/* <nav class="md:ml-auto flex flex-warp items-center text-base justify-center" >
          <ul>
            <li class="mr-5 hover:text-white"><NavLink to="/">Home</NavLink></li>
            <li><a href="/login">login</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </nav> */}


        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <ul class="flex flex-warp items-center text-base justify-center">
            <li class="mr-5 hover:text-white"><NavLink to="/">Home</NavLink></li>

            {userId && (
              <>
                <li class="mr-5 hover:text-white"><NavLink to="/community">Interaction</NavLink></li>
                <li class="mr-5 hover:text-white"><NavLink to="/zone">Habitat</NavLink></li>
                <li class="mr-5 hover:text-white"><NavLink to="/monitoring">Realtime Data</NavLink></li>
              </>
            )}




            {!userId && (
              <>

                <li class="mr-5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><NavLink to="/signin">SignIn</NavLink></li>

                <li class="mr-5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><NavLink to="/signup">SignUp
                </NavLink>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg></li>
              </>

            )}

            <UserButton />

          </ul>

        </nav>

      </div>
    </header>
  )
}

export default Nav;