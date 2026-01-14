<script setup lang="ts">
import { computed, ref } from "vue";
// import { useTablesStore } from "@/store/tables.ts";
import { levels, tableHeaders, aoeHeaders } from "@/composables/const";
import { acTable } from "@/composables/tables/acTable";
import { savingThrowsTable } from "@/composables/tables/savingThrowsTable";
import { perceptionTable } from "@/composables/tables/perceptionTable";
import { hpTable } from "@/composables/tables/hpTable";
import { attackTable } from "@/composables/tables/attackTable";
import { damageTable } from "@/composables/tables/damageTable";
import { spellDcTable } from "@/composables/tables/spellDcTable";
import { spellAttackTable } from "@/composables/tables/spellAttackTable";
import { aoeTable } from "@/composables/tables/aoeTable";

const currentLevel = ref(1);

const tableData = computed(() => {
  const tables = [
    { data: acTable, type: "ac" },
    { data: savingThrowsTable, type: "saving-throws" },
    { data: perceptionTable, type: "perception" },
    { data: hpTable, type: "hp" },
    { data: attackTable, type: "attack" },
    { data: damageTable, type: "damage" },
    { data: spellDcTable, type: "spell-dc" },
    { data: spellAttackTable, type: "spell-attack" },
  ];

  return tables.map((table) => {
    const el = table.data?.find((el) => el.level === currentLevel.value) || {};
    return { ...el, type: table.type };
  });
});

const aoeData = computed(() => {
  const tables = [{ data: aoeTable, type: "aoe" }];

  return tables.map((table) => {
    const el = table.data?.find((el) => el.level === currentLevel.value) || {};
    return { ...el, type: table.type };
  });
});
</script>

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
      <span
        :style="`padding: ${value ? '5px 10px' : '0'}; background: ${
          value ? '#6cd8ff' : '0'
        }; background`"
      >
        {{ value ? value : "" }}
      </span>
    </template>
    <template #item.high="{ value }">
      <span
        :style="`padding: ${value ? '5px 10px' : '0'}; background: ${
          value ? '#3cff00' : '0'
        }; background`"
      >
        {{ value ? value : "" }}
      </span>
    </template>
    <template #item.moderate="{ value }">
      <span
        :style="`padding: ${value ? '5px 10px' : '0'}; background: ${
          value ? '#ffff54' : '0'
        }; background`"
      >
        {{ value ? value : "" }}
      </span>
    </template>
    <template #item.low="{ value }">
      <span
        :style="`padding: ${value ? '5px 10px' : '0'}; background: ${
          value ? '#ff8000' : '0'
        }; background`"
      >
        {{ value ? value : "" }}
      </span>
    </template>
    <template #item.terrible="{ value }">
      <span
        :style="`padding: ${value ? '5px 10px' : '0'}; background: ${
          value ? '#ff0000' : '0'
        }; background`"
      >
        {{ value ? value : "" }}
      </span>
    </template>
  </v-data-table>
  <v-data-table
    :headers="aoeHeaders"
    :items="aoeData"
    density="comfortable"
    item-key="name"
    style="margin-top: 10px"
  >
    <template #bottom></template>
    <template #item.unlimited="{ value }">
      <span
        :style="`padding: ${value ? '5px 10px' : '0'}; background: ${
          value ? '#3cff00' : '0'
        }; background`"
      >
        {{ value ? value : "" }}
      </span>
    </template>
    <template #item.limited="{ value }">
      <span
        :style="`padding: ${value ? '5px 10px' : '0'}; background: ${
          value ? '#ff8000' : '0'
        }; background`"
      >
        {{ value ? value : "" }}
      </span>
    </template>
  </v-data-table>
</template>

<style lang="scss" scoped>
.v-data-table__tr {
  vertical-align: middle !important;
}
</style>
