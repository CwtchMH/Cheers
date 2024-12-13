<template>
  <div id="todoapp" class="">
    <h1 id="main-title" class="text-center">To Do App Personalized</h1>
    <Clock />
    <div id="main-div" class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <TaskInput />
      <hr />
      <TaskContent />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import Clock from './components/Clock.vue';
  import TaskInput from './components/TaskInput.vue';
  import TaskContent from './components/TaskContent.vue';
</script>

<style lang="scss" scoped>
#todoapp {
  height: 100%;
  width: 100%;
  background-color: white;
  #main-title {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  #main-div {
    height: 70%;
    width: 80%;
    background-color: #f5f5f5;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 0;
  }
}
</style>
