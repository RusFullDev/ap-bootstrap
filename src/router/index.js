import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'default',
        component: () => import('../layout/Default.vue'),
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../pages/Home.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../pages/About.vue')
            },
            {
                path: 'pricing',
                name: 'pricing',
                component: () => import('../pages/Pricing.vue')
            },
            {
                path: 'work',
                name: 'work',
                component: () => import('../pages/Work.vue')
            },
            {
                path: 'blog',
                name: 'blog',
                component: () => import('../pages/Blog.vue')
            }, 
            {
               path: 'contact-us',
               name: 'contact-us',
               component: () => import('../pages/Contact.vue')
           }
        ]
    },  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
