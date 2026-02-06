import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const Contatos = () => {
  return (
    <div id="contatos" className="min-h-full bg-white flex flex-col items-center px-6 py-12 md:px-20 scroll-mt-14">
      
      <h1 className="text-[#297DA6] mb-6 font-bold text-4xl md:text-5xl drop-shadow-lg text-center">
        Vem viver essa belezura com a gente!
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col items-start p-6 rounded-2xl shadow-md bg-[#A3A651] hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-zinc-800 mb-4">Contatos</h2>
          
          <div className="w-full space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-[#F2F2F2] transition">
              <MdOutlineMailOutline className="text-[#297DA6] text-2xl" />
              <div>
                <span className="font-semibold">E-mail:</span>{" "}
                <a href="mailto:irenita.f.lopes@gmail.com" 
                className="hover:text-[#297DA6] transition-colors">
                  irenita.f.lopes@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-[#F2F2F2] transition">
              <FaWhatsapp className="text-[#297DA6] text-2xl" />
              <div>
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a href="https://wa.me/+551199933596981" target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#297DA6] transition-colors">
                  (11) 93359-6981
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-[#F2F2F2] transition">
              <FaInstagram className="text-[#297DA6] text-2xl" />
              <div>
                <span className="font-semibold">Instagram:</span>{" "}
                <a href="https://www.instagram.com/alimentafros/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#297DA6] transition-colors">
                  @Kibebelu
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-[#F2F2F2] transition">
              <FaLinkedinIn className="text-[#297DA6] text-2xl" />
              <div>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a href="https://www.linkedin.com/in/irenita-ferreira-lopes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#297DA6] transition-colors">
                  Kibebelu Frutaria e Coworking
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl shadow-md bg-[#A3A651] text-zinc-800 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">Peça pelo iFood</h2>
          <p className="text-lg mb-6">
            Prefere a comodidade de pedir online? Encontre nosso menu completo e faça seu pedido direto no iFood!
          </p>
          <a
            href="https://www.ifood.com.br/Kibebelu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-800 hover:text-white font-semibold text-lg hover:bg-[#297DA6] transition"
          >
            <GiNotebook className="text-2xl" />
            Ir para o iFood
          </a>
        </div>

        <div className="flex flex-col items-start p-6 rounded-2xl shadow-md bg-[#A3A651] hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-zinc-800 mb-4">Promoções</h2>
          <p className="text-lg text-zinc-800 mb-4">
            Fique de olho nas nossas ofertas especiais! Siga-nos nas redes sociais para não perder nenhuma promoção.
          </p>
          <ul className="list-disc list-inside text-zinc-800">
            <li>Desconto de 10% no valor total da compra no mês de aniversário.</li>
            <li>Happy Hour de Coworking: Descontos especiais para grupos.</li>
            <li>Desconto de 10% no valor total da compra para professores.</li>
            <li>Promoções exclusivas para mulheres cis e trans em março e maio.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Contatos;