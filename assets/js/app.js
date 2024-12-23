
const imagePaths = Array.from({ length: 15 }, (_, i) => `assets/img/${i + 1}.png`);
const titles = [
    "Skin Dragon Knight", "Skin Phantom Strike", "Caja de Armas Elite", "M4A1 | Dragon Lore", 
    "AK-47 | Fire Serpent", "Skin Desert Mirage", "Caja de Skins Exclusivas", "Skin Cyber Ninja",
    "AWP | HyperBeast", "Glock-18 | Moonlight", "Skin Inferno Beast", "AK-47 | Redline",
    "Caja de Armas Legendarias", "Skin Infernal Phoenix", "Skin Desert Mirage"
  ];
  const precios = [
    "US: $12 / CLP: $10.800",
    "US: $10 / CLP: $9.000",
    "US: $15 / CLP: $13.500",
    "US: $30 / CLP: $27.000",
    "US: $45 / CLP: $40.500",
    "US: $8 / CLP: $7.200",
    "US: $20 / CLP: $18.000",
    "US: $18 / CLP: $16.200",
    "US: $25 / CLP: $22.500",
    "US: $6 / CLP: $5.400",
    "US: $14 / CLP: $12.600",
    "US: $22 / CLP: $19.800",
    "US: $40 / CLP: $36.000",
    "US: $35 / CLP: $31.500",
    "US: $8 / CLP: $7.200",
  ];
  const descriptions = [
    "Skin épico que transforma a tu personaje en un poderoso caballero dragón con efectos visuales espectaculares.",
    "El traje perfecto para los jugadores sigilosos, con un diseño futurista y detalles únicos.",
    "Una caja misteriosa que contiene las armas más poderosas y raras del juego, solo para los jugadores más audaces.",
    "¡Impresionante skin para el M4A1! Con el legendario diseño 'Dragon Lore' que te hará destacar en cada partida.",
    "Desata el poder de la serpiente de fuego con este skin exclusivo para el AK-47, con llamas y detalles metálicos.",
    "Transforma tu apariencia en el desierto con el camuflaje Desert Mirage, ideal para partidas de largo alcance.",
    "Caja misteriosa que contiene skins raros, solo para los coleccionistas más dedicados. ¿Qué suerte tendrás?",
    "Lleva el futuro a tu arsenal con este skin Cyber Ninja, que destaca con colores brillantes y detalles electrónicos.",
    "La AWP nunca se vio tan bien: el diseño HyperBeast es vibrante y aterrador, una combinación perfecta de arte y poder.",
    "Lleva el poder lunar a tu mano con este skin Glock-18 'Moonlight', con un diseño que refleja la belleza del cosmos.",
    "¡Un skin feroz para los jugadores que aman la acción! El 'Inferno Beast' es perfecto para un combate explosivo.",
    "El AK-47 Redline es uno de los diseños más codiciados, con un toque de estilo urbano y detalles agresivos.",
    "Caja de armas legendarias que contiene solo los objetos más codiciados en el juego. ¿Te atreves a abrirla?",
    "Este skin de AK-47 combina colores brillantes con una imagen de un fénix infernal, ideal para los jugadores audaces.",
    "Lleva el futuro a tu arsenal con este skin Cyber Ninja, que destaca con colores brillantes y detalles electrónicos.",
  ];
  
const mainContainer = document.getElementById("items");
function generateCards() {
  imagePaths.forEach((image, index) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    const cardMarco = document.createElement("div");
    cardMarco.classList.add("card-marco");

    const cardPhoto = document.createElement("div");
    cardPhoto.classList.add("card-photo");

    const img = document.createElement("img");
    img.src = image;
    img.alt = titles[index];

    cardPhoto.appendChild(img);
    cardImage.appendChild(cardMarco);
    cardImage.appendChild(cardPhoto);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-contenido");
    
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = titles[index];
    
    const cardDescription = document.createElement("p");
    cardDescription.textContent = descriptions[index];

    const precius = document.createElement("span");
    precius.textContent = precios[index];
    
    const buttoncito = document.createElement("button");
    buttoncito.classList.add("button");
    buttoncito.textContent = "COMPRAR";

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(precius);
    cardContent.appendChild(buttoncito);

    card.appendChild(cardImage);
    card.appendChild(cardContent);

    mainContainer.appendChild(card);
  });
}

generateCards();
