<template>
    <v-container fluid class="mt-n16">
        <v-row justify="center" align="center">
            <v-col cols="12" md="10">
                <v-carousel 
                    hide-delimiters 
                    show-arrows="hover"
                    :height="300"
                    cycle
                >
                    <v-carousel-item
                        src="noticiashogwarts.jpg"
                        cover
                    >
                      <v-row justify="center" align="center" class="fill-height">
                        <v-col cols="8">
                          <v-card color="#00000070" class="pa-7">
                            <h2 class="text-left mb-4 text-white raleway-title-carousel">Bienvenido a Hogwarts</h2>
                            <p class="text-left mb-4 text-white raleway-text-carousel">Descubre las Noticias más recientes de la Universidad de Hogwarts</p>
                            <v-btn class="text-center raleway-text my-2" variant="outlined" size="x-large" append-icon="mdi-eye" to="noticias" color="white">
                              Ver Más
                            </v-btn>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-carousel-item>

                    <v-carousel-item
                        src="habitacion-egipcia-generative-ai_220873-30248.jpg"
                        cover
                    > 
                      <v-row justify="center" align="center" class="fill-height">
                        <v-col cols="8">
                          <v-card color="#00000070" class="pa-7">
                            <h2 class="text-left mb-4 text-white raleway-title-carousel">Bienvenido a Hogwarts</h2>
                            <p class="text-left mb-4 text-white raleway-text-carousel">Explora los misterios de la Biblioteca en la Universidad de Hogwarts.</p>
                            <v-btn class="text-center raleway-text my-2" variant="outlined" size="x-large" append-icon="mdi-eye" to="biblioteca" color="white">
                              Ver Más
                            </v-btn>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-carousel-item>              
                </v-carousel>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-5">
            <v-col class="text-center" cols="auto">
                    <h1 class="dm-serif-title">
                        CARRERAS
                    </h1>
                    <v-divider 
                        :thickness="3" 
                        class="border-opacity-100" 
                        color="#f70004">
                    </v-divider>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col v-for="(item, index) in items"
              :key="index"
              cols="4"
              sm="4"
              md="3"
              lg="2"
              class="ma-5">
              <div>
                <v-img 
                class="hover-column pulse-animation"
                :src="item.image"
                ></v-img>
                  <h2 class="dm-serif-items text-center mt-4">{{ item.description }}</h2>
                <p></p>
              </div>
            </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8" md="3"  class="text-center">
            <v-btn class="text-center raleway-text" variant="tonal" size="x-large" append-icon="mdi-eye" block to="carreras">
              Ver Más Carreras
            </v-btn>
          </v-col>
        </v-row>
        <!-- Sección de Noticias -->
        <v-row justify="center" class="mt-15">
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
                v-bind="props">

                <v-img :src="item.image" height="250" cover>
                  <!-- Contenido opcional dentro de la imagen -->
                </v-img>
                <h1 class="ma-3 raleway-title">{{ item.title }}</h1>
                <v-divider color="#f70004" :thickness="3" class="border-opacity-100 ma-3"></v-divider>
                <v-card-text class="ma-3 raleway-text">{{ item.description }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="#f70004" block class="raleway-text" to="noticias">Leer Más</v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <!-- Botón para Ver Más -->
        <v-row justify="center">
          <v-col cols="8" md="3" class="text-center">
            <v-btn class="text-center raleway-text" variant="tonal" size="x-large" append-icon="mdi-eye" block to="noticias">
              Ver Más Noticias
            </v-btn>
          </v-col>
        </v-row>
        <!-- Sección de Noticias -->
        <v-row justify="center" class="mt-15">
            <v-col class="text-center" cols="auto">
                <h1 class="dm-serif-title">LIBROS DE HOGWARTS UNIVERSITY</h1>
                <v-divider :thickness="3" class="border-opacity-100" color="#f70004"></v-divider>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-15">
            <v-col v-for="(book, index) in books" :key="index" cols="8" md="5">
              <v-hover v-slot="{ isHovering, props }">
                <v-card class="pa-4 mb-4 text-center" :elevation="isHovering ? 24 : 6" v-bind="props"  to="biblioteca">
                  <v-row align="center" justify="center">
                      <v-col cols="6">
                          <v-img :src="book.image" height="300"></v-img>
                      </v-col>
                      <v-col cols="6">
                          
                          <h2 class="raleway-title-card mb-2 ">{{ book.title }}</h2>
                          <p class="mb-2 raleway-text-card"><strong>Autor:</strong> {{ book.author }}</p>
                          <p class="mb-2 raleway-text-card"><strong>Fecha de Creación:</strong> {{ book.creationDate }}</p>
                          <p class="mb-2 raleway-text-card"><strong>Sinopsis:</strong> {{ book.synopsis }}</p>
                      </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
        </v-row>
        <!-- Botón para Ver Más -->
        <v-row justify="center">
          <v-col cols="8" md="3" class="text-center">
            <v-btn class="text-center raleway-text" variant="tonal" size="x-large" append-icon="mdi-eye" block to="biblioteca">
              Ver Más Libros
            </v-btn>
          </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    description: 'ENCANTAMIENTOS Y DISEÑOS DE ARTEFACTOS MAGICOS',
    image: 'Carreras-03.png'
  },
  {
    description: 'MAGIZOOLOGÍA Y CUIDADO DE CRIATURAS MÁGICAS',
    image: 'Carreras-04.png'
  },
  {
    description: 'DEFENSA CONTRA LAS ARTES OSCURAS',
    image: 'Carreras-05.png'
  },
  {
    description: 'ADMINISTRACION Y GESTION DE RECURSOS MAGICOS',
    image: 'Carreras-06.png'
  },
  {
    description: 'DERECHO, JUSTICIA Y LEYES MAGICAS',
    image: 'Carreras-02.png'
  },
]);

