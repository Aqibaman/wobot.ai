
import './App.css';
import logo from './assets/wobot-logo_blue 1.png'
import formLogo from './assets/Solid_lines.png'
// import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

function App ()
{
  return (
    <div className="App">

      <div className="overflow-hidden">
        <div class='App-logo'>
          <img src={ logo } alt="" />
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">

              <h2 className="py-4  max-w-lg mb-6 gap-2 font-sans text-3xl font-bold text-dark sm:text-4xl sm:leading-none lg:leading-normal">
                Get Real-Time Insights <br className="hidden md:block" />
                on{ ' ' }
                <span className='text-blue-500 font-bold'>
                  {/* Style will be inherited from the parent element */ }
                  <Typewriter
                    words={ [ 'Customer Experience', 'Speed of Service', 'Loss Prevention', 'Health and Safety', ] }
                    loop={ 50 }
                    cursor
                    cursorStyle='|'
                    typeSpeed={ 70 }
                    deleteSpeed={ 50 }
                    delaySpeed={ 1000 }
                  />
                </span>

                <br className="hidden md:block" />
                with Video Intelligence
              </h2>
              <p className="max-w-xl mb-4 text-base text-dark md:text-lg">
                Wobot.ai uses cameras and powerful AI algorithms to generate real-time insights
              </p>
              <a
                href="https://wobot.ai/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                >
                  <defs>
                    <pattern
                      id="766323e1-e594-4ffd-a688-e7275079d540"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                    width="52"
                    height="24"
                  />
                </svg>
                <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                  <div className='flex justify-center'>
                    <img src={ formLogo } alt="" />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">

                    It's a delight to have you onboard
                  </h3>
                  <h6 className="mb-4 text-sm sm:text-center sm:mb-6 sm:text-sm">
                    Help us know you better. (This is how we optimize Wobot as per your business needs)
                  </h6>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Company Name
                      </label>
                      <input
                        placeholder="e.g. Example Inc"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="Industry"
                        className="inline-block mb-1 font-medium"
                      >
                        Industry
                      </label>
                      {/* <input
                        placeholder="john.doe@example.org"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      /> */}
                      <select className="select w-full">
                        <option className='text-gray-300' disabled selected>Select</option>
                        <option>Automobile</option>
                        <option>Garments</option>
                        <option>Agriculture</option>
                        <option>Pharmaceuticals</option>
                      </select>
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <div>
                        <label

                          className="inline-block mb-1 font-medium"
                        >
                          Company Size
                        </label>
                      </div>
                      <div className='flex justify-center align-middle gap-1'>
                        <p type='button' className='button1'>
                          1-20
                        </p>
                        <p className='button1'>
                          21-50
                        </p>
                        <p className='button1'>
                          51-200
                        </p>
                        <p className='button1'>
                          200-500
                        </p>
                        <p className='button1'>
                          500+
                        </p>
                      </div>
                    </div>

                    <div className="py-8 mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none"
                      >
                        Get Started
                      </button>
                    </div>
                    <p className="text-xs text-center text-gray-600 sm:text-sm">
                      Terms of use  |  Privacy policy
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
