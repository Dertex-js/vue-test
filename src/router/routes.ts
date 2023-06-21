import MainPage from "@/pages/MainPage.vue"
import PeoplesPage from "@/pages/PeoplesPage.vue"
import PeoplePage from "@/pages/PeoplePage.vue"
import FavouritesPage from "@/pages/FavouritesPage.vue"

const routes = [
  {
    path: "/",
    component: MainPage,
    meta: {
      title: "Навигация"
    }
  },
  {
    path: "/peoples",
    component: PeoplesPage,
    meta: {
      title: "Персонажи"
    }
  },
  {
    path: "/peoples/:id",
    component: PeoplePage,
    meta: {
      title: "Страница персонажа"
    }
  },
  {
    path: "/favorites",
    component: FavouritesPage,
    meta: {
      title: "Избранные"
    }
  }
]

export default routes
