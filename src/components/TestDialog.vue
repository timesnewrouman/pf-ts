<template>
  <v-dialog-1000-scrollable-persistent
    v-model="dialogs['experts-education-dialog']"
  >
    <v-card style="padding: 10px 30px 0 20px">
      <v-toolbar>
        <v-toolbar-title
          style="margin-inline-start: 0; color: #0F4C81; font-style: normal;font-weight: 600;font-size: 24px; line-height: 22px;">
          Сведения о полученном высшем образовании -
          {{ dialogs.item.id ? 'Редактирование информации' : 'Добавление информации' }}
        </v-toolbar-title>
        <v-toolbar-items color="white">
          <v-icon
            style="align-self: center"
            size="24"
            icon="mdi mdi-window-close"
            color="#0F4C81"
            @click="closeDialogExpertsEducation"
          >
          </v-icon>
        </v-toolbar-items>
      </v-toolbar>
      <v-divider class="margin24"></v-divider>
      <ExpertsEducationForm
        v-model="dialogs.item"
        @my-event="dialogs.item.id ? updateExpertsEducation(dialogs.item) : storeExpertsEducation(dialogs.item)"
        @close-dial="closeDialogExpertsEducation"
      ></ExpertsEducationForm>
    </v-card>
  </v-dialog-1000-scrollable-persistent>
</template>

<script setup>
import ExpertsEducationForm from "./ExpertsEducationForm.vue";
</script>

<style scoped>

</style>