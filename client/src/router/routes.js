export default [
  {
    path: "/sign-in",
    component: "modules/auth/page/Login",
    auth: false
  },
  {
    path: "/sign-up",
    component: "modules/auth/page/SignUp",
    auth: false
  },
  {
    path: "/",
    component: "modules/home/page/Home",
    auth: true
  }
];
