<template>
    <div class="text-h1 primary">SPACE MISSIONS LIST</div>
    <hr />
  <div style="height: 500px; width: 100%">
    <ag-grid-vue
      style="width: 100%; height: 100%"
      :theme="themeQuartz"
      :columnDefs="colDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
    >
    </ag-grid-vue>
  </div>
  <div class="row bg-primary">
    <div class="col-xs-12 col-sm-6">예시 입력폼</div>
    <div class="col-2">컬럼영역1</div>
    <div class="col-auto">컬럼역역2</div>
  </div>
  <div class="row">
    <div class="col-6">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste provident exercitationem, illum ad nam quo. Obcaecati, optio dignissimos quos culpa, praesentium adipisci quasi qui amet aperiam quod iste quas natus?</p>
    </div>
    <input type="text" class="col-6" />
    <button class="col-6 btn bg-secondary">Save</button>
    <button class="col-6 btn btn-danger">Cancel</button>
  </div>
</template>
<script setup>
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import { AgGridVue } from 'ag-grid-vue3'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { themeQuartz } from 'ag-grid-community';

// 기본 컬럼 설정
const defaultColDef = ref({
  sortable: true,
  filter: true,
  resizable: true,
  flex: 1
})

const rowData = ref([])

const colDefs = ref([
  { field: 'mission', headerName: '미션' },
  { field: 'company', headerName: '회사' },
  { field: 'location', headerName: '위치' },
  { field: 'date', headerName: '날짜' },
  { field: 'successful', headerName: '성공 여부' },
  { field: 'rocket', headerName: '로켓' }
])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/missions')
    rowData.value = response.data
    console.log('데이터 로드됨:', response.data)
    console.log(response)
  } catch (error) {
    console.error('데이터 로드 실패:', error)
  }
})
</script>
<style>

</style>
