import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

const AppContext = createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);

      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktail = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            type: strAlcoholic,
            image: strDrinkThumb,
            glass: strGlass,
          };
        });

        setCocktails(newCocktail);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        cocktails,
        name,
        email,
        user,
        setName,
        setEmail,
        setUser,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
