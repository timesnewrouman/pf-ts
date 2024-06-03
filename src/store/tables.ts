import {defineStore} from 'pinia';
import axios from "axios";
import {Ref, ref} from "vue";
import {InitialTable, TablesStore} from "@/components/interface/InitialTable";

export const useTablesStore = defineStore('tables', (): TablesStore => {
  const acTable: Ref<InitialTable | {}> = ref({});
  const savingThrowsTable: Ref<InitialTable | {}> = ref({});
  const perceptionTable: Ref<InitialTable | {}> = ref({});
  const hpTable: Ref<InitialTable | {}> = ref({});
  const attackTable: Ref<InitialTable | {}> = ref({});
  const damageTable: Ref<InitialTable | {}> = ref({});
  const spellDcTable: Ref<InitialTable | {}> = ref({});
  const spellAttackTable: Ref<InitialTable | {}> = ref({});
  const aoeTable: Ref<InitialTable | {}> = ref({});

  async function getDataTable(): Promise<void> {
    try {
      const res = await axios.get(`https://65d7132527d9a3bc1d7a1610.mockapi.io/getTables`);
      acTable.value = res.data.find((el: InitialTable) => el.type === 'ac') || {};
      savingThrowsTable.value = res.data.find((el: InitialTable) => el.type === 'saving-throws') || {};
      perceptionTable.value = res.data.find((el: InitialTable) => el.type === 'perception') || {};
      hpTable.value = res.data.find((el: InitialTable) => el.type === 'hp') || {};
      attackTable.value = res.data.find((el: InitialTable) => el.type === 'attack') || {};
      damageTable.value = res.data.find((el: InitialTable) => el.type === 'damage') || {};
      spellDcTable.value = res.data.find((el: InitialTable) => el.type === 'spell-dc') || {};
      spellAttackTable.value = res.data.find((el: InitialTable) => el.type === 'spell-attack') || {};
      aoeTable.value = res.data.find((el: InitialTable) => el.type === 'aoe') || {};
    } catch (error) {
      console.error(error);
    }
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