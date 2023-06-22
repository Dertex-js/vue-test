<template>
  <div class="min-h-[93vh] p-[20px] flex flex-col gap-[15px] bg-[#f5f5f5]">
    <el-autocomplete
      v-model="search"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      clearable
      @select="handleSelect"
    />
    <el-table
      v-loading="isLoading"
      :data="peoplesState.peoples"
      :cell-style="{ height: '60px' }"
      border
    >
      <el-table-column prop="name" label="Имя" />
      <el-table-column prop="height" label="Рост" />
      <el-table-column prop="mass" label="Вес" />
      <el-table-column prop="hair_color" label="Цвет волос" />
      <el-table-column label="Избранные">
        <template #default="scope">
          <el-button @click="handleAddToFavourites(scope.$index, scope.row)"
            >Добавить</el-button
          >
          <el-button @click="handleDeleteFromFavorites(scope.$index, scope.row)"
            >Удалить
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { PeoplesStore } from "@/store/peoplesStore.ts"
import { People } from "@/types/people.ts"
import router from "@/router"
import { FavouriteStore } from "@/store/favouriteStore.ts"

const peoplesState = new PeoplesStore()
const favouritesState = new FavouriteStore()

const isLoading = ref(true)
const search = ref("")

favouritesState.getFavourites()
peoplesState.fetchPeoplesByParams().then(() => {
  isLoading.value = false
})

const handleAddToFavourites = (_, row: People) => {
  favouritesState.addToFavourite(row)
}
const handleDeleteFromFavorites = (_, row: People) => {
  favouritesState.deleteFromFavourite(row)
}
const querySearch = (queryString: string, cb: any) => {
  peoplesState.fetchPeoplesBySearch(queryString).then(({ data }) => {
    cb(
      data.results.map((el: People) => {
        return { value: el.name, id: el.url.at(-2) }
      })
    )
  })
}
const handleSelect = (el: { value: string; id: string }) => {
  router.push(`/peoples/${el.id}`)
}
</script>
