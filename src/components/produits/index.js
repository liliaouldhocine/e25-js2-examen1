import * as produitsStyles from "./produits.scss";
export default produitsStyles;

const displayProduits = (objetProduits) => {
  // Créer la division principale
  // Parcourrir le tableau de sproduits et les créer au fur et à mesure

  const leContaineurDeTousLesProduits = document.createElement("div");
  leContaineurDeTousLesProduits.className = "products-container";
  const elementsProduits = objetProduits.map((produit, index) =>
    createProduitElement(produit)
  );

  leContaineurDeTousLesProduits.append(...elementsProduits);
  return leContaineurDeTousLesProduits;
};

const createProduitElement = (objetProduit, index) => {
  // Dessiner le produit donné en paramétre
  const a = document.createElement("a");
  a.className = "product block";
  a.innerHTML = `
    <div class="overflow">
        <div class="img-container" style="background-image: url(${objetProduit.image})" ></div>
    </div>
    <h3 class="brand">${objetProduit.maison}</h3>
    <h2 class="title">${objetProduit.nom}</h2>
    <h2 class="price">${objetProduit.prix}$</h2>
    `;

  return a;
};

export { produitsStyles, displayProduits };
