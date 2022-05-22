
import { createWebHistory, createRouter } from "vue-router";

import Main_layout from "../layouts/MainLayout.vue";
import Admin_layout from "../layouts/AdminLayout.vue";

import AdminNews from "../pages/admin/AdminNews";
import AdminEvents from "../pages/admin/AdminEvents";

import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import ShejraSharif from "../pages/ShejraSharif"
import News from "../pages/News"
import ContactUs from "../pages/ContactUs.vue"


const routes = [
  { 
      path: '/', 
      component: Home ,
      meta: { layout: Main_layout } 

  },
  { 
      path: '/about', 
      component: AboutUs,
      meta: { layout: Main_layout } 
  },
  { 
      path: '/shejra-sharif', 
      component: ShejraSharif,
      meta: { layout: Main_layout } 
  },
  { 
    path: '/news', 
    component: News,
    meta: { layout: Main_layout } 
  },
  { 
    path: '/admin-news', 
    component: AdminNews,
    meta: { 
      layout: Admin_layout,
      requiresAuth: false,
    } 
  },
  { 
    path: '/admin-events', 
    component: AdminEvents,
    meta: { 
      layout: Admin_layout,
      requiresAuth: false,
    } 
  },
  { 
    path: '/contact-us', 
    component: ContactUs,
    meta: { 
      layout: Main_layout,
      requiresAuth: false,
    } 
  },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // if (!store.getters.isLoggedIn) {
        //     next('/admin-dashboard/login')
        // } else{ 
        //     next()
        // }
    } else {
        next()
    }
})

export default router




