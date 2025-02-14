import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginPage from '@/views/LoginPage.vue'
import { useAuth } from './islogin'
import FirebaseRegister from '@/views/FirebaseRegisterView.vue'
import FirebaseSignin from '@/views/FirebaseSigninView.vue'
import AddBookView from '@/views/addBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'

const { isLogin } = useAuth()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseRegister
  },
  {
    path: '/FirebaseSignin',
    name: 'FirebaseSignin',
    component: FirebaseSignin
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Perform logic before every route change
  if (to.name == 'About' && !isLogin.value) {
    // For example, redirect to home if trying to access any other route
    // if(isLogin.value){
    //   console.log("LoginPage",isLogin.value)
    //   next();
    // }
    // else{
    console.log("LoginPage",isLogin.value)
    alert("This have login!")
    next({ name: 'Login' });
    // }
  } else {
    next();
  }
});

export default router

// import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/HomeView.vue';
// import About from '../views/AboutView.vue';

// // const routes = [
// //   { path: '/', name: 'Home', component: Home },
// //   { path: '/about', name: 'About', component: About }
// // ];

// // router.beforeEach((to, from, next) => {
// //   // Perform logic before every route change
// //   if (to.name !== 'Home') {
// //     // For example, redirect to home if trying to access any other route
// //     next({ name: 'Home' });
// //   } else {
// //     next();
// //   }
// // });

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: About,
//     beforeEnter: (to, from, next) => {
//       // Perform logic before entering the About route
//       if () {
//         next();
//       } else {
//         next(false); // Cancel the navigation
//       }
//     }
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });


// export default router;