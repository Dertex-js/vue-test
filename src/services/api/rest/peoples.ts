import makeRequest from "@/services/api/httpClient.ts"
import { FetchPeoplesByParams } from "@/services/api/types/peoplesTypes.ts"

export const fetchPeoplesByParams = (params?: FetchPeoplesByParams) =>
  makeRequest({
    url: "https://swapi.dev/api/people",
    params
  })

export const fetchMorePeoples = (url: string) =>
  makeRequest({
    url
  })

export const fetchCurrentPeople = (id: string) =>
  makeRequest({
    url: `https://swapi.dev/api/people/${id}`
  })
