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
  const spellDcTable = ref([]);
  const spellAttackTable = ref([]);
  const aoeTable = ref([]);

  function getAcTable(): Promise<void> {
    return axios.get(`https://65d7132527d9a3bc1d7a1610.mockapi.io/getTables`)
      .then((res) => {
        acTable.value = res.data.find(el => el.type === 'ac')
        savingThrowsTable.value = res.data.find(el => el.type === 'saving-throws')
        perceptionTable.value = res.data.find(el => el.type === 'perception')
        hpTable.value = res.data.find(el => el.type === 'hp')
        attackTable.value = res.data.find(el => el.type === 'attack')
        damageTable.value = res.data.find(el => el.type === 'damage')
        spellDcTable.value = res.data.find(el => el.type === 'spell-dc')
        spellAttackTable.value = res.data.find(el => el.type === 'spell-attack')
        aoeTable.value = res.data.find(el => el.type === 'aoe')
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
    spellDcTable,
    spellAttackTable,
    aoeTable,
    getAcTable,
  }
})