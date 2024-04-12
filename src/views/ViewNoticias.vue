<template>
    <v-container class="mt-n8">
         <!-- Sección de Noticias -->
        <v-row justify="center">
            <v-col class="text-center" cols="auto">
                <h1 class="dm-serif-title">NOTICIAS DE HOGWARTS UNIVERSITY</h1>
                <v-divider :thickness="3" class="border-opacity-100" color="#f70004"></v-divider>
            </v-col>
        </v-row>
      <!-- Tarjetas de Noticias -->
      <v-row justify="center">
        <v-col v-for="(item, index) in newsItems" :key="index" cols="12" sm="6" md="4" lg="3" class="ma-3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              width="100%"
              class="pa-3 text-start"
              :elevation="isHovering ? 24 : 6"
              v-bind="props"
              @click="showNewsDialog(item)"
            >
              <v-img :src="item.image" height="250" cover></v-img>
              <h1 class="ma-3 raleway-title">{{ item.title }}</h1>
              <v-divider color="#f70004" :thickness="3" class="border-opacity-100 ma-3"></v-divider>
              <v-card-text class="ma-3 raleway-text">{{ item.description }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="#f70004" block class="raleway-text" @click="showNewsDialog(item)">
                  Leer Más
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
      <!-- Dialogo de Detalles de Noticia -->
        <v-dialog v-model="dialogVisible" max-width="90%">
        <template v-slot:activator="{ on }"></template>
        <v-card class="pa-3 text-start">
            <v-row>
            <!-- Columna para la imagen de la noticia -->
            <v-col cols="12" md="6">
                <v-img :src="selectedNews.image" height="550" cover></v-img>
            </v-col>

            <!-- Columna para el contenido de la noticia -->
            <v-col cols="12" md="6">
                <!-- Botón de cierre en la parte superior derecha -->
                <v-card-actions class="pa-0">
                    <v-spacer></v-spacer>
                    <v-btn @click="dialogVisible = false" icon color="red">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-actions>
                
                <!-- Contenido de la noticia en la parte inferior derecha -->
                <h1 class="raleway-title-card ma-3 ml-6">{{ selectedNews.title }}</h1>
                <v-card-subtitle class="raleway-subtitle-card ma-3">{{ selectedNews.date }}</v-card-subtitle>
                <v-divider class="mx-6 mr-9"></v-divider>
                <v-card-text class="text-justify ma-3 mr-6 raleway-text-card">{{ selectedNews.content1 }}</v-card-text>
                <v-spacer></v-spacer>
                <v-card-text class="text-justify ma-3 mr-6 raleway-text-card">{{ selectedNews.content2 }}</v-card-text>
            </v-col>
            </v-row>
        </v-card>
        </v-dialog>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const newsItems = ref([
  {
    title: 'Nuevo Descubrimiento en la Biblioteca Prohibida',
    description: '¡Libro de Hechizos Antiguos Revela Secretos Perdidos Jamás Encontrados!',
    image: '/biblioteca.jpg',
    date: 'Abril 10, 2024',
    content1: 'Un emocionante hallazgo en la Biblioteca Prohibida ha revelado un antiguo libro de hechizos con secretos perdidos de la magia. Los estudiantes están ansiosos por explorar este nuevo conocimiento ancestral. El libro contiene hechizos olvidados que datan de la era de los fundadores de Hogwarts, y su descubrimiento promete ampliar los límites del aprendizaje mágico en la escuela. Los profesores de la Escuela de Magia y Hechicería están organizando sesiones especiales para estudiar este libro y descubrir los misterios detrás de los hechizos perdidos.',
    content2: 'Este descubrimiento enriquecerá las clases de Hechizos Avanzados y despertará el interés de los alumnos por la historia oculta de la magia. Los estudiantes más ávidos ya están debatiendo sobre las aplicaciones prácticas de estos hechizos redescubiertos en diversas áreas mágicas, desde la defensa contra las artes oscuras hasta la alquimia.'
  },
  {
    title: 'Torneo de Quidditch: Gryffindor vs Slytherin',
    description: 'Prepárate para la revancha épica en el campo de Quidditch.',
    image: '/003-0.webp',
    date: 'Abril 9, 2024',
    content1: 'La rivalidad entre Gryffindor y Slytherin alcanza un nuevo nivel en el campo de Quidditch, con un emocionante torneo que promete deslumbrar a toda Hogwarts. Los jugadores están entrenando arduamente para este enfrentamiento, y los fanáticos de ambas casas están preparando sus escobas para animar a sus equipos favoritos. ¿Quién se llevará la victoria esta vez? Los capitanes de equipo han anunciado estrategias innovadoras que sorprenderán a los espectadores y mantendrán al borde de sus asientos.',
    content2: 'Los espectadores esperan una actuación memorable de los buscadores y cazadores en este emocionante duelo aéreo. Además del juego, se están organizando eventos paralelos en el campo para celebrar la tradición del Quidditch, incluyendo una feria de alimentos mágicos y una exhibición de escobas voladoras.'
  },
  {
    title: 'Estudiante de Ravenclaw Descubre Nuevo Hechizo',
    description: '¡Causa sensación en el patio de duelos con un hechizo innovador!',
    image: '/Cho.webp',
    date: 'Abril 8, 2024',
    content1: 'Durante una sesión de duelos en el patio, un estudiante de Ravenclaw sorprendió a todos al lanzar un hechizo totalmente nuevo y efectivo. Este descubrimiento ha generado gran interés entre los profesores y compañeros de clase, y se espera que el estudiante comparta su conocimiento en el próximo Club de Duelo. ¿Abrirá este hechizo nuevas posibilidades en el mundo de la magia? Los expertos en magia experimental han expresado su entusiasmo por estudiar este hechizo y explorar su aplicación en diferentes disciplinas mágicas.',
    content2: 'El hechizo innovador ha despertado la curiosidad de los expertos en magia experimental de todo el mundo mágico. Se está planeando una demostración especial durante la próxima feria de talentos de Ravenclaw, donde los estudiantes podrán presenciar este hechizo en acción.'
  },
  {
    title: 'Excursión a Hogsmeade: Aventuras Mágicas en el Pueblo',
    description: 'Estudiantes disfrutan de un día de diversión y compras en Hogsmeade.',
    image: '102899.webp',
    date: 'Abril 7, 2024',
    content1: 'Los alumnos de Hogwarts disfrutaron de una emocionante excursión a Hogsmeade, explorando las tiendas mágicas y probando las delicias culinarias del pueblo. Desde la visita a la tienda de sortilegios hasta una parada en Honeydukes, los estudiantes vivieron momentos inolvidables en este pueblo lleno de magia. La excursión también incluyó una visita guiada a lugares históricos como la Casa de las Plumas y la Taberna de las Tres Escobas.',
    content2: 'Los profesores elogiaron la conducta ejemplar de los estudiantes durante la excursión y están considerando organizar más viajes educativos fuera de Hogwarts. Los alumnos están ansiosos por compartir sus experiencias con los compañeros de otras casas en la próxima reunión en el Gran Comedor.'
  },
  {
    title: 'Inauguración de la Nueva Sala Común de Hufflepuff',
    description: 'Hufflepuff estrena su nueva sala común con una celebración.',
    image: 'd.webp',
    date: 'Abril 6, 2024',
    content1: 'Los tejones de Hufflepuff celebraron la apertura de su nueva sala común con una fiesta llena de alegría y camaradería. La sala, decorada con los colores y emblemas de la casa, se convirtió en un lugar acogedor donde los estudiantes pueden relajarse y compartir momentos especiales. ¡Una adición bienvenida a Hogwarts! La inauguración incluyó un discurso emotivo del jefe de casa y una ceremonia de iluminación de velas con cánticos tradicionales.',
    content2: 'Los alumnos de Hufflepuff planean organizar actividades regulares en la nueva sala común, desde noches de juegos hasta sesiones de estudio grupales. La sala común se ha convertido en un punto focal de la vida estudiantil en Hufflepuff.'
  },
  {
    title: 'Clase de Pociones: Experimentos con Ingredientes Únicos',
    description: 'Los estudiantes aprenden nuevas recetas en la clase de pociones.',
    image: '/felix-felicis-1556190621.jpg',
    date: 'Abril 5, 2024',
    content1: 'La clase de Pociones ha sido una experiencia emocionante para los alumnos de Hogwarts, quienes han estado experimentando con ingredientes únicos y fórmulas avanzadas. Desde la creación de pociones curativas hasta la elaboración de elixires mágicos, los estudiantes han demostrado habilidades impresionantes en el laboratorio. El profesor Snape ha elogiado el progreso de los alumnos más talentosos y está considerando la posibilidad de otorgar premios por sus logros.',
    content2: 'Los estudiantes están ansiosos por aplicar sus nuevas habilidades en la próxima competencia de pociones entre casas. Las preparaciones para el evento están en pleno apogeo, con equipos trabajando arduamente para perfeccionar sus recetas.'
  },
  {
    title: 'Anuncio Especial: Cena de Gala en el Gran Salón',
    description: 'Preparativos para la elegante Cena de Gala en Hogwarts.',
    image: 'ddd.webp',
    date: 'Abril 4, 2024',
    content1: 'El Gran Salón se está preparando para una noche de elegancia y magia con la Cena de Gala Anual. Los estudiantes están emocionados por vestir sus mejores túnicas y disfrutar de un banquete especial preparado por los elfos domésticos. La música encantada y las luces brillantes prometen una velada inolvidable. Los organizadores del evento han revelado un tema sorpresa para la cena, que ha generado expectación entre los asistentes.',
    content2: 'Además de la cena, se ha planeado una serie de actividades interactivas durante la gala, incluyendo espectáculos de magia y música en vivo. Los estudiantes están ansiosos por participar en la diversión y la celebración.'
  },
]);


  
  const dialogVisible = ref(false);
  const selectedNews = ref(null);
  
  function showNewsDialog(item) {
    selectedNews.value = item;
    dialogVisible.value = true;
  }
  </script>
  
  <style scoped>
  /* Estilos adicionales específicos para las tarjetas de noticias */
  .raleway-title {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: x-large;
  }
  
  .raleway-text {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: medium;
  }
  
  .raleway-title-card {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: xx-large;
  }

  .raleway-subtitle-card {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: large;
  }

  .raleway-text-card {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: large;
  }
  
  @media (max-width: 600px) {
    .raleway-title {
      font-size: large;
    }
    .raleway-text {
      font-size: x-small;
    }
  }
  .dm-serif-title {
  font-family: "DM Serif Display", serif;
  font-weight: 550;
  font-style: normal;
  font-size: xxx-large;
}
  </style>
  