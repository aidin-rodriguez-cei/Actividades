const ArtGallery = [ 
    { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
    { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true }, 
    { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false }, 
    { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true }, 
    { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
    { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true }, 
    { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false }, 
    { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true }, 
    { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false }, 
    { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
    ];


// Usa forEach y Template Strings para mostrar los títulos de las obras por consola en el formato: "La obra TITULO DE OBRA por el autor AUTOR DE LA OBRA (AÑO) NO SE/SE encuentra exhibida"

ArtGallery.forEach(function (obra) {
    let exhibido;
    if (isExhibited == true){
         exhibido = "SE" 
    }else{
         exhibido = "NO SE" 
    }

    console.log("La obra" + obra.title + " por el autor AUTOR DE LA OBRA " + obra.year +" "+ exhibido + " encuentra exhibida")
});

// Usa map para crear un nuevo array que contenga solo los títulos de las obras y muéstralo en consola.

const listaTitulos = ArtGallery.map(obra => obra.title);
console.log(listaTitulos)

