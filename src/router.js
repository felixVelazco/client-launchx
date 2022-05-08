import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/missionCommanders",
    name: "mission-commanders",
    component: () => import("./components/MissionCommandersList")
  },
  {
    path: "/missionCommanders/:id",
    name: "mc-details",
    component:() => import("./components/MissionCommander")
  },
  {
    path: "/missionCommanders/add",
    name: "add-mc",
    component: () => import("./components/AddMissionCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
