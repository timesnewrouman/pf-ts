import {ref, Ref} from "vue";
import Header from "@components/interface/TableForGM";

const levels: Ref<number[]> = ref([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

const tableHeaders: Ref<Header[]> = ref([
  {title: 'type', key: 'type', sortable: false},
  {title: 'extreme', key: 'extreme', sortable: false},
  {title: 'high', key: 'high', sortable: false},
  {title: 'moderate', key: 'moderate', sortable: false},
  {title: 'low', key: 'low', sortable: false},
  {title: 'terrible', key: 'terrible', sortable: false},
]);

export {
  levels,
  tableHeaders
}