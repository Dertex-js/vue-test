import { action, makeObservable, observable } from "mobx"
import { People } from "@/types/people.ts"
import { getItemFromStorage, saveItemToStorage } from "@/utils"
import { StorageTypes } from "@/utils/storage/types.ts"

export class FavouriteStore {
  @observable
  favoritePeople: People[] = []

  constructor() {
    makeObservable(this)
  }

  @action
  getFavourites() {
    const json = getItemFromStorage("peoples", "", StorageTypes.LOCAL_STORAGE)
    if (json) {
      this.favoritePeople = JSON.parse(json)
    }
  }

  @action
  setFavourites() {
    saveItemToStorage(["peoples", JSON.stringify(this.favoritePeople)], {
      storageType: StorageTypes.LOCAL_STORAGE
    })
  }

  @action
  addToFavourite(people: People) {
    this.favoritePeople = [...this.favoritePeople, { ...people }]
    this.setFavourites()
  }

  @action
  deleteFromFavourite(people: People) {
    this.favoritePeople = this.favoritePeople.filter((el) => el.url !== people.url)
    this.setFavourites()
  }
}
