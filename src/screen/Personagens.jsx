import React from 'react'

function Titulo() {
    return (
        <div>
            <h1>Player Select</h1>
        </div>
    )
}

function SelecionarPersonagem() {
    return (
        <div>
            <p>1P</p>
            <p>2P</p>
        </div>
    )
}

function ListaPersongens() {
    return (
    <div>
        <p>1P</p>
        <p>2P</p>
    </div>
    )
}

function PersonagemSelecionado() {
    return (
        <div>
            <h2>Ryu</h2>
            <h2>Ken</h2>
        </div>
    )
}

function MapaMundi() {
    return (
        <div>
            <img src="mapamundi" alt="mapa" />
        </div>
    )
}

function Paises() {
    return (
        <div>
            <p>Spain</p>
            <img src="https://static.todamateria.com.br/upload/es/pa/espanhabandeiraxx.jpg" alt="Spain" width="100" height="100" />

            <p>Russia</p>
            <img src="https://static.todamateria.com.br/upload/ba/nd/bandeirabb-0.jpg" alt="Russia" />

            <p>India </p>
            <img src="Indihttps://www.estudopratico.com.br/wp-content/uploads/2017/05/significado-da-bandeira-da-india.jpg" alt="India" width="100" height="100" />

            <p>China</p>
            <img src="https://www.significados.com.br/foto/bandeira-da-china.jpg" alt="China" width="100" height="100" />

            <p>Thailandia</p>
            <img src="Thttps://www.estudopratico.com.br/wp-content/uploads/2017/04/significado-da-bandeira-da-tailandia.jpg" alt="Thailandia" width="100" height="100" />

            <p>Japan</p>
            <img src="https://www.br.emb-japan.go.jp/cultura/bandeira.jpg" alt="Japan" width="100" height="100" />

            <p>Japan</p>
            <img src="https://www.br.emb-japan.go.jp/cultura/bandeira.jpg" alt="Japan" width="100" height="100" />

            <p>USA</p>
            <img src="https://image.freepik.com/vetores-gratis/ilustracao-de-bandeira-eua_53876-18165.jpg" alt="USA" width="100" height="100" />

            <p>USA</p>
            <img src="https://image.freepik.com/vetores-gratis/ilustracao-de-bandeira-eua_53876-18165.jpg" alt="USA" width="100" height="100" />

            <p>USA</p>
            <img src="https://image.freepik.com/vetores-gratis/ilustracao-de-bandeira-eua_53876-18165.jpg" alt="USA" width="100" height="100" />

            <p>Brasil</p>
            <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg" alt="Brasil" width="100" height="100" />

        </div>
    )
}

export default Principal
function Principal() {
    return <div>

        <Titulo />
        <SelecionarPersonagem />
        <PersonagemSelecionado />
        <MapaMundi />
        <Paises />
        <ListaPersongens/>
        
        

    </div>
}