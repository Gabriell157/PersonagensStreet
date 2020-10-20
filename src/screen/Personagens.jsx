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
            <img src="Spain" alt="Spain" />

            <p>Russia</p>
            <img src="Russia" alt="Russia" />

            <p>India </p>
            <img src="India" alt="India" />

            <p>China</p>
            <img src="China" alt="China" />

            <p>Thailandia</p>
            <img src="Thalandia" alt="Thailandia" />

            <p>Japan</p>
            <img src="Japan" alt="Japan" />

            <p>Japan</p>
            <img src="Japan" alt="Japan" />

            <p>USA</p>
            <img src="USA" alt="USA" />

            <p>USA</p>
            <img src="USA" alt="USA" />

            <p>USA</p>
            <img src="USA" alt="USA" />

            <p>Brasil</p>
            <img src="Brasil" alt="Brasil" />

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