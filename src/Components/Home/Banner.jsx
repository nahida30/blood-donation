import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div>

            



<section className="bg-center bg-no-repeat bg-[url('https://i.ibb.co/BTqqPZQ/rokto.jpg')] bg-gray-200 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-red-700 md:text-5xl lg:text-6xl">BLOOD  <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['DONATION']}
            loop={50}
            cursor
            cursorStyle='❤️'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span> </h1>
        <p className="mb-8 text-xl font-bold text-white lg:text-2xl sm:px-16 lg:px-48">Check our website for information on upcoming blood drives and events in your area. Join us and be a part of something extraordinary.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to="register" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"> Join As a Donor
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></Link>
           
            <a href="" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Search Donor
            </a>  
        </div>
    </div>
</section>


            
        </div>
    );
};

export default Banner;