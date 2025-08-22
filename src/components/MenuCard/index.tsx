import React from 'react';
import MenuItem from '../MenuItem';

export interface IMenuCard {
  title: string;
  items: Array<{
    nome: string;
    descricao: string;
    medida: string;
    valor: string;
  }>;
}

const MenuCard = ({ title, items }: IMenuCard) => {
  return (
    <div className="flex flex-col p-6 rounded-2xl shadow-md bg-[#d1f387] hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-zinc-800 mb-4 text-center">{title}</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <MenuItem 
            key={index} 
            nome={item.nome}
            descricao={item.descricao}
            medida={item.medida}
            valor={item.valor}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuCard;