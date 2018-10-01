import React from "react";
import classes from "./Burguer.css";
import Ingredient from "./Ingredient/Ingredient";

const burger = props => {
  let transfromedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transfromedIngredients.length === 0) {
    transfromedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burguer}>
      <Ingredient type="bread-top" />
      {transfromedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
