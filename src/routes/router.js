import { createRouter, createWebHistory } from 'vue-router';
import ViewHome from '../views/ViewHome.vue';
import HomeLayout from '../layouts/HomeLayout.vue'
import ViewNoticias from '../views/ViewNoticias.vue';
import ViewBiblioteca from '../views/ViewBiblioteca.vue';
import ViewCarreras from '../views/ViewCarreras.vue';

const routes = [
    {
        path:'/',
        component: HomeLayout,
        children: [
            { path: '', component: ViewHome },
            { path: 'biblioteca', component: ViewBiblioteca  },
            { path: 'carreras', component: ViewCarreras},
            { path: 'noticias', component: ViewNoticias },

        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;