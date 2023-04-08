import { useState } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();


export const ContextProvider = ({ children }) => {

  const[theme, setTheme]= useState("light");
  
  const [data, setData] = useState();
  const [errorFetch, setErrorFetch] = useState();
  const [loading, setLoading] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/users";
  
  function changeTheme(){
    setTheme(theme === "light"? "dark":"light")
  }
    
  async function fetchData() {
    setLoading(true);
    try {
      const dentistsData = await (await fetch(url)).json();
      console.log("Fetch exitoso");
      setData(dentistsData);
    } catch (error) {
      setErrorFetch(error.message);
      console.log("Error", error.message);
    }
    setLoading(false);
  }

  const value ={
    theme, changeTheme, data,errorFetch, loading, fetchData
  }
  
  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};