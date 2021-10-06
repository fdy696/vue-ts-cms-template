<template>
  <div class="home">
    home
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    onMounted(() => {
      console.log('home page...', process.env.VUE_APP_BASE_NAME)
    })
  }
})
</script>
