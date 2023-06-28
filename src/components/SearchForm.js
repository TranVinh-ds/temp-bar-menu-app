import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSearch = () => {
    const searchValue = inputRef.current.value;
    if (!searchValue) {
      toast.error('please type your drink before pressing enter key!');
      return;
    }
    setSearchTerm(searchValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">type your favorite cocktail drink</label>
          <input type="text" id="name" ref={inputRef} onChange={handleSearch} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
