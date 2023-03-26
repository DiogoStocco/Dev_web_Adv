import { useParams } from 'react-router-dom';

const filmes = [{
    "nome": "Kung fu panda",
    "duracao": "1H30",
    "ano": 2013,
    "foto": "Panda.jpg",
    "genero": "Ação/Nerd/Animação",
    "descricao": "Panda louco que sabe kung fu!",
    "nota": 10
  },

  {
    "nome": "Como treinar o seu dragão",
    "duracao": "1H37",
    "ano": 2014,
    "foto": "Gadrao.jpg",
    "genero": "Ação/Nerd/Animação",
    "descricao": "Nerd que tem um cachorro que gospe fogo de estimação!",
    "nota": 8
  },

  {
    "nome": "Shrek",
    "duracao": "2H30",
    "ano": 2001,
    "foto": "shrek.jpg",
    "genero": "Animação",
    "descricao": "Ogro do balacubaco que quer salvar uma princesa la!",
    "nota": 10
  },

  {
    "nome": "Os sem floresta",
    "duracao": "2H30",
    "ano": 2004,
    "foto": "Floresta.jpg",
    "genero": "Animação",
    "descricao": "Bichos que perderam suas casas!",
    "nota": 10
  },
]

export default function Detalhes() {
    const { filme } = useParams()
    return (
        <div >
            <p>Filme escolhido: {filme}</p>
            
            {(() => {
              if(filme === 'Kung fu panda'){
                return (
                  <div>
                    <p>Sinopse: {filmes[0].descricao}</p>
                      <p>Gênero: {filmes[0].genero}</p>
                      <p>Nota: {filmes[0].nota}</p>
                    <p>Ano: {filmes[0].ano}</p>
                  </div>
                )
              } else if (filme === 'Como treinar o seu dragão') {
                return (
                    <div>
                        <p>Sinopse: {filmes[1].descricao}</p>
                          <p>Gênero: {filmes[1].genero}</p>
                          <p>Ano: {filmes[1].ano}</p>
                        <p>Nota: {filmes[1].nota}</p>
                    </div>
                )
            } else if (filme === 'Shrek') {
                return (
                    <div>
                        <p>Sinopse: {filmes[2].descricao}</p>
                          <p>Gênero: {filmes[2].genero}</p>
                          <p>Ano: {filmes[2].ano}</p>
                        <p>Nota: {filmes[2].nota}</p>
                    </div>
                )
              }
              else if (filme === 'Os sem floresta') {
                return (
                    <div>
                        <p>Sinopse: {filmes[2].descricao}</p>
                          <p>Gênero: {filmes[2].genero}</p>
                          <p>Ano: {filmes[2].ano}</p>
                        <p>Nota: {filmes[2].nota}</p>
                    </div>
                )
              }
          })()}
        </div>
    )
}