import './Banner.css'
import backImg from '../../../assets/image/bg.jpg'
const Banner = () => {
    return (
        <div id='home'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6RnM01Z/bg02.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full flex justify-center items-center flex-col">
                        <p className='lg:tracking-widest lg:font-medium'>TECHNOLOGY RELETED CONSULTANCY</p>
                        <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">We bring great Ideas to life</h1>
                        <p className="mb-5 lg:w-[60%] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias, suscipit sed eos sapiente nihil fugiat voluptatem veritatis pariatur iste quidem a itaque, amet odio architecto! Quia repellendus vel, voluptas ipsa animi esse ullam porro nam explicabo rem vero! Fugit ratione earum illo, atque neque est et quod. Consequuntur, quia!</p>
                        <button className="banner-btn px-12 py-4 text-lg font-medium text-white rounded">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;