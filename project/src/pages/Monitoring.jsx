import { NavLink } from "react-router-dom"
import './styles.css'

export default function Monitoring(){
    return(
        <>
        
    <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col">
        <div class="h-1 bg-gray-800 rounded overflow-hidden">
          <div class="w-24 h-full bg-indigo-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Real-Time Data Analysis</h1>
          
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6 info">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full transition ease-in-out hover:scale-125 duration-700 " src="https://images.unsplash.com/photo-1637061761666-0ee8dbcd9db0?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
          <h2 class="text-xl font-medium title-font text-white mt-5">Tigers</h2>
          <div class="text-indigo-400 inline-flex items-center mt-3 ">
          <NavLink to="/monitoring/tiger">Learn More</NavLink>
          </div>
        </div>

        <div class="p-4 md:w-1/3 sm:mb-0 mb-6 info">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full transition ease-in-out hover:scale-125 duration-700 " src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
          <h2 class="text-xl font-medium title-font text-white mt-5">Elephants</h2>
          <div class="text-indigo-400 inline-flex items-center mt-3 ">
          <NavLink to="/monitoring/elephant">Learn More</NavLink>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  </>
        )
}