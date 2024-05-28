import {defineStore} from 'pinia';
import axios from "axios";
import {ref} from "vue";
import InitialTable from "@/components/interface/InitialTable";

export const useTablesStore = defineStore('tables', () => {
  const acTable = ref<InitialTable | {}>({});
  const savingThrowsTable = ref<InitialTable | {}>({});
  const perceptionTable = ref<InitialTable | {}>({});
  const hpTable = ref<InitialTable | {}>({});
  const attackTable = ref<InitialTable | {}>({});
  const damageTable = ref<InitialTable | {}>({});
  const spellDcTable = ref<InitialTable | {}>({});
  const spellAttackTable = ref<InitialTable | {}>({});
  const aoeTable = ref<InitialTable | {}>({});

  function getDataTable(): Promise<void> {
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
    getDataTable,
  }
})