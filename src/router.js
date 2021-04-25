import Vue from "vue";
import VueRouter from "vue-router";
import listing from "./views/listing.vue";
import login from "./views/login.vue";
import create from "./views/create.vue"



Vue.use(VueRouter)
export default new VueRouter({ 
 routes : [
  {
    name: "login",
    path: "/login",
    component: login
  },
  {
    name: "listing",
    path: "/listing",
    component: listing
  },
  {
    name: "create",
    path: "/create",
    component: create 
  },
]
})