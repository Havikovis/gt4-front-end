// Dados locais da loja. As imagens vem da pasta /public do repositorio base.
const thumbs = [1, 2, 3, 4, 5].map((n) => `/product-thumb-${n}.jpeg`);

export const productImages = [1, 2, 3, 4, 5].map((n) => ({ src: `/produc-image-${n}.jpeg` }));

// Slides do destaque da Home (fotos do repositorio base; o Figma usa um recorte do Nike Air Force).
export const heroSlides = [
  { src: '/home-slide-7.jpeg', alt: 'Tênis Nike branco e laranja', position: '55% center' },
  { src: '/home-slide-6.jpeg', alt: 'Tênis Nike marrom', position: '55% center' },
  { src: '/home-slide-5.jpeg', alt: 'Tênis preto', position: '50% center' },
  { src: '/home-slide-8.jpeg', alt: 'Tênis Nike vermelho', position: '45% center' },
];

export const collections = [
  { src: '/collection-1.png', alt: 'Novo drop Supreme' },
  { src: '/collection-2.png', alt: 'Coleção Adidas' },
  { src: '/collection-3.png', alt: 'Novo Beats Bass' },
];

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const base = [
  { name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', category: 'Esporte e lazer', gender: 'Masculino', state: 'Novo', price: 200, priceDiscount: 100 },
  { name: 'Nike Air Max 270', brand: 'Nike', category: 'Corrida', gender: 'Unisex', state: 'Novo', price: 599.9 },
  { name: 'Adidas Ultraboost Light', brand: 'Adidas', category: 'Corrida', gender: 'Feminino', state: 'Novo', price: 799.9, priceDiscount: 599.9 },
  { name: 'Puma RS-X Core', brand: 'Puma', category: 'Casual', gender: 'Masculino', state: 'Usado', price: 349.9 },
  { name: 'Nike Air Jordan 1 Mid', brand: 'Nike', category: 'Esporte e lazer', gender: 'Unisex', state: 'Novo', price: 899.9, priceDiscount: 749.9 },
  { name: 'K-Swiss Classic 88', brand: 'K-Swiss', category: 'Casual', gender: 'Feminino', state: 'Novo', price: 289.9 },
  { name: 'Calçados Bonitos Urban', brand: 'Calçados Bonitos', category: 'Casual', gender: 'Masculino', state: 'Novo', price: 249.9, priceDiscount: 199.9 },
  { name: 'Adidas Terrex Trail', brand: 'Adidas', category: 'Utilitário', gender: 'Masculino', state: 'Usado', price: 459.9 },
  { name: 'Puma Suede Classic', brand: 'Puma', category: 'Casual', gender: 'Feminino', state: 'Novo', price: 379.9, priceDiscount: 299.9 },
  { name: 'Nike Pegasus 40', brand: 'Nike', category: 'Corrida', gender: 'Masculino', state: 'Novo', price: 699.9 },
  { name: 'Calçados Bonitos Work', brand: 'Calçados Bonitos', category: 'Utilitário', gender: 'Unisex', state: 'Novo', price: 219.9 },
  { name: 'K-Swiss Court Pro', brand: 'K-Swiss', category: 'Esporte e lazer', gender: 'Feminino', state: 'Usado', price: 259.9, priceDiscount: 189.9 },
];

export const products = base.map((item, index) => ({
  id: index + 1,
  type: 'Tênis',
  reference: `${38416000 + (index + 1) * 37}`,
  stars: (4 + ((index * 3) % 10) / 10).toFixed(1),
  rating: 40 + index * 7,
  image: thumbs[index % thumbs.length],
  description,
  sizes: ['39', '40', '41', '42', '43'],
  colors: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'],
  ...item,
}));

export const filterGroups = [
  { key: 'brand', title: 'Marca', inputType: 'checkbox', options: ['Adidas', 'Calçados Bonitos', 'K-Swiss', 'Nike', 'Puma'] },
  { key: 'category', title: 'Categoria', inputType: 'checkbox', options: ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'] },
  { key: 'gender', title: 'Gênero', inputType: 'checkbox', options: ['Masculino', 'Feminino', 'Unisex'] },
  { key: 'state', title: 'Estado', inputType: 'radio', options: ['Novo', 'Usado'] },
];

export const getProduct = (id) => products.find((product) => String(product.id) === String(id));
