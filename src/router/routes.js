export default [
  {
    path: "/sign-up",
    component: "modules/auth/page/Login",
    auth: false
  },
  {
    path: "/",
    component: "modules/home/page/Home",
    auth: true
  }
];
