    const buscarCharacter = async (id) => {
    const characterBuscado = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const characterB = await characterBuscado.json();
    return characterB;
}

const armarLista = (character) => {
    return `
        <tr>
            <td>${character.id}</td>
            <td>${character.name}</td>
            <td>${character.species}</td>
            <td>${character.status}</td>
            <td><img width="200px "src="${character.image}" alt="${character.name}"></td>      
            </tr>   
    `;
}
const lista_personajes = [] 

const agregarDatosTabla = async () => {
    const input = document.querySelector("input#input-character");
    const tabla = document.querySelector("tbody#table-body");
    const characterEncontrado = await buscarCharacter(input.value);
    lista_personajes.push(characterEncontrado)
    localStorage.setItem("Personajes", JSON.stringify(characterEncontrado))  
    const listaterminada = armarLista(characterEncontrado);
    tabla.innerHTML += listaterminada;
}

function eliminarDatosTabla(){
    localStorage.removeItem("perosnajes")
    const tabla = document.querySelector("tbody#table-body")
    tabla.innerHTML=""
}