<template>
  <div class="login">
    <login-panel class="login-panel"></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel.vue'
export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}

.login-panel {
  margin: auto;
  padding-bottom: 100px;
}
</style>
