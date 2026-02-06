import Image from "next/image";
import Inicio from "./screams/Inicio";
import Contatos from "./screams/Contatos";
import Cardapio from "./screams/Cardapio";
import Eventos from "./screams/Eventos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Inicio />
      <Cardapio />
      <Eventos /> 
      <Contatos />
      <Footer />
    </div>
  );
}
