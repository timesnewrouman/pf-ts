<template>
	<v-autocomplete
		label="Выбор уровня"
		density="compact"
		v-model="currentLevel"
		:items="levels"
		variant="outlined"
	></v-autocomplete>
	<v-data-table
		:headers="tableHeaders"
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
import {computed, ref, Ref} from "vue";
import {useTablesStore} from '@/store/tables.ts';
import {MappedTableData, InitialTable} from "@/components/interface/InitialTable";
import {levels, tableHeaders} from "@components/const/const";

const tablesStore = useTablesStore();

const currentLevel: Ref<number> = ref(1);

const tableData = computed<MappedTableData[]>(() => {
	const tables: InitialTable[] = [
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
		const el = table?.data?.find(el => el.level === currentLevel.value) || {};
		return {...el, type: table?.type} as MappedTableData;
	});
});

tablesStore.getDataTable();

</script>

<style lang="scss" scoped>
.v-data-table__tr {
	vertical-align: middle !important;
}
</style>