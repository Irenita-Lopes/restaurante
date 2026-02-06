"use client";
import Link from "next/link";
import { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div
            className={`${isOpen ? "h-screen" : "h-auto"} fixed md:h-auto top-0 pr-30 bg-white z-80 w-full text-black flex flex-col md:flex-row align-center items-center p-5`}
        >
            <div className="flex justify-center md:justify-start items-center relative w-full md:w-auto p-4 md:p-0">
                {isOpen ? <GrClose
                    className="cursor-pointer absolute right-4 md:hidden"
                    onClick={toggleSideBar} /> :
                    <GrMenu
                        className="cursor-pointer absolute right-4 md:hidden"
                        onClick={toggleSideBar}
                    />}
            </div>
            
            <nav className="w-[100%] h-[100%] text-[20px] md:h-auto flex flex-col md:flex-row align-center items-center justify-center md:justify-end gap-10">
                <Link
                    className={`text-[#297DA6] hover:text-[#8EA65B] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#home"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Início
                </Link>
                <Link
                    className={`text-[#297DA6] hover:text-[#8EA65B] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#menu"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Cardápio
                </Link>
                <Link
                    className={`text-[#297DA6] hover:text-[#8EA65B] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#eventos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Eventos
                </Link>
                <Link
                    className={`text-[#297DA6] hover:text-[#8EA65B] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#contatos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Contatos
                </Link>
                <Link
                    className={`text-[#297DA6] hover:text-[#8EA65B] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#contatos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Pedidos
                </Link>
            </nav>
        </div>

    );
};

export default NavBar;