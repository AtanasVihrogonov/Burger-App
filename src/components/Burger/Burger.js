import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // Transform ingredients object into a array of the values of the ingreduents
  let transformedIngredients = Object.keys(props.ingredients)
  .map((igKey) => {
    // Transform string value into a an array with as many elements as we have ingredients for a given ingredient.
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      //console.log(props.ingredients[igKey]);
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  // console.log(props.ingredients);
  // console.log(Object.keys(props.ingredients));
  // console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
