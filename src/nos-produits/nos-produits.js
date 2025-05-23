import "../assets/styles/styles.scss";
import "./nos-produits.js";
import "./nos-produits.scss";
import { produitsFancy } from "../../data/products2.js";
import { displayProduits } from "../modules/produits/index.js";

const content = document.querySelector(".content");

const lesProduits = displayProduits(produitsFancy);

content.append(lesProduits);
