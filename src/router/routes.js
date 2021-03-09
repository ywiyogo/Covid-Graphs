
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Tests.vue') },
      { path: 'heatmap', component: () => import('pages/Heatmap.vue') },
      { path: 'mortality', component: () => import('pages/Mortality.vue') },
      { path: 'rvalues', component: () => import('pages/Rvalues.vue') },
      { path: 'sickness', component: () => import('pages/Sickness.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
