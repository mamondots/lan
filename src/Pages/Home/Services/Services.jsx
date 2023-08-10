import { useEffect, useState } from "react";
import './Services.css'

const Services = () => {
    const [items, setItems] = useState([])
    useEffect(() =>{
        fetch('Services.json')
        .then(res =>res.json())
        .then(data => {
            setItems(data)
        })
    },[])
    return (
        <div className="lg:px-24 md:px-12 px-8 pb-12 lg:mt-[-12vh] mt-[-12vh] ">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:space-x-4 md:space-x-2 space-x-2">
                 {
                    items.map((item,index) =><div key={item.index}>
                        <div className="bg-white flex justify-center items-center flex-col py-12 rounded px-8 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-500 hover:text-white relative total-box overflow-hidden">
                            <img src={item.image} alt="" />
                            <div className="text-center">
                                <h2 className="text-xl font-medium py-2">{item.title}</h2>
                                <p className="font-medium py-2">{item.description}</p>
                            </div>
                            <div className=" absolute  right-[-120px] top-[40%]">
                                <img className="w-[100%] showes" src={item.backImg} alt="" />
                            </div>
                        </div>
                    </div>)
                 }
            </div>
        </div>
    );
};

export default Services;