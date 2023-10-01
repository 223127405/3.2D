import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
import AboutView from '../views/AboutView.vue'; 
import ContactView from '../views/ContactView.vue'; 
import PortfolioView from '../views/PortfolioView.vue'; 
import ProjectsView from '../views/ProjectsView.vue'; 
import AdminLogin from '../views/AdminLogin.vue';
import ResumeView from '../views/ResumeView.vue';
import BlogPost from '../views/BlogPost.vue';
import BlogPage from '../views/BlogPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  { 
    path: '/resume',
    name: 'Resume',
    component: ResumeView,
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: { requiresAuth: false },
  },
  { 
    path: '/blog-post',
    name: 'BlogPost',
    component: BlogPost,
    meta: { requiresAuth: true },
  },
  {
    path: '/blog-page',  
    name: 'BlogPage',
    component: BlogPage
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
