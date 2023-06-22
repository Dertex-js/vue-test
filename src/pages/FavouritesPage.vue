<template>
  <Observer>
    <el-table
      :key="favouritesState.favoritePeople"
      :data="favouritesState.favoritePeople"
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
          <el-button type="danger" plain @click="handleDeleteFromFavorites(scope.row)"
            >Удалить
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </Observer>
</template>

<script setup lang="ts">
import { Observer } from "mobx-vue-lite"
import { FavouriteStore } from "@/store/favouriteStore.ts"
import { People } from "@/types/people.ts"

const favouritesState = new FavouriteStore()
favouritesState.getFavourites()

const handleDeleteFromFavorites = (row: People) => {
  favouritesState.deleteFromFavourite(row)
}
</script>

<style scoped></style>
