var config = {
    style: 'mapbox://styles/dekard1971/cmmf7qkdf00ae01ra3tdo7u5m', // Reemplaza con tu Style ID
    accessToken: 'pk.eyJ1IjoiZGVrYXJkMTk3MSIsImEiOiJjbWtueDJ5bmUwMGNhM2Vxcjl4ZmN4NjNtIn0.DkFTZA4If8bk9utRIelG1g',
    showMarkers: false,
    theme: 'dark', // O 'light' según tu diseño
    title: 'Rutas del Hambre: La Diáspora Irlandesa',
    subtitle: 'Un viaje de supervivencia y exilio (1845–1900)',
    byline: 'Autor: Manuel S. Lara Chica',
    footer: 'Proyecto para el curso de Visualización de Datos, 6 de marzo de 2026.',
    chapters: [
        {
            id: 'portada',
            alignment: 'left',
            hidden: false,
            title: 'Portada',
            description: 'Entre 1845 y 1852, Irlanda vivió una catástrofe que marcaría para siempre su memoria colectiva: la Gran Hambruna. Este proyecto cartografía el éxodo que redibujó el mapa humano del Atlántico.',
            location: {
                center: [-8.243, 53.412],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'puertos-irlanda', opacity: 1 }
            ],
            onChapterExit: []
        },
        {
            id: 'capitulo-1',
            alignment: 'left',
            hidden: false,
            title: 'Capítulo 1 – Irlanda al borde del abismo',
            description: 'Antes de 1845, Irlanda era una sociedad rural profundamente dependiente de la patata. Las estructuras de propiedad injustas y la pobreza extrema dejaron a la población sin red de seguridad ante la llegada de la plaga.',
            location: {
                center: [-8.243, 53.412],
                zoom: 7.5,
                pitch: 40,
                bearing: -10
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'capitulo-2',
            alignment: 'right',
            hidden: false,
            title: 'Capítulo 2 – 1845–1852: La Hambruna y el primer éxodo',
            description: 'Con el fallo total de las cosechas, comenzó el primer gran flujo migratorio. Puertos como Cobh, Dublín y Limerick se llenaron de familias desesperadas partiendo hacia Liverpool y los muelles de Nueva York.',
            location: {
                center: [-35.0, 48.0], // Vista del Atlántico Norte
                zoom: 3.5,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'rutas-1845', opacity: 1 },
                { layer: 'ciudades-destino', opacity: 1 }
            ],
            onChapterExit: []
        },
        {
            id: 'capitulo-3',
            alignment: 'left',
            hidden: false,
            title: 'Capítulo 3 – 1852–1870: Ciudades de destino',
            description: 'En el exilio, los irlandeses reconstruyeron sus lazos en barrios obreros. Liverpool, Boston y Quebec se convirtieron en los nuevos hogares, donde la identidad irlandesa se mantuvo viva a pesar de la hostilidad inicial.',
            location: {
                center: [-71.058, 42.360], // Centrado en la costa este de EE.UU. (Boston)
                zoom: 5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'capitulo-4',
            alignment: 'right',
            hidden: false,
            title: 'Capítulo 4 – 1870–1900: Una diáspora que se expande',
            description: 'A finales de siglo, la migración ya era una constante. El horizonte se amplió hacia destinos más lejanos como Melbourne, consolidando una red global de comunidades irlandesas.',
            location: {
                center: [60.0, -10.0], // Vista global hacia el Índico/Australia
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'rutas-globales', opacity: 0.8 }
            ],
            onChapterExit: []
        },
        {
            id: 'capitulo-5',
            alignment: 'full',
            hidden: false,
            title: 'Capítulo 5 – Heridas abiertas, identidad persistente',
            description: 'Hoy, millones de descendientes en todo el mundo mantienen el legado de aquellos que huyeron del hambre. Lo que comenzó como una tragedia política se convirtió en una de las diásporas más influyentes de la historia moderna.',
            location: {
                center: [-20.0, 30.0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'rutas-1845', opacity: 0.3 },
                { layer: 'rutas-globales', opacity: 0.3 }
            ],
            onChapterExit: []
        }
    ]
};