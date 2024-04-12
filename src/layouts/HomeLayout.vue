<template>
    <!-- NavBar -->
    <v-app-bar
        elevation="2" 
        class="pa-4" 
        color="#050505" 
        scroll-behavior="hide" 
        scroll-threshold="300"
        height="90"
    >
    <!-- Icono de menú en pantallas pequeñas -->
        <v-app-bar-nav-icon 
            class="hidden-lg-and-up text-left" 
            @click.stop="drawer = !drawer" 
            color="white"
            >
        </v-app-bar-nav-icon>     
        <v-spacer  
            class="hidden-md-and-down"
        >
        </v-spacer>
        
        <v-img
            src="/public/HogwartsUniversityLogo.png"
            contain
            class="text-left imagen-logo"
        ></v-img>

        <v-spacer  
            class="hidden-md-and-down"
        >
        </v-spacer>
  
        <v-btn 
            v-for="item in menuItems" 
            :key="item.text" 
            variant="plain" 
            :to="item.to" 
            exact 
            stacked
            color="white"
            class="text-left dm-serif-items hidden-md-and-down ma-2"
        >
            <v-icon class="mb-2" size="large">{{ item.icon }}</v-icon>
            <span class="hidden-md-and-down underline-text">{{ item.text }}</span>
        </v-btn>
        <v-spacer  
            class="hidden-md-and-down"
        >
        </v-spacer>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer 
        v-model="drawer"
        temporary
        floating 
        class="pt-12"
        :width="270"
        color="#050505"
    >
        <v-list>
            <v-list-item
                exact 
                v-for="(item, index) in menuItems" 
                :key="index" 
                :to="item.to"
                class="ma-3 pa-3"
                variant="text"
            >
                <v-list-item>
                    <v-list-item 
                        :prepend-icon="item.icon" 
                        color="#"
                        
                    >
                        {{ item.text }}
                    </v-list-item>
                </v-list-item>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- Body para las Views-->
    <v-main>
        <router-view />
    </v-main>

    
    <v-footer color="#050505" dark class="mt-16">
    <v-container fluid>
      <!-- Primera fila -->
      <v-row justify="center" align="center">
        <!-- Columna del logo, número y correo -->
        <v-col cols="12" sm="12" md="4" class="footer-column ma-auto">
          <v-row align="center" justify="center">
            <v-col cols="7" class="text-center text-xl-left">
              <router-link to="/">
                <v-img
                src="/public/logonav.png"
                alt="Logo"
                max-width="150"
                ></v-img>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
        
        <!-- Columna de navegación -->
        <v-col cols="12" sm="12" md="4" class="footer-column ma-auto">
          <v-btn v-for="item in menuItems" :key="item.text" variant="plain" color="white" :to="item.to" exact  class="d-flex flex-column bodoni-moda-items">
          {{ item.text }}
        </v-btn>
        </v-col>
        
        <!-- Columna de métodos de pago -->
        <v-col cols="12" sm="12" md="4" class="footer-column ma-auto">
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center justify-space-between">
            <v-icon size="36" class="ma-3 pa-2" >mdi-facebook</v-icon>
            <v-icon size="36" class="ma-3 pa-2" >mdi-twitter</v-icon>
            <v-icon size="36" class="ma-3 pa-2">mdi-instagram</v-icon>
            <v-icon size="36" class="ma-3 pa-2">mdi-tik-tok</v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
      <!-- Segunda fila con el año y derechos de autor -->
      <v-row justify="center">
        <v-col cols="12" sm="12" class="text-center bodoni-moda-items">
          <v-divider class="mb-6"></v-divider>
          <span>&copy; {{ new Date().getFullYear() }} Hogwarts University. Todos los derechos reservados.</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue';


const drawer = ref(false);

const menuItems = ref([
  { text: 'Inicio', icon: 'mdi-home' , to:'/'},
  { text: 'Carreras', icon: 'mdi-school-outline' , to:'carreras'},
  { text: 'Noticias', icon: 'mdi-newspaper-variant-outline' , to:'noticias'},
  { text: 'Biblioteca', icon: 'mdi-book-open-variant-outline' , to:'biblioteca'},
]);

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
  border-bottom: 2px solid #edc100;
  padding-bottom: 4px;
  transition: transform 0.3s ease;
  transform: translateY(-2px);
}

.underline-text-menu:hover {
  border-bottom: 2px solid white;
  padding-bottom: 2px;
  transition: transform 0.3s ease;
  transform: translateY(-2px);
}
</style>