import {defineStore} from 'pinia';
import axios from "axios";
import {ref} from "vue";

export const useTablesStore = defineStore('tables', () => {
  const acTable = ref([]);
  const savingThrowsTable = ref([]);
  const perceptionTable = ref([]);
  const hpTable = ref([]);
  const attackTable = ref([]);
  const damageTable = ref([]);
  const spellsTable = ref([]);
  const aoeTable = ref([]);

  function getAcTable(): Promise<void> {
    return axios.get(`https://65d7132527d9a3bc1d7a1610.mockapi.io/getTables`)
      .then((res) => {
        acTable.value = res.data.find(el => el.type === 'ac').data
        savingThrowsTable.value = res.data.find(el => el.type === 'saving-throws').data
        perceptionTable.value = res.data.find(el => el.type === 'saving-throws').data
        hpTable.value = res.data.find(el => el.type === 'hp').data
        attackTable.value = res.data.find(el => el.type === 'attack').data
        damageTable.value = res.data.find(el => el.type === 'damage').data
        spellsTable.value = res.data.find(el => el.type === 'spells').data
        aoeTable.value = res.data.find(el => el.type === 'aoe').data
      })
      .catch((rej) => {
        console.log(rej)
      })
  }

  return {
    acTable,
    savingThrowsTable,
    perceptionTable,
    hpTable,
    attackTable,
    damageTable,
    spellsTable,
    aoeTable,
    getAcTable,
  }
})