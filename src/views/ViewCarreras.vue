<template>
    <v-container class="mt-n8">
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
            <v-col cols="10" md="6" v-for="(item, index) in items"
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
                                    <p class="dm-serif-items">{{ item.title }}</p>
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
        <v-dialog v-model="dialog" max-width="65%">
        <v-card class="pa-10">
              <v-img :src="items[selectedItem].imagencard" height="300" cover></v-img>
              <h1 class="my-3 mt-8 dm-serif-title text-center">{{ items[selectedItem].title }}</h1>
              <v-divider :color="items[selectedItem].color" :thickness="3" class="border-opacity-100 mb-3"></v-divider>
              <v-card-text class="raleway-text-card my-2">{{ items[selectedItem].text1 }}</v-card-text>
              <v-card-subtitle class="raleway-subtitle-card my-2">{{ items[selectedItem].subtitle }}</v-card-subtitle>
              <v-card-text class="mx-3 raleway-text-card my-2">
                <ul>
                  <li v-for="items1 in items[selectedItem].items1 " :key="item1" 
                  class="text-subtitle-1 raleway-text-card"
                  >
                    <v-icon size="24" class="mr-2" :color="items[selectedItem].color">mdi-auto-fix</v-icon> {{ items1 }}
                  </li>
                </ul>
              </v-card-text>
              <v-card-subtitle class="raleway-subtitle-card my-2">{{ items[selectedItem].subtitle2 }} </v-card-subtitle>
              <v-card-text class="mx-3 raleway-text-card my-2">
                <ul>
                  <li v-for="items2 in items[selectedItem].items2 " :key="item2" 
                  class="text-subtitle-1 raleway-text-card "
                  >
                    <v-icon size="24" class="mr-2" :color="items[selectedItem].color">mdi-auto-fix</v-icon> {{ items2 }}
                  </li>
                </ul>
              </v-card-text>
              <v-card-subtitle class="raleway-subtitle-card my-2">{{ items[selectedItem].subtitle3 }}</v-card-subtitle>
              <v-card-text class="raleway-text-card my-2">{{ items[selectedItem].textend }}</v-card-text>

            <v-card-actions>
              <v-btn :color="items[selectedItem].color" @click="dialog = false" block variant="tonal" class="raleway-text-card my-2">Cerrar</v-btn>
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
    imagencard:'jovenes-disfrutando-noche-alegre-bar-invernal-generado-inteligencia-artificial_24640-131358.jpg', 
    title: 'ENCANTAMIENTOS Y DISEÑOS DE ARTEFACTOS MAGICOS',
    image: 'Carreraswhite-11.png',
    text1: 'En la Universidad de Hogwarts, nos dedicamos a brindar una educación mágica de calidad excepcional. Nuestro programa de Encantamientos y Diseño de Artefactos Mágicos combina el arte de los encantamientos con la creatividad del diseño para prepararte para un futuro lleno de magia y maravillas en el mundo mágico.',
    subtitle:'¿Por qué elegir nuestro programa?',
    items1:[
      'Magia y Creatividad Fusionadas: Aprenderás a dominar la magia de los encantamientos mientras desarrollas habilidades de diseño innovadoras, creando artefactos mágicos únicos y poderosos.',
      'Profesorado Experimentado: Nuestros profesores son expertos en encantamientos y diseño de artefactos mágicos, con una amplia experiencia en la creación y uso de objetos mágicos, listos para guiarte en tu viaje hacia la maestría en este campo.',
      'Prácticas en Talleres de Creación: Tendrás la oportunidad de trabajar en talleres especializados donde podrás poner en práctica tus habilidades de encantamiento y diseño, creando artefactos mágicos funcionales y estéticamente impresionantes.',
      'Red de Contactos Mágicos: Conecta con profesionales mágicos y diseñadores de artefactos de renombre a través de nuestra red de antiguos alumnos y eventos exclusivos centrados en el mundo de la magia y el diseño.',
    ],  
    subtitle2:'Cursos Destacados:',
    items2:[
      'Encantamientos Avanzados y Aplicaciones Prácticas',
      'Diseño Creativo de Artefactos Mágicos',
      'Fabricación de Varitas y Herramientas Encantadas',
      'Ética en la Creación de Artefactos Mágicos',
    ],
    subtitle3:'Perspectivas Profesionales:',
    textend:'Nuestros graduados en Encantamientos y Diseño de Artefactos Mágicos están preparados para desempeñarse en roles emocionantes, como creadores de varitas mágicas, diseñadores de objetos encantados, y consultores en el mercado de artefactos mágicos.¡Únete a nosotros y descubre un mundo de posibilidades en la gestión de recursos mágicos en la Universidad de Hogwarts!',
    color:'#bd1622',
  },

  { 
    imagencard: 'escena-dia-educacion-estilo-estetica-fantasia_23-2151040265.jpg',
    title: 'MAGIZOOLOGÍA Y CUIDADO DE CRIATURAS MÁGICAS',
    image: 'Carreraswhite-10.png',
    text1: 'En la Universidad de Hogwarts, nos dedicamos a ofrecer una educación mágica de excelencia. Nuestro programa de Magizoología y Cuidado de Criaturas Mágicas combina el conocimiento de las criaturas mágicas con las habilidades de cuidado y gestión más avanzadas para prepararte para un emocionante futuro en el mundo mágico.',
    subtitle:'¿Por qué elegir nuestro programa?',
    items1:[
      'Integración de Magia y Cuidado: Aprenderás a aplicar principios de magizoología y cuidado de criaturas a entornos mágicos, combinando la sabiduría muggle con la magia tradicional para el bienestar de todas las criaturas mágicas.',
      'Profesorado Expertos: Nuestros profesores son magos y brujas altamente calificados con experiencia en el campo de la magizoología y el cuidado de criaturas mágicas, listos para guiarte en tu viaje hacia el éxito.',
      'Prácticas con Criaturas Mágicas: Tendrás la oportunidad única de realizar prácticas con diversas criaturas mágicas en entornos controlados, adquiriendo experiencia práctica esencial para tu carrera.',
      'Red de Contactos Mágicos: Conéctate con profesionales mágicos de todo el mundo a través de nuestra red de antiguos alumnos y eventos exclusivos centrados en la magizoología y el cuidado de criaturas.',
    ],  
    subtitle2:'Cursos Destacados:',
    items2:[
      'Etología Mágica y Comportamiento de Criaturas',
      'Sanación y Cuidado de Criaturas Mágicas',
      'Conservación y Protección de Hábitats Mágicos',
      'Ética en el Trato con Criaturas Mágicas',
    ],
    subtitle3:'Perspectivas Profesionales:',
    textend:'Nuestros graduados en Magizoología y Cuidado de Criaturas Mágicas están preparados para desempeñarse en una variedad de roles, desde magizoólogos y sanadores de criaturas hasta líderes en la conservación y protección de hábitats mágicos.¡Únete a nosotros y descubre un mundo de posibilidades en la magizoología y el cuidado de criaturas mágicas en la Universidad de Hogwarts!',
    color:'#006633',
  },

  { 
    imagencard:'hay-muchas-personas-sentadas-alrededor-mesa-gran-edificio-generativo-ai_1034062-65804.jpg',
    title: 'DEFENSA CONTRA LAS ARTES OSCURAS',
    image: 'Carreraswhite-09.png',
    text1: 'En la Universidad de Hogwarts, nos comprometemos a brindar una educación mágica de calidad excepcional. Nuestro programa de Defensa contra las Artes Oscuras combina la magia con las habilidades de protección más avanzadas para prepararte para un futuro desafiante pero emocionante en el mundo mágico.',
    subtitle:'¿Por qué elegir nuestro programa?',
    items1:[
      'Entrenamiento Intensivo: Aprenderás técnicas de defensa avanzadas contra las artes oscuras, preparándote para enfrentar y protegerte de las amenazas mágicas más peligrosas.',
      'Profesorado Especializado: Nuestros profesores son expertos en defensa mágica con una amplia experiencia en combate contra las artes oscuras, listos para enseñarte las habilidades necesarias para enfrentar cualquier desafío.',
      'Prácticas en Simulacros de Combate: Tendrás la oportunidad de participar en simulacros de combate realistas, donde podrás poner en práctica tus habilidades y estrategias aprendidas en un entorno seguro.',
      'Red de Contactos Mágicos: Conecta con profesionales mágicos especializados en defensa contra las artes oscuras a través de nuestra red de antiguos alumnos y eventos exclusivos centrados en la seguridad mágica.',
    ],  
    subtitle2:'Cursos Destacados:',
    items2:[
      'Duelo Mágico y Tácticas de Combate',
      'Protección de Hechizos Avanzados',
      'Historia de las Artes Oscuras y Métodos de Contrarresto',
      'Ética en la Defensa Mágica',
    ],
    subtitle3:'Perspectivas Profesionales:',
    textend:'Nuestros graduados en Defensa contra las Artes Oscuras están preparados para desempeñarse en roles clave, como auror, especialista en seguridad mágica, y asesor en defensa mágica para instituciones y organizaciones.¡Únete a nosotros y descubre un mundo de posibilidades en la gestión de recursos mágicos en la Universidad de Hogwarts!',
    color:'#050505',
  },
  
  { 
    imagencard: 'dia-internacional-educacion-estilo-futurista_23-2150998765.jpg',
    title: 'ADMINISTRACION Y GESTION DE RECURSOS MAGICOS',
    image: 'Carreraswhite-08.png',
    text1: 'En la Universidad de Hogwarts, estamos comprometidos con la excelencia en la educación mágica. Nuestro programa de Administración y Gestión de Recursos Mágicos combina la magia con las habilidades de gestión más avanzadas para prepararte para un futuro emocionante en el mundo mágico.',
    subtitle:'¿Por qué elegir nuestro programa?',
    items1:[
      'Magia y Gestión Integradas: Aprenderás a aplicar principios de gestión y administración a entornos mágicos, combinando la eficiencia muggle con la magia tradicional.',
      'Profesorado Expertos: Nuestros profesores son magos y brujas altamente calificados con experiencia en el campo de la administración mágica, listos para guiarte en tu camino hacia el éxito.',
      'Prácticas en Empresas Mágicas: Tendrás la oportunidad de realizar prácticas en empresas mágicas reconocidas, adquiriendo experiencia práctica invaluable.',
      'Red de Contactos Mágicos: Conecta con profesionales mágicos de todo el mundo a través de nuestra red de antiguos alumnos y eventos exclusivos.',
    ],  
    subtitle2:'Cursos Destacados:',
    items2:[
      'Gestión de Encantamientos y Hechizos',
      'Finanzas Mágicas y Presupuestos Encantados',
      'Gestión de Criaturas Fantásticas y Reservas Naturales Mágicas',
      'Ética en la Administración de Artefactos Mágicos',
    ],
    subtitle3:'Perspectivas Profesionales:',
    textend:'Nuestros graduados de Administración y Gestión de Recursos Mágicos están preparados para desempeñarse en una variedad de roles, como gerentes de departamentos mágicos, consultores de negocios mágicos, y líderes en organizaciones de beneficencia mágica.¡Únete a nosotros y descubre un mundo de posibilidades en la gestión de recursos mágicos en la Universidad de Hogwarts!',
    color:'#eecd00',
  },
  { 
    imagencard: 'Wizengamot1995.webp',
    title: 'DERECHO, JUSTICIA Y LEYES MAGICAS',
    image: 'Carreraswhite-07.png',
    text1: 'En la Universidad de Hogwarts, nos dedicamos a brindar una educación mágica de calidad excepcional. Nuestro programa de Derecho, Justicia y Leyes Mágicas combina el estudio profundo de las leyes mágicas con la aplicación práctica de la justicia para prepararte para un papel fundamental en el sistema legal del mundo mágico.',
    subtitle:'¿Por qué elegir nuestro programa?',
    items1:[
      'Conocimiento Profundo de las Leyes Mágicas: Aprenderás sobre el marco legal que rige el mundo mágico, incluyendo el Estatuto Internacional de Secreto Mágico y las leyes específicas de cada comunidad mágica.',
      'Enfoque en la Justicia y la Ética: Nuestro programa se centra en la aplicación justa de las leyes mágicas y en la ética en el ejercicio del derecho, preparándote para defender los derechos de todos los seres mágicos.',
      'Prácticas en el Tribunal de Magia: Tendrás la oportunidad de participar en casos reales en el Tribunal de Magia, trabajando junto a jueces y abogados experimentados para resolver conflictos legales mágicos.',
      'Red de Contactos Mágicos: Conecta con profesionales del derecho mágico y de la justicia a través de nuestra red de antiguos alumnos y eventos exclusivos centrados en el mundo legal mágico.',
    ],  
    subtitle2:'Cursos Destacados:',
    items2:[
      'Legislación Mágica Internacional y Comparada',
      'Procedimientos Legales en Casos Mágicos',
      'Ética en la Práctica Legal Mágica',
      'Defensa de los Derechos de Seres Mágicos',
    ],
    subtitle3:'Perspectivas Profesionales:',
    textend:'Nuestros graduados en Derecho, Justicia y Leyes Mágicas están preparados para desempeñarse en roles cruciales, como abogados mágicos, jueces en el Tribunal de Magia, y asesores legales en instituciones y organizaciones mágicas.¡Únete a nosotros y descubre un mundo de posibilidades en la gestión de recursos mágicos en la Universidad de Hogwarts!',
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
  font-size: xxx-large;
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
</style>