"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Busca el elemento select en el DOM
    const select = document.getElementById('items');
    if (!select) return; // Si no existe, no hace nada

    // Recorre los ítems y agrega una opción por cada uno
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement('option');
        option.textContent = item.name;
        option.value = key; // Guarda la clave para identificar el ítem
        select.appendChild(option);
    });

    // Evento para mostrar los datos del ítem seleccionado
    select.addEventListener('change', function () {
        const selectedKey = select.value;
        const item = itemData[selectedKey];
        if (!item) return;

        document.getElementById('displayImage').src = item.image;
        document.getElementById('photographer').value = item.photographer;
        document.getElementById('description').value = item.description;
        document.getElementById('score').value = item.score;
    });

    // Eventos para aumentar o disminuir el puntaje
    document.getElementById('increaseScore').addEventListener('click', function () {
        const selectedKey = select.value;
        if (!itemData[selectedKey]) return;
        itemData[selectedKey].score++;
        document.getElementById('score').value = itemData[selectedKey].score;
    });

    document.getElementById('decreaseScore').addEventListener('click', function () {
        const selectedKey = select.value;
        if (!itemData[selectedKey]) return;
        itemData[selectedKey].score--;
        document.getElementById('score').value = itemData[selectedKey].score;
    });
});

