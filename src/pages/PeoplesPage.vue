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
      v-if="!isLoading"
      :data="state.peoples"
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

const state = new PeoplesStore()

const isLoading = ref(true)
const search = ref("")
// const searchPeoples = ref<People[]>([])

// watch(search, (newSearch) => {
//   state.fetchPeoplesBySearch(newSearch).then(({ data }) => {
//     searchPeoples.value = data.results
//   })
// })

state.fetchPeoplesByParams().then(() => {
  isLoading.value = false
})

const handleAddToFavourites = (index: number, row: People) => {
  console.log(index, row)
}
const handleDeleteFromFavorites = (index: number, row: People) => {
  console.log(index, row)
}
const querySearch = (queryString: string, cb: any) => {
  state.fetchPeoplesBySearch(queryString).then(({ data }) => {
    cb(
      data.results.map((el, index) => {
        return { value: el.name, id: index }
      })
    )
  })
}
const handleSelect = (el) => {
  router.push(`/peoples/${el.id}`)
}
</script>
