<template>
  <v-autocomplete
    label="Выбор уровня"
    density="compact"
    v-model="currentLevel"
    :items="levels"
    variant="outlined"
  ></v-autocomplete>
  <v-data-table
    :headers="headers"
    :items="tableData"
    density="comfortable"
    item-key="name"
  >
    <template #bottom></template>
    <template #item.extreme="{ value }">
			<span :style="`padding: ${value ? '5px 10px' : '0'}; background: ${value ? '#6cd8ff' : '0'}; background`">
				{{ value ? value : '' }}
			</span>
    </template>
    <template #item.high="{ value }">
			<span :style="`padding: ${value ? '5px 10px' : '0'}; background: ${value ? '#3cff00' : '0'}; background`">
				{{ value ? value : '' }}
			</span>
    </template>
    <template #item.moderate="{ value }">
			<span :style="`padding: ${value ? '5px 10px' : '0'}; background: ${value ? '#ffff54' : '0'}; background`">
				{{ value ? value : '' }}
			</span>
    </template>
    <template #item.low="{ value }">
			<span :style="`padding: ${value ? '5px 10px' : '0'}; background: ${value ? '#ff8000' : '0'}; background`">
				{{ value ? value : '' }}
			</span>
    </template>
    <template #item.terrible="{ value }">
			<span :style="`padding: ${value ? '5px 10px' : '0'}; background: ${value ? '#ff0000' : '0'}; background`">
				{{ value ? value : '' }}
			</span>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useTablesStore} from '@/store/tables.ts';
// import Header from "@/components/interface/TableForGM";
import InitialTable from "@/components/interface/InitialTable";

const levels = ref([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

const headers = ref([
  {title: 'type', key: 'type', sortable: false},
  {title: 'extreme', key: 'extreme', sortable: false},
  {title: 'high', key: 'high', sortable: false},
  {title: 'moderate', key: 'moderate', sortable: false},
  {title: 'low', key: 'low', sortable: false},
  {title: 'terrible', key: 'terrible', sortable: false},
])

const tablesStore = useTablesStore();

const currentLevel = ref(1);

const tableData = computed(() => {
  console.log(`tablesStore =`, tablesStore);
  console.log(`tablesStore.acTable =`, tablesStore.acTable);
  const tables: (InitialTable | object)[] = [
    tablesStore.acTable,
    tablesStore.savingThrowsTable,
    tablesStore.perceptionTable,
    tablesStore.hpTable,
    tablesStore.attackTable,
    tablesStore.damageTable,
    tablesStore.spellDcTable,
    tablesStore.spellAttackTable,
    tablesStore.aoeTable,
  ];

  return tables.map((table) => {
    const el = table?.data?.find(el => el.level === currentLevel.value);
    return {...el, type: table?.type};
  });
});

tablesStore.getDataTable();

</script>

<style lang="scss" scoped>
.v-data-table__tr {
  vertical-align: middle !important;
}
</style>