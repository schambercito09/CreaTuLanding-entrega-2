import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterListContainer } from "./Components/CharacterListContainer/CharacterListContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { Cart } from "./Components/Cart/Cart";
import { CharacterDetail } from "./Components/CharacterDetail/CharacterDetail";
import { CharacterDetailContainer } from "./Components/CharacterDetailContainer/CharacterDetailContainer";


const App = () =>{

  

  return(
    <>

    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element= {<CharacterListContainer/>}/>
          <Route path="/characters" element= {<CharacterListContainer/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/character/:id" element= {<CharacterDetailContainer/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
};

