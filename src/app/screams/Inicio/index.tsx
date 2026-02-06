import taioba from "@/assets/taioba.png";

const Inicio = () => {
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden scroll-mt-14">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
                style={{ backgroundImage: `url(${taioba.src})` }}
            />

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                <h1 className="text-6xl md:text-8xl font-bold text-[#297DA6] drop-shadow-lg">
                    Kibebelu
                </h1>
                <h2 className="mt-4 text-xl md:text-4xl text-white drop-shadow-md">
                    Frutaria e coworking
                </h2>
            </div>
        </div>
    );
};

export default Inicio;