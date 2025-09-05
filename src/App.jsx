import Personagem from './components/Personagem';

function App() {
  const Rick = {
    Imagem: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    Nome: "Rick Sanchez",
    Status: "Vivo",
    Especies: "Humano",
    Genero: "Homem"
  };

  const ultimoEpisodio = "Piloto";

  return <Personagem personagem={Rick} ultimoEpisodio={ultimoEpisodio} />;
}

export default App;
