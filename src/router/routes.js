const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/landing_page_ui_kit',
    component: () => import('layouts/LandingPageLayout.vue'),
    children: [{ path: '', component: () => import('pages/LandingPageUiKit.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