// Arreglo de noticias
const newsItems = ref([
  {
    title: 'Nuevo Descubrimiento en la Biblioteca Prohibida',
    description: '¡Libro de Hechizos Antiguos Revela Secretos Perdidos Jamas Encontrados!',
    image: '/biblioteca.jpg'
  },
  {
    title: 'Torneo de Quidditch: Gryffindor vs Slytherin',
    description: 'Prepárate para la revancha épica en el campo de Quidditch.',
    image: '/003-0.webp'
  },
  {
    title: 'Estudiante de Ravenclaw Descubre Nuevo Hechizo',
    description: '¡Causa sensación en el patio de duelos con un hechizo innovador!',
    image: '/Cho.webp'
  }
]);

const books = ref([
  {
    title: 'Historia de la Magia',
    author: 'Eliphas Levi',
    creationDate: '1054 d.C.',
    synopsis: 'Explora la historia de la magia desde los tiempos antiguos hasta la era moderna.',
    image: 'historia-de-la-magia.jpg' // Reemplaza con la URL de la imagen del libro
  },
  {
    title: 'Criaturas Fantásticas y Dónde Encontrarlas',
    author: 'J.K Rowling',
    creationDate: '1927',
    synopsis: 'Una guía completa sobre las criaturas mágicas del mundo, con información detallada sobre su hábitat y comportamiento.',
    image: '9k.png'
  },
  {
    title: 'Los Cuentos de Beedle el Bardo',
    author: 'J.K Rowling',
    creationDate: 'Siglo XV',
    synopsis: 'Una colección de cuentos populares del mundo mágico, con enseñanzas morales y lecciones sobre magia.',
    image: 'ae1f92ac02bf54e2d3dd2da907f95028.png'
  },
]);

</script>


<style scoped>

.hover-column {
  position: relative;
}

.pulse-animation {
  animation: pulse 0.8s infinite alternate;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.raleway-title {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: x-large;
}

.raleway-text {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: small;
}

.raleway-title-carousel {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-size: xx-large;
}

.raleway-text-carousel {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: large;
}

.dm-serif-items {
  font-family: "DM Serif Display", serif;
  font-weight: 600;
  font-style: normal;
  font-size: large;
}

.dm-serif-title {
  font-family: "DM Serif Display", serif;
  font-weight: 550;
  font-style: normal;
  font-size: xx-large;
}

.imagen-logo{
  max-height: 120px;
}

.v-card:hover {
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.6s ease-out;
}

@media (max-width: 600px){
  .imagen-logo{
    max-height: 50px;
  }
  .raleway-title {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  .raleway-text {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: small;
  }
}
</style>