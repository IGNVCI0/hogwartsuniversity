<template>
    <v-container class="mt-n6">
        <v-row>
          <v-col cols="12" class="text-center">
            <h1 class="dm-serif-title">
              DESCUBRE TU CARRERA, HAZ CLIC PARA VER MÁS...
            </h1>
            <v-icon size="100" class="arrow-icon mt-5" v-show="showArrow" color="#f70004">mdi-arrow-down
            </v-icon>
          </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="6" v-for="(item, index) in items"
                :key="index">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card 
                        class="text-center pa-5" 
                        :elevation="isHovering ? 24 : 6" 
                        :color="item.color" 
                        v-bind="props" 
                        @click="showDialog(index)">
                        <v-row align="center">
                            <v-col cols="7">
                                <v-card-item class="text-white">
                                    <p class="dm-serif-items">{{ item.description }}</p>
                                </v-card-item>
                                <v-card-action >
                                    <v-btn 
                                        v-if="isHovering"
                                        class="mt-2"
                                        variant="tonal" 
                                        color="white"
                                        @click.stop="showDialog(index)">
                                        Ver Más...
                                    </v-btn>
                                </v-card-action>
                            </v-col>
                            <v-col cols="1">
                            </v-col>
                            <v-col cols="4">
                                <v-img
                                :src="item.image"
                                width="50%"
                                >
                                </v-img>
                            </v-col>
                        </v-row>    
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <!-- Diálogo para mostrar la información detallada -->
        <v-dialog v-model="dialog" max-width="90%">
        <v-card class="pa-10">
              <v-card-title>{{ items[selectedItem].description }}</v-card-title>
              <v-card-text>{{ items[selectedItem].text }}</v-card-text>
            <v-card-actions>
              <v-btn color="#f70004" @click="dialog = false" block variant="tonal">Cerrar</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

    </v-container>
</template>


<script setup>
import { ref, onMounted  } from 'vue';

const showArrow = ref(false);

// Mostrar el ícono de flecha después de que la página se ha cargado completamente
onMounted(() => {
  showArrow.value = true;
});

const items = ref([
  {
    description: 'ENCANTAMIENTOS Y DISEÑOS DE ARTEFACTOS MAGICOS',
    image: 'Carreraswhite-11.png',
    text: '',
    color:'#bd1622',
  },
  {
    description: 'MAGIZOOLOGÍA Y CUIDADO DE CRIATURAS MÁGICAS',
    image: 'Carreraswhite-10.png',
    text: '',
    color:'#006633',
  },
  {
    description: 'DEFENSA CONTRA LAS ARTES OSCURAS',
    image: 'Carreraswhite-09.png',
    text: '',
    color:'#050505',
  },
  {
    description: 'ADMINISTRACION Y GESTION DE RECURSOS MAGICOS',
    image: 'Carreraswhite-08.png',
    text: '',
    color:'#eecd00',
  },
  {
    description: 'DERECHO, JUSTICIA Y LEYES MAGICAS',
    image: 'Carreraswhite-07.png',
    text: '',
    color:'#00549a',
  },
]);


const dialog = ref(false);
const selectedItem = ref(null);

function showDialog(index) {
  selectedItem.value = index;
  dialog.value = true;
}
</script>

<style scoped>

.dm-serif-items {
  font-family: "DM Serif Display", serif;
  font-weight: 300;
  font-style: normal;
  font-size: large;
}

.dm-serif-title {
  font-family: "DM Serif Display", serif;
  font-weight: 500;
  font-style: normal;
  font-size: xx-large;
}

.imagen-logo{
  max-height: 90px;
}

@media (max-width: 600px){

  .imagen-logo{
    height: 50px;
  }

  .dm-serif-items {
    font-family: "DM Serif Display", serif;
    font-weight: 300;
    font-style: normal;
    font-size: small;
  }

  .dm-serif-title {
    font-family: "DM Serif Display", serif;
    font-weight: 500;
    font-style: normal;
    font-size: small;
  }
}


.underline-text:hover {
  border-bottom: 3px solid white;
  padding-bottom: 4px;
  transition: transform 0.4s ease;
  transform: translateY(-2px);
}

.underline-button:hover {
  border-bottom: 3px solid white;
  padding-top: 4px;
  transition: transform 0.3s ease;
  transform: translateY(2px);
}


.v-card:hover {
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.6s ease-out;
}

.arrow-icon {
  animation: bounceDown 1s ease-in-out infinite;
  opacity: 0; /* Inicialmente ocultar el ícono */
}

@keyframes bounceDown {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}
</style>