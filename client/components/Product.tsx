import { useCart } from '../contexts/AppContext';
import { productExistsInBasket } from 'helpers/productExistsInBasket';
import { FC, memo } from 'react';
import { BasicDoc, Hit } from "react-instantsearch-core";
import styles from "../styles/Home.module.css";


export const Product : FC<{ hit: Hit<BasicDoc>; }> = memo(({hit}) => {
  const { products, setCartContent } = useCart();

  const addProduct = () => {
    setCartContent(hit);
  }

  const buttonText = productExistsInBasket(products, hit.objectID) ? "retirer" : "ajouter";

    return (
      <div className={styles.card}>
        <img src={hit.image} alt={hit.name} />
        <div className="hit-description">
          {hit.name}
        </div>
        <div className="hit-price">${hit.salePrice}</div>
        <div onClick={addProduct} className={styles.button}>
          {buttonText}
        </div>
      </div>
    );
});