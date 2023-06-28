import React from 'react';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { isLoading, cocktails } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">no item matched your searching criteria</h2>
    );
  }
  return (
    <section>
      <h2 className="section-title">cocktails</h2>
      <div className="section-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
