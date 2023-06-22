import { observable, action, makeObservable } from "mobx"
import { peoplesApi } from "@/services/api"
import { FetchPeoplesByParams } from "@/services/api/types/peoplesTypes.ts"
import { People } from "@/types/people.ts"

export class PeoplesStore {
  @observable
  peoples: People[] = []

  constructor() {
    makeObservable(this)
  }

  @action
  fetchPeoplesByParams(params?: FetchPeoplesByParams) {
    return peoplesApi.fetchPeoplesByParams(params).then(({ data }) => {
      this.peoples = [...this.peoples, ...data.results]
      return peoplesApi
        .fetchMorePeoples(data.next)
        .then(({ data }) => (this.peoples = [...this.peoples, ...data.results]))
    })
  }

  @action
  fetchPeoplesBySearch(searchString: string) {
    return peoplesApi.fetchPeoplesByParams({ search: searchString })
  }
}
