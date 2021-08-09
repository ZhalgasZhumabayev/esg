
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'news', component: () => import('pages/NewsPage.vue') },
      { path: 'contacts', component: () => import('pages/ContactsPage.vue')},
      { path: 'partners', component: () => import('pages/PartnersPage.vue')},
      { path: 'about', component: () => import('pages/AboutPage.vue')},
      { path: 'esg', component: () => import('pages/ESG.vue')},
      { path: 'law', component: () => import('pages/LawPage.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
