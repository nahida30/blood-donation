/* eslint-disable react/prop-types */


const FeatureCard = ({item}) => {
    const {id, image, service_name, service_description, view_detail_button} = item || {}
    return (
        <div>
            

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right">
    <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service_name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service_description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
            {view_detail_button}
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        </div>
    );
};

export default FeatureCard;