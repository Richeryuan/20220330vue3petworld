import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import accountInformationPage from '../views/accountInformationPage.vue'
import forgotPasswordPage from '../views/forgotPasswordPage.vue'
import loginPage from '../views/loginPage.vue'
import logoutPage from '../views/logoutPage.vue'
import newPasswordPage from '../views/newPasswordPage.vue'
import returnPage from '../views/returnPage.vue'
import checkCodePage from '../views/checkCodePage.vue'
import accountRevisePage from '../views/accountRevisePage.vue'
import testPage from '../views/testPage.vue'


const routes = [
  {
    path: '/accountInformationPage',
    name: 'accountInformationPage',
    component: accountInformationPage,
  },
  {
    path: '/forgotPasswordPage',
    name: 'forgotPasswordPage',
    component: forgotPasswordPage,
  },
  {
    path: '/',
    name: 'loginPage',
    component: loginPage,
  },
  {
    path: '/logoutPage',
    name: 'logoutPage',
    component: logoutPage,
  },
  {
    path: '/newPasswordPage',
    name: 'newPasswordPage',
    component: newPasswordPage,
  },
  {
    path: '/returnPage',
    name: 'returnPage',
    component: returnPage,
  },
  {
    path: '/checkCodePage',
    name: 'checkCodePage',
    component: checkCodePage,
  },
  {
    path: '/accountRevisePage',
    name: 'accountRevisePage',
    component: accountRevisePage,
  },
  
  {
    path: '/testPage',
    name: 'testPage',
    component: testPage,
  },
















  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
