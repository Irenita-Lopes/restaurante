import Image from "next/image";
import perfil from "@/assets/façaSeuEvento.png";
import { FaLinkedin} from 'react-icons/fa';
import Link from "next/link";

const Eventos = () => {
    return (
        <section
            className="min-h-screen px-4 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 bg-[#d1f387]"
            id="home"
        >
            <figure className="md:w-[30%] h-auto flex justify-center items-center">
                <Image
                    className="w-[100vw] h-[100vw] object-cover md:w-[400px] md:h-[400px] shadow-2xl"
                    src={perfil}
                    alt="Foto de Irenita Ferreira Lopes, com fundo branco e camiseta amarela, créditos à fotógrafa Amanda Cena"
                    priority
                    width={400}
                    height={400}
                />
            </figure>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                <h1 className="text-zinc-800 mb-6 font-bold text-4xl md:text-5xl drop-shadow-lg text-center">
                    Realize seu evento aqui
                </h1>
                <p className="mt-4 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm md:w-3/4">
                    Além de um respiro na rotina, esse espaço também é para acolher seu cliente naquela reunião de negócios cara a cara,
                    aquele passeio com os mais chegados na comemoração de aniversário, até um workshop criativo.
                    </p>
                    <p className="mt-4 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm md:w-3/4">
                    Conheça nossa programação e consulte as datas disponíveis para a realização do seu evento.
                    </p>
                <div className="md:w-3/4 flex justify-center  mt-6">
                     <a
                               href="https://www.ifood.com.br/Kibebelu"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-800 hover:text-white font-semibold text-lg hover:bg-[#F24B6A] transition"
                             >
                               Entre em contato
                             </a>
                </div>
            </div>
        </section>
    );
};

export default Eventos;
