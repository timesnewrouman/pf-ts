<script setup lang="ts">
import { ref } from "vue";
import TableForGM from "@/components/TableForGM.vue";

const tables = ref([{ id: 1 }]);

function addTable() {
  const newId = Math.max(...tables.value.map((t) => t.id), 0) + 1;
  tables.value.push({ id: newId });
}
</script>

<template>
  <div class="tables-container">
    <v-btn color="primary" class="zxc" @click="addTable"> + </v-btn>
    <div class="tables-wrapper">
      <div v-for="table in tables" :key="table.id" class="table-item">
        <TableForGM />     
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tables-container {
  padding: 16px;
}

.tables-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 1308px;
}

.table-item {
  // flex: 0 1 auto;
  min-width: 600px;
}

.zxc {
  display: flex;
  margin-left: auto;
  margin-bottom: 20px;
}
</style>
