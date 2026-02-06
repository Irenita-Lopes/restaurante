import MenuCard from '@/components/MenuCard';
import React from 'react';
import lanche from '../../../assets/lanche.png';
import salada from '../../../assets/salada.png';
import suco from '../../../assets/suco.png';
import vitamina from '../../../assets/vitamina.png';

const cardapio = {
  refeicoes: [
    {
      imagem: lanche,
      nome: "Monte seu lanche",
      descricao: "Indique um suporte, um recheio, uma opção de folha e um molho.",
      medida: "300g",
      valor: "R$ 20,00"

    },
    {
      imagem: salada,
      nome: "Monte sua salada",
      descricao: "Escolha uma base, um recheio e um molho.",
      medida: "300g",
      valor: "R$ 20,00"
    },
    {
      imagem: lanche,
      nome: "Sanduíche da casa Kibebelu",
      descricao: "Pão artesanal, queijo de castanha do caju, rúcula e molho da casa.",
      medida: "300g",
      valor: "R$ 15,00"
    },
    {
      imagem: salada,
      nome: "Salada da casa Kibebelu",
      descricao: "Mix de folhas de época, snacks de torrada, legumes de época gratinados e molho da casa.",
      medida: "300g",
      valor: "R$ 15,00"
    },
  ],
  sucosEChas: [
    {
      imagem: suco,
      nome: "Monte sua bebida",
      descricao: "Escolha uma base, um sabor e um complemento.",
      medida: "300ml",
      valor: "R$ 5,00"
    },
    {
      imagem: suco,
      nome: "Suco da casa Kibebelu",
      descricao: "Horapronobis, laranja e hortelã.",
      medida: "300ml",
      valor: "R$ 10,00",
    },
    {
      imagem: suco,
      nome: "Refresco da casa Kibebelu",
      descricao: "Chá de hibisco e manga.",
      medida: "300ml",
      valor: "R$ 10,00"
    },
    {
      nome: "Chá da casa Kibebelu",
      descricao: "Chá de erva cidreira com limão, nas opções quente e gelado.",
      medida: "300ml",
      valor: "R$ 10,00"
    },
  ],
  vitaminas: [
    {
      imagem: vitamina,
      nome: "Monte sua vitamina",
      descricao: "Escolha até 4 itens.",
      medida: "300ml",
      valor: "R$ 10,00"
    },
    {
      imagem: vitamina,
      nome: "Vitamina da casa Kibebelu",
      descricao: "Amoras, goiabas e banana.",
      medida: "300ml",
      valor: "R$ 10,00"
    },
    {
      imagem: vitamina,
      nome: "Vitamina de abacate Kibebelu",
      descricao: "Inhame, abacate e banana.",
      medida: "300ml",
      valor: "R$ 15,00"
    },
    {
      imagem: vitamina,
      nome: "Vitamina de banana Kibebelu",
      descricao: "Leite de castanha, banana e chia.",
      medida: "300ml",
      valor: "R$ 15,00"
    },
  ],
};

const Cardapio = () => {
  return (
    <div id="menu" className="min-h-screen bg-white px-6 py-12 md:px-20 scroll-mt-14">

      <h1 className="text-[#297DA6] mb-6 font-bold text-4xl md:text-5xl drop-shadow-lg text-center">
        Nossas belezuras
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <MenuCard title="Refeições" items={cardapio.refeicoes} />
        <MenuCard title="Sucos e Chás" items={cardapio.sucosEChas} />
        <MenuCard title="Vitaminas" items={cardapio.vitaminas} />
      </div>
    </div>
  );
};

export default Cardapio;