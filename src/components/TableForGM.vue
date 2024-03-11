<template>
	<div>
		ac: {{ mainDataComputed.ac }}
		<br>
		savingThrows: {{ mainDataComputed.savingThrows }}
		<br>
		perception: {{ mainDataComputed.perception }}
		<br>
		hp: {{ mainDataComputed.hp }}
		<br>
		attack: {{ mainDataComputed.attack }}
		<br>
		damage: {{ mainDataComputed.damage }}
		<br>
		spells: {{ mainDataComputed.spells }}
		<br>
		aoe: {{ mainDataComputed.aoe }}
	</div>
</template>

<script setup lang="ts">
import {useTablesStore} from '@/store/tables.ts';
import {computed, ref} from "vue";

const tablesStore = useTablesStore();

const currentLevel = ref(5);

const mainDataComputed = computed(() => {
	return {
		ac: tablesStore.acTable.find(el => el.level === currentLevel.value),
		savingThrows: tablesStore.savingThrowsTable.find(el => el.level === currentLevel.value),
		perception: tablesStore.perceptionTable.find(el => el.level === currentLevel.value),
		hp: tablesStore.hpTable.find(el => el.level === currentLevel.value),
		attack: tablesStore.attackTable.find(el => el.level === currentLevel.value),
		damage: tablesStore.damageTable.find(el => el.level === currentLevel.value),
		spells: tablesStore.spellsTable.find(el => el.level === currentLevel.value),
		aoe: tablesStore.aoeTable.find(el => el.level === currentLevel.value),
	}
})

tablesStore.getAcTable();

</script>

<style scoped>

</style>