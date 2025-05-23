import "./assets/styles/styles.scss";
import "./main.scss";
import { displayProduits } from "./modules/produits/index.js";

import { produits as objetProduits } from "../data/products.js";

const content = document.querySelector(".content");

const produits = displayProduits(objetProduits);
content.append(produits);
