import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  dva: {},
  proxy: {},
  routes: [
    { path: '/login', component: '@/pages/login' },
    { exact: true, path: '/403', component: '@/pages/error/403' },
    { exact: true, path: '/404', component: '@/pages/error/404' },
    {
      path: '/',
      wrappers: [
        '@/wrappers/auth',
      ],
      component: '@/pages/layouts',
      routes: [
        { exact: true, path: '/home', component: '@/pages/home' },
        {
          path: '/admin', component: '@/pages/admin', wrappers: [
            '@/wrappers/admin',
          ], routes: [
            { exact: true, path: '/admin/dashboard', component: '@/pages/admin/dashboard' },
          ]
        },
      ],
    },
  ],
});
