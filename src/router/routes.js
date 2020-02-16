const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "/services",
        component: () => import("pages/Services.vue")
      },

      {
        path: "/about",
        component: () => import("pages/About.vue")
      },
      {
        path: "/appointments",
        component: () => import("pages/Appointments.vue")
      },
      { path: "/contact", component: () => import("pages/Contact.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
