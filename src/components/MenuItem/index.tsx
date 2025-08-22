import { StaticImageData } from 'next/image'

export interface IMenuItemProps {
  nome: string;
  descricao: string;
  medida?: string;
  valor: string;
  imagem?: StaticImageData; 
}

const MenuItem = ({ nome, descricao, medida, valor, imagem }: IMenuItemProps) => {
  return (
    <li className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition flex items-center space-x-4">
      {imagem && (
        <div className="w-16 h-16 rounded-md overflow-hidden shadow-inner">
          <img src={imagem.src} alt={nome} className="w-full h-full object-cover" /> // Use imagem.src
        </div>
      )}
      <div>
        <h3 className="font-semibold text-lg text-[#F24B6A]">{nome}</h3>
        <p className="text-sm text-zinc-600">
          {descricao}
          {medida && <span className="text-xs text-zinc-500 ml-2">({medida})</span>}
        </p>
        <span className="text-zinc-800 font-bold mt-2 block">{valor}</span>
      </div>
    </li>
  );
};

export default MenuItem;