import { useEffect, useState } from "react";
import { BsArrowRight } from 'react-icons/bs';
import './ItSubjects.css'
const ItSubjects = () => {
    const [skilled, setSkilled] = useState([])
    useEffect(() => {
        fetch('Skills.json')
            .then(res => res.json())
            .then(data => {
                setSkilled(data)
                console(data)
            })
    }, [])
    return (
        <div className="lg:px-24 md:px-12 px-8 py-20 relative">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 md:gap-4 gap-2">
                {
                    skilled.map((skill, index) => <div key={skill.index}>

                        <div className="cursor-pointer full-box">
                            <div className="skilled rounded">
                            <img className="rounded w-full" src={skill.image} alt="" />
                            </div>
                            <div className="mt-5 absolute lg:top-[55%] top-[70%] px-8 text-white">
                                <p className="text-2xl font-semibold">{skill.title}</p>
                                <p className="flex items-center text-base py-1 text-[#005DE0] hover:text-white duration-300">Learn More <span className="px-2 mt-1"><BsArrowRight></BsArrowRight></span></p>
                            </div>
                        </div>

                            </div>)
                }
                        </div>
                    </div>
                    );
};

                export default ItSubjects;