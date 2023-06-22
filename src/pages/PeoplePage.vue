<template>
  <Observer>
    <el-table
      :key="favouritesState.favoritePeople"
      v-loading="isLoading"
      :data="[peoplesStore.currentPeople]"
    >
      <el-table-column prop="name" label="Имя" />
      <el-table-column prop="birth_year" label="Год рождения" />
      <el-table-column prop="eye_color" label="Цвет глаз" />
      <el-table-column prop="gender" label="Гендер" />
      <el-table-column prop="hair_color" label="Цвет волос" />
      <el-table-column prop="height" label="Рост" />
      <el-table-column prop="mass" label="Вес" />
      <el-table-column prop="skin_color" label="Цвет кожи" />
      <el-table-column label="Избранные">
        <template #default="scope">
          <el-button
            v-if="!handlePeopleInFavourite(scope.row)"
            type="success"
            plain
            class="w-[100px]"
            @click="handleAddToFavourites(scope.row)"
            >Добавить</el-button
          >
          <el-button
            v-if="handlePeopleInFavourite(scope.row)"
            type="danger"
            plain
            class="w-[100px]"
            @click="handleDeleteFromFavorites(scope.row)"
            >Удалить
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </Observer>
</template>

<script setup lang="ts">
import { Observer } from "mobx-vue-lite"
import { PeoplesStore } from "@/store/peoplesStore.ts"
import { People } from "@/types/people.ts"
import { FavouriteStore } from "@/store/favouriteStore.ts"

const isLoading = ref(true)

const route = useRoute()
const peoplesStore = new PeoplesStore()
const favouritesState = new FavouriteStore()

favouritesState.getFavourites()

peoplesStore.fetchCurrentPeople(route.params.id as string).then(() => {
  isLoading.value = false
})

const handleAddToFavourites = (row: People) => {
  favouritesState.addToFavourite(row)
}
const handleDeleteFromFavorites = (row: People) => {
  favouritesState.deleteFromFavourite(row)
}
const handlePeopleInFavourite = (people: People) => {
  return !!favouritesState.favoritePeople.find((el) => {
    return el.url === people.url
  })
}
</script>

<style scoped></style>
