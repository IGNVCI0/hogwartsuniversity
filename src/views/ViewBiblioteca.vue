<template>
    <v-container>
        <!-- Sección de Noticias -->
        <v-row justify="center" class="">
            <v-col class="text-center" cols="auto">
                <h1 class="dm-serif-title">DESCUBRE LOS LIBROS DE HOGWARTS UNIVERSITY</h1>
                <v-divider :thickness="3" class="border-opacity-100" color="#f70004"></v-divider>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-15">
            <v-col v-for="(book, index) in books" :key="index" cols="8" md="5">
              <v-hover v-slot="{ isHovering, props }">
                <v-card class="pa-4 mb-4 text-center" :elevation="isHovering ? 24 : 6"
              v-bind="props" >
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
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
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
  {
    title: 'El Quidditch a Través de los Tiempos',
    author: 'Kennilworthy Whisp',
    creationDate: '1952',
    synopsis: 'Una historia completa sobre el deporte de Quidditch, desde sus orígenes hasta las reglas modernas.',
    image: 'Z.png'
  },
  {
    title: 'Adivinación Avanzada: Más Allá de las Bolas de Cristal',
    author: 'Cassandra Vablatsky',
    creationDate: '1805',
    synopsis: 'Exploración de métodos avanzados de adivinación y predicción en el mundo mágico.',
    image: 'aaa.webp'
  },
  {
    title: 'Plantas Mágicas y Sus Usos',
    author: 'Phyllida Spore',
    creationDate: '1783',
    synopsis: 'Guía detallada sobre plantas mágicas y sus propiedades en pociones y encantamientos.',
    image: '69659f16701299e1277a9e91f74dacc5.webp'
  },

  {
    title: 'Artefactos y Reliquias Mágicas',
    author: 'Basil Flack',
    creationDate: '1920',
    synopsis: 'Una enciclopedia de artefactos mágicos con historias y leyendas detrás de cada objeto.',
    image: '1707429734.webp'
  },

]);
  </script>
  
<style scoped>
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
    .dm-serif-title {
        font-family: "DM Serif Display", serif;
        font-weight: 550;
        font-style: normal;
        font-size: xxx-large;
    }
    .v-card:hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: all 0.6s ease-out;
    }
</style>
  