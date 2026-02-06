import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="w-full bg-[#A3A651] mt-20 py-6 border-t border-[#D7D9A9]">
            <div className="flex flex-col md:flex-row justify-between items-center px-6">

                <h4 className="font-bold text-lg text-zinc-900">
                    Desenvolvido por Irenita Lopes 
                </h4>

                <div className="flex gap-6 text-2xl text-zinc-900">
                    <a
                        href="https://www.linkedin.com/in/irenita-ferreira-lopes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Irenita-Lopes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}