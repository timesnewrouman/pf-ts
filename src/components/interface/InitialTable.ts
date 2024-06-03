import {Ref} from "vue";

interface TableData {
  level: number;
  extreme?: number;
  high?: number;
  moderate?: number;
  low?: number;
  terrible?: number;
  // zxc: number
}

interface InitialTable {
  type: string;
  data: TableData[];
}

interface MappedTableData extends TableData {
  type: string;
}

interface TablesStore {
  acTable: Ref<InitialTable | {}>;
  savingThrowsTable: Ref<InitialTable | {}>;
  perceptionTable: Ref<InitialTable | {}>;
  hpTable: Ref<InitialTable | {}>;
  attackTable: Ref<InitialTable | {}>;
  damageTable: Ref<InitialTable | {}>;
  spellDcTable: Ref<InitialTable | {}>;
  spellAttackTable: Ref<InitialTable | {}>;
  aoeTable: Ref<InitialTable | {}>;
  getDataTable: () => Promise<void>;
}

export type {
  InitialTable,
  TablesStore,
  MappedTableData
}