import { useEffect, useState } from 'react';

function App() {
  const [personagem, setPersonagem] = useState(null);
  const [ultimoEpisodio, setUltimoEpisodio] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(res => res.json())
      .then(dados => {
        setPersonagem(dados);

        const urlUltimoEp = dados.episode[dados.episode.length - 1];

        return fetch(urlUltimoEp);
      })
      .then(res => res.json())
      .then(dadosEp => {
        setUltimoEpisodio(dadosEp.name);
        setCarregando(false);
      })
      .catch(erro => {
        console.error('Erro:', erro);
      });
  }, []);

  if (carregando) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Personagem</h1>
      <img src={personagem.image} alt={personagem.name} width="250" />
      <p>Nome: {personagem.name}</p>
      <p>Status: {personagem.status}</p>
      <p>Espécie: {personagem.species}</p>
      <p>Gênero: {personagem.gender}</p>
      <p>Último episódio: {ultimoEpisodio}</p>
    </div>
  );
}

export default App;
