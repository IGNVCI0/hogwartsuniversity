<template>
    <v-container fluid class="mt-n16">
        <v-row justify="center" align="center">
            <v-col cols="12" md="10">
                <v-carousel 
                    hide-delimiters 
                    show-arrows="hover"
                    :height="300"
                >
                    <v-carousel-item
                        src="/escaleras.jpg"
                        cover
                    ></v-carousel-item>

                    <v-carousel-item
                        src="/salon.jpg"
                        cover
                    ></v-carousel-item>              
                </v-carousel>
            </v-col>
        </v-row>
      <div>
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
      </div>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

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

.bodoni-moda-items {
  font-family: "Bodoni Moda", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}


.raleway-title {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
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

@media (max-width: 600px){
  .imagen-logo{
  max-height: 50px;
}
}
</style>