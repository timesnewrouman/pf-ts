<template>
	<div>
		ac: {{ mainDataComputed.ac }}
		<br>
		savingThrows: {{ mainDataComputed.savingThrows }}
		<br>
		perception: {{ mainDataComputed.perception }}
	</div>
</template>

<script setup lang="ts">
import {useTablesStore} from '@/store/tables';
import {computed, ref} from "vue";

const tablesStore = useTablesStore();

const currentLevel = ref(5);

const mainDataComputed = computed(() => {
	return {
		ac: tablesStore.acTable.find(el => el.level === currentLevel.value),
		savingThrows: tablesStore.savingThrowsTable.find(el => el.level === currentLevel.value),
		perception: tablesStore.perceptionTable.find(el => el.level === currentLevel.value)
	}
})

tablesStore.getAcTable();
tablesStore.getSavingThrowsTable();

</script>

<style scoped>

</style>