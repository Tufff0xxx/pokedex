const buscar = document.getElementById('boton');
const contenedor = document.querySelector('.contenedor-poke');
const numPokeInput = document.getElementById('numPoke');

const tipoTraducido = {
    normal: "Normal",
    fighting: "Lucha",
    flying: "Volador",
    poison: "Veneno",
    ground: "Tierra",
    rock: "Roca",
    bug: "Bicho",
    ghost: "Fantasma",
    steel: "Acero",
    fire: "Fuego",
    water: "Agua",
    grass: "Planta",
    electric: "Eléctrico",
    psychic: "Psíquico",
    ice: "Hielo",
    dragon: "Dragón",
    dark: "Siniestro",
    fairy: "Hada",
};

buscar.addEventListener('click', async () => {
    const id = numPokeInput.value;
    
    // Validar si se ha ingresado un número
    if (!id || isNaN(id)) {
        mostrarError("Por favor, ingresa un número.");
        return;
    }

    const data = await verificarPoke(id);

    // Validar si el Pokémon no existe
    if (!data) {
        mostrarError("No hay un pokemon con ese id.");
        return;
    }

    const tiposTraducidos = data.types.map((tipo) => tipoTraducido[tipo.type.name]);
    data.tipo = tiposTraducidos.join(", ");
    renderizarPoke(data);
});

const mostrarError = (mensaje) => {
    contenedor.innerHTML = `
    <div class="error">
        <h2>${mensaje}</h2>
        <img id="pokebola" src="imagen/pokebola.png" alt="" srcset="">
    </div>`;
};

const renderizarPoke = (data) => {
    contenedor.innerHTML = `
    <div class="pokemon">
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <span class="nombre">${data.name}</span>
        <span class="tipo">${data.tipo}</span>
        <span class="altura">Altura: ${data.height / 10} m</span>
        <span class="peso">Peso: ${data.weight / 10} kg</span>
    </div>
    `;
};







