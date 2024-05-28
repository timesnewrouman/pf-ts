<template>
  <v-form @submit.prevent="send" ref="form" style="padding: 15px 15px 15px 15px">
    <!--    <div class="fields">-->
    <!--      <div style="display: block; width: 400px; margin-right: 20px">-->
    <v-row class="pa-0">
      <v-col style="max-width: 150px">
        <p>Год окончания<sup>*</sup></p>
        <v-autocomplete-compact-plain
          v-model="modelValue.year_end"
          class="text-field"
          style="max-height: 50px"
          :items="years"
          :rules="textRules"
          type="text"
        />
      </v-col>
      <v-col>
        <p>Наименование образовательной организации высшего образования<sup>*</sup></p>
        <v-text-field-compact-plain
          v-model="modelValue.org_name"
          class="text-field"
          :rules="textRules"
          type="text"
        >
        </v-text-field-compact-plain>
      </v-col>
    </v-row>
    <v-row class="pa-0">
      <v-col>
        <p>Серия<sup>*</sup></p>
        <v-text-field-compact-plain
          v-model="modelValue.series"
          class="text-field"
          :rules="textRules"
          type="text"
        />
      </v-col>
      <v-col>
        <p>Номер<sup>*</sup></p>
        <v-text-field-compact-plain
          v-model="modelValue.number"
          class="text-field"
          :rules="textRulesNumber"
          type="text"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>Направление подготовки или специальность<sup>*</sup></p>
        <v-text-field-compact-plain
          v-model="modelValue.spec"
          class="text-field"
          :rules="textRules"
          type="text"
        />
      </v-col>
      <v-col>
        <p>Квалификация<sup>*</sup></p>
        <v-text-field-compact-plain
          v-model="modelValue.qualification"
          class="text-field"
          :rules="textRules"
          type="text"
        />
      </v-col>
    </v-row>

    <div class="fields" style="margin-bottom: 0">
      <div style="display: block; width: 40%; margin-right: 20px">
        <p>Скан документа</p>
        <v-file-input-compact-plain
          :label="'Документ об образовании'"
          :accept="'.pdf'"
          clear-icon="fas fa-trash-can-outline"
          v-model="modelValue.scan_file_education"
          color="primary"
        />

      </div>
      <div style="display: block; width: 20%; margin-right: 20px">
        <br>
        <v-btn size="small" color="primary" v-if="modelValue.scan_education"
               @click="getExpertsEducationFile(modelValue.scan_education.id_expert, modelValue.scan_education.id_experts_education, modelValue.scan_education.url, modelValue.scan_education.ext)">
          Скачать
        </v-btn>
      </div>
    </div>
    <v-divider class="margin24"></v-divider>
    <br>
    <div style="display: flex; justify-content: flex-start; gap: 20px;">
      <v-btn color="primary" type="submit">Сохранить</v-btn>
    </div>
  </v-form>
</template>

<script setup>
import {ref, toRefs} from "vue";
// import {sprAcademicTitle, years} from "../../../composables/share/spr";
// import {getExpertFile} from "@composables/User/uploadExpertFile";
// import {getExpertsEducationFile} from "@composables/User/expertsEducation";
// import {isNumber, textRulesNumber, textRulesNumberWithoutZero} from "@composables/User/rules";

const emit = defineEmits(['myEvent', 'closeDial'])
const props = defineProps({modelValue: {}})
const form = ref(null)
const {modelValue} = toRefs(props);
const textRules = [v => !!v || 'Поле не должно оставаться пустым',];


const closeDial = () => {
  emit('closeDial')
}

const cleanForm = () => {
  for (const key of Object.keys(modelValue.value)) {
    modelValue.value[key] = null;
  }
}
// const validate = () => {
//   if (textRules) {
//     emit('myEvent')
//   }
// }

const send = async () => {
  const {valid} = await form.value.validate()
  if (valid) {

    emit('myEvent');
  }
}

</script>


<style lang="scss" scoped>
.fields {
  margin-bottom: 30px;
  position: relative;
  display: flex;
  vertical-align: middle !important;
}

.closeDial {
  min-width: 0 !important;
  padding: 0;
  color: rgb(15, 76, 129) !important;
}

.form__block {
  margin-bottom: 3px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #BABBBD;
}

.btn-red {
  border-color: #DE3931;
  color: #DE3931;
}

.btn-red:hover {
  background-color: #DE3931;
  color: #F1EEE6;
}

.btn-green {
  border-color: #13810F;
  color: #13810F;
}

.btn-green:hover {
  background: #0FA707;
  color: #F1EEE6;
}

.btn-grey {
  color: #BABBBD;
  border: 1px solid #BABBBD;
}

.btn-grey:hover {
  color: #FFFFFF;
  background-color: #BABBBD;
  border: 1px solid #BABBBD;
}

sup {
  color: red;
}

.v-col {
  padding: 8px;
}

:deep(.v-field__field) {
  max-height: 35px;
}

</style>
