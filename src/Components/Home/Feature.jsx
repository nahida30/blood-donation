import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const Feature = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('feature.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <div className=" bg-no-repeat bg-[url('https://i.ibb.co/KGjhj6q/rokto.jpg')] bg-gray-200 bg-blend-multiply ">
           
            <div className="grid gap-5 p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {
                items.map(item => <FeatureCard key={item.id} item={item}></FeatureCard>)
            }

            </div>



          
        </div>
    );
};

export default Feature;