<template>
    <v-container>
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
                            <v-col cols="6">
                                <v-card-item class="text-white">
                                    <p class="dm-serif-items">{{ item.description }}</p>
                                </v-card-item>
                                <v-card-action >
                                    <v-btn 
                                        v-if="isHovering"
                                        class="mt-2 transition-fast-in-fast-out"
                                        variant="tonal" 
                                        color="white"
                                        @click.stop="showDialog(index)">
                                        Ver Más...
                                    </v-btn>
                                </v-card-action>
                            </v-col>
                            <v-col cols="6">
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
import { ref } from 'vue';

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

.imagen-logo{
  max-height: 90px;
}

@media (max-width: 600px){
  .imagen-logo{
  height: 50px;
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

.transition-fast-in-fast-out {
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1); 
}


.v-card:hover {
  cursor: pointer;
  transform: translateY(-7px);
  transition: transform 0.3s ease;
}
</style>