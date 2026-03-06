var config = {
    style: 'mapbox://styles/dekard1971/cmmfauj4o00ah01ra1d3g7bip',
    accessToken: 'pk.eyJ1IjoiZGVrYXJkMTk3MSIsImEiOiJjbWtueDJ5bmUwMGNhM2Vxcjl4ZmN4NjNtIn0.DkFTZA4If8bk9utRIelG1g',
    showMarkers: false,
    theme: 'dark',
    title: 'Rutas del Hambre: La Diáspora Irlandesa',
    subtitle: 'Un viaje de supervivencia y exilio (1845–1900)',
    byline: 'Autor: Manuel S. Lara Chica',
    footer: 'Proyecto para el curso de Visualización de Datos (7ª edición), 6 de marzo de 2026.',
    chapters: [
        {
            id: 'portada',
            alignment: 'left',
            hidden: false,
            title: 'Capítulo 0 – Rutas del Hambre: La Diáspora Irlandesa',
            description: 'Entre 1845 y 1852, Irlanda vivió una catástrofe que marcaría para siempre su memoria colectiva: la Gran Hambruna. Lo que comenzó como una plaga en el cultivo de la patata se convirtió en un desastre humano alimentado por decisiones políticas, estructuras de propiedad injustas y una gestión que antepuso intereses económicos al sufrimiento de la población campesina. Este proyecto cartografía el éxodo que redibujó el mapa humano del Atlántico y dio origen a una de las diásporas más influyentes de la historia moderna.',
            location: {
                center: [-8.243, 53.412],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'puertos-salida', opacity: 0 },
                { layer: 'ciudades-destino', opacity: 0 },
                { layer: 'rutas-1845-1852', opacity: 0 },
                { layer: 'rutas-1852-1870', opacity: 0 },
                { layer: 'rutas-1870-1900', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'capitulo-1',
            alignment: 'left',
            hidden: false,
            title: 'Capítulo 1 – Irlanda al borde del abismo',
            description: 'Antes de 1845, Irlanda era una sociedad rural profundamente dependiente de la patata. Las leyes de tierras, la ausencia de reformas estructurales y la pobreza extrema dejaron a la población sin red de seguridad. Los tres grandes puertos —Cobh, Dublín y Limerick— eran la única salida posible para cientos de miles de campesinos que pronto se verían obligados a elegir entre morir de hambre o marcharse para siempre.',
            location: {
                center: [-8.243, 53.412],
                zoom: 7.5,
                pitch: 40,
                bearing: -10
            },
            onChapterEnter: [
                { layer: 'puertos-salida', opacity: 1 }
            ],
            onChapterExit: []
        },
        {
            id: 'capitulo-2',
            alignment: 'right',
            hidden: false,
            title: 'Capítulo 2 – 1845–1852: La Hambruna y el primer éxodo',
            description: 'Con el fallo total de las cosechas, comenzó el primer gran flujo migratorio. Puertos como Cobh, Dublín y Limerick se llenaron de familias desesperadas. Los "barcos ataúd" cruzaban el Atlántico en condiciones infrahumanas hacia Liverpool, Nueva York y Quebec. Solo entre 1845 y 1852 emigraron más de un millón de personas; otro millón murió de hambre y enfermedad. El éxodo irlandés no era una elección: era una condena.',
            location: {
                center: [-35.0, 48.0],
                zoom: 3.5,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'rutas-1845-1852', opacity: 1 },
                { layer: 'puertos-salida', opacity: 1 },
                { layer: 'ciudades-destino', opacity: 0.5 }
            ],
            onChapterExit: [
                { layer: 'rutas-1845-1852', opacity: 0.2 }
            ]
        },
        {
            id: 'capitulo-3',
            alignment: 'left',
            hidden: false,
            title: 'Capítulo 3 – 1852–1870: Ciudades de destino, barrios de exilio',
            description: 'En el exilio, los irlandeses reconstruyeron sus lazos en los barrios obreros de Liverpool, Londres, Nueva York y Boston. La hostilidad inicial —los carteles de "No Irish Need Apply"— no impidió que comunidades enteras se aferraran a su identidad: su lengua, sus rituales, sus redes de solidaridad. Liverpool se convirtió en el mayor nodo de tránsito; Nueva York y Boston, en los nuevos corazones de la nación irlandesa fuera de Irlanda.',
            location: {
                center: [-40.0, 48.0],
                zoom: 3.5,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'rutas-1852-1870', opacity: 1 },
                { layer: 'ciudades-destino', opacity: 1 }
            ],
            onChapterExit: [
                { layer: 'rutas-1852-1870', opacity: 0.2 }
            ]
        },
        {
            id: 'capitulo-4',
            alignment: 'right',
            hidden: false,
            title: 'Capítulo 4 – 1870–1900: Una diáspora que se expande',
            description: 'A finales de siglo, la migración ya era una constante estructural en la vida irlandesa. El horizonte se amplió más allá del Atlántico: Australia y en especial Melbourne se convirtieron en nuevos destinos para oleadas de emigrantes que buscaban un comienzo diferente en el otro extremo del mundo. La diáspora irlandesa dejó de ser atlántica para volverse verdaderamente global, construyendo una red de comunidades que mantendría viva la memoria de lo perdido.',
            location: {
                center: [60.0, 10.0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'rutas-1870-1900', opacity: 1 },
                { layer: 'ciudades-destino', opacity: 1 }
            ],
            onChapterExit: [
                { layer: 'rutas-1870-1900', opacity: 0.2 }
            ]
        },
        {
            id: 'capitulo-5',
            alignment: 'full',
            hidden: false,
            title: 'Capítulo 5 – Heridas abiertas, identidad persistente',
            description: 'Hoy, más de 70 millones de personas en el mundo se identifican como descendientes de irlandeses —frente a los apenas 5 millones que viven en la isla—. Lo que comenzó como una tragedia política y humanitaria se convirtió en una de las diásporas más influyentes de la historia moderna. Las rutas del hambre fueron también rutas de resistencia: en cada ciudad de acogida, los irlandeses reconstruyeron su identidad, su cultura y su memoria colectiva, demostrando que el exilio no borra un pueblo, sino que, a veces, lo multiplica.',
            location: {
                center: [-20.0, 30.0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'rutas-1845-1852', opacity: 0.3 },
                { layer: 'rutas-1852-1870', opacity: 0.3 },
                { layer: 'rutas-1870-1900', opacity: 0.3 },
                { layer: 'puertos-salida', opacity: 0.6 },
                { layer: 'ciudades-destino', opacity: 0.6 }
            ],
            onChapterExit: []
        }
    ]
};
