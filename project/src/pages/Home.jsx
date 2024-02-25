import { NavLink } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>


      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-4 mx-auto flex flex-wrap" >
          <div class="flex w-full flex-wrap  justify-center">
            {/* <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:mb-0 mb-4 before:animate-typewriter">"Be Kind To Every Kind Not Just Mankind." </h1> */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                '"Be Kind To Every Kind Not Just Mankind."',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ' "Wilderness without wildlife is just scenery." - Lois Crisler.',
                1000,
                '"Study nature, love nature, stay close to nature. It will never fail you." - Frank Lloyd Wright.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
</div>

<div class="transition-opacity duration-1000 ease-in-out opacity-50 hover:opacity-100">

<Slider/>
</div>



      </section>

      <section class="text-gray-400 bg-gray-900 body-font ">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Protecting the homes of wildlife,
              <br class="hidden lg:inline-block" />one habitat at a time.
            </h1>
            <p class="mb-8 leading-relaxed">
              This website is dedicated to monitoring and understanding the<br class="hidden lg:inline-block" /> health of wildlife habitats. By tracking changes in these vital ecosystems,<br class="hidden lg:inline-block" /> we can gain valuable insights into the well-being of the animals that call them home.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> <NavLink to="/community">Community</NavLink> </button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Overview</button>
            </div>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center transition-opacity duration-700 ease-in opacity-30 hover:opacity-100 ">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Why is wildlife habitat monitoring important?
            </h1>
            <p class="mb-8 leading-relaxed transition-opacity duration-700 ease-in opacity-0 hover:opacity-100">
              1.Healthy habitats support diverse populations of plants and animals, ensuring a thriving natural world.<br class="hidden lg:inline-block" />
              2.Monitoring allows us to identify threats and challenges faced by these habitats, enabling proactive conservation efforts.<br class="hidden lg:inline-block" />
              3.Informed decisions based on monitoring data can help protect endangered species and promote sustainable practices.</p>

          </div>

        </div>
      </section>
    </>
  )
} 