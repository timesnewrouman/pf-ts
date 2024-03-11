import {defineStore} from 'pinia';
import axios from "axios";
import {ref} from "vue";

export const useTablesStore = defineStore('tables', () => {
  const acTable = ref([]);
  const savingThrowsTable = ref([]);
  const perceptionTable = ref([]);

  function getAcTable(): Promise<void> {
    return axios.get(`https://65d7132527d9a3bc1d7a1610.mockapi.io/armor-class`)
      .then((res) => {
        acTable.value = res.data
      })
      .catch((rej) => {
        console.log(rej)
      })
  }

  function getSavingThrowsTable(): Promise<void> {
    return axios.get(`https://65d7132527d9a3bc1d7a1610.mockapi.io/saving-throws`)
      .then((res) => {
        savingThrowsTable.value = res.data
        perceptionTable.value = res.data
      })
      .catch((rej) => {
        console.log(rej)
      })
  }

  return {
    acTable,
    savingThrowsTable,
    perceptionTable,
    getAcTable,
    getSavingThrowsTable
  }
})