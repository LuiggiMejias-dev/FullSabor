// src/data.js

// 1. Importa tus imágenes desde la carpeta assets
import imgCeviche from './assets/ceviche.jpg';
import imgLomo from './assets/lomo.jpg';
import imgCausa from './assets/causa.jpg';
import imgChicha from './assets/chicha.jpg';
import imgSuspiro from './assets/suspiro.jpg';

export const FOOD_DATA = [
  {
    id: 1,
    name: "Ceviche Carretillero",
    category: "Marinos",
    price: 28.00,
    description: "Ceviche clásico de pescado fresco marinado en limón puro, acompañado de camote, choclo tierno y su porción de chicharrón de calamar.",
    image: imgCeviche 
  },
  {
    id: 2,
    name: "Lomo Saltado Criollo",
    category: "Fondos",
    price: 32.00,
    description: "Jugosos trozos de lomo fino salteados al wok con cebolla, tomate, un toque de pisco, acompañados de papas fritas y arroz blanco.",
    image: imgLomo
  },
  {
    id: 3,
    name: "Causa Limeña de Pollo",
    category: "Entradas",
    price: 18.00,
    description: "Masa de papa amarilla suave moldeada con ají amarillo y limón, rellena de pollo deshilachado con mayonesa y palta fresca.",
    image: imgCausa
  },
  {
    id: 4,
    name: "Chicha Morada Heladita",
    category: "Bebidas",
    price: 8.00,
    description: "Refrescante bebida tradicional a base de maíz morado hervido con piña, manzana, canela y clavo de olor, con su toque exacto de limón.",
    image: imgChicha
  },
  {
    id: 5,
    name: "Suspiro a la Limeña",
    category: "Postres",
    price: 12.00,
    description: "Clásico postre limeño con una base suave de manjar blanco de yemas y cubierto con un merengue italiano aromatizado al oporto y canela.",
    image: imgSuspiro
  }
];