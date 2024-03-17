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
	<!--	<div>-->
	<!--		ac: {{ mainDataComputed.ac }}-->
	<!--		<br>-->
	<!--		savingThrows: {{ mainDataComputed.savingThrows }}-->
	<!--		<br>-->
	<!--		perception: {{ mainDataComputed.perception }}-->
	<!--		<br>-->
	<!--		hp: {{ mainDataComputed.hp }}-->
	<!--		<br>-->
	<!--		attack: {{ mainDataComputed.attack }}-->
	<!--		<br>-->
	<!--		damage: {{ mainDataComputed.damage }}-->
	<!--		<br>-->
	<!--		spells: {{ mainDataComputed.spells }}-->
	<!--		<br>-->
	<!--		aoe: {{ mainDataComputed.aoe }}-->
	<!--	</div>-->
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useTablesStore} from '@/store/tables.ts';
import Header from "@components/interface/TableForGM";
import InitialTable from "@components/interface/InitialTable";

const levels = ref([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

const headers = ref<Header[]>([
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
	const tables: (InitialTable)[] = [
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

// const mainDataComputed = computed(() => {
// 	return {
// 		ac: tablesStore?.acTable?.data?.find(el => el.level === currentLevel.value),
// 		savingThrows: tablesStore?.savingThrowsTable?.data?.find(el => el.level === currentLevel.value),
// 		perception: tablesStore?.perceptionTable?.data?.find(el => el.level === currentLevel.value),
// 		hp: tablesStore?.hpTable?.data?.find(el => el.level === currentLevel.value),
// 		attack: tablesStore?.attackTable?.data?.find(el => el.level === currentLevel.value),
// 		damage: tablesStore?.damageTable?.data?.find(el => el.level === currentLevel.value),
// 		spells: tablesStore?.spellsTable?.data?.find(el => el.level === currentLevel.value),
// 		aoe: tablesStore?.aoeTable?.data?.find(el => el.level === currentLevel.value),
// 	}
// })

tablesStore.getAcTable();

</script>

<style lang="scss" scoped>
.v-data-table__tr {
	vertical-align: middle !important;
}
</style>