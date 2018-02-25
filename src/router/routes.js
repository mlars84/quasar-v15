
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/poop',
    component: () => import('layouts/poop')
  },
  {
    path: '/fart',
    component: () => import('layouts/fart')
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
