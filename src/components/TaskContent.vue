<template>
  <div id="content" class="">
    <div id="header" class="row d-flex justify-content-center">
      <div class="col-1 border"></div>
      <div
        class="col-5 border border-2 border-black border-bottom-0 text-center d-flex align-items-center justify-content-center"
      >
        Urgent
      </div>
      <div
        class="col-5 border border-2 border-black border-bottom-0 text-center d-flex align-items-center justify-content-center"
      >
        Unurgent
      </div>
    </div>
    <div id="important" class="row d-flex justify-content-center">
      <div
        class="col-1 border border-2 border-black border-end-0 d-flex align-items-center justify-content-center"
      >
        <p class="rotate-text">Important</p>
      </div>
      <div class="col-5 border border-2 border-black text-center">
        <TaskControl :tasks="tasks.important.urgent" />
      </div>
      <div class="col-5 border border-2 border-black text-center">
        <TaskControl :tasks="tasks.important.unurgent" />
      </div>
    </div>
    <div id="unimportant" class="row d-flex justify-content-center">
      <div
        class="col-1 border border-2 border-black border-end-0 d-flex align-items-center justify-content-center"
      >
        <p class="rotate-text">Unimportant</p>
      </div>
      <div class="col-5 border border-2 border-black text-center">
        <TaskControl :tasks="tasks.unimportant.urgent" />
      </div>
      <div class="col-5 border border-2 border-black text-center">
        <TaskControl :tasks="tasks.unimportant.unurgent" />
      </div>
    </div>
    ../stores/tasks
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '../stores/tasks'
import TaskControl from './TaskControl.vue'

const tasksStore = useTasksStore()
const tasks = tasksStore.tasks
console.log(tasks)
</script>

<style scoped lang="scss">
#header {
  height: 50px;
  font-weight: bold;
  font-size: large;
}
#important {
  min-height: 220px;
  .rotate-text {
    transform: rotate(-90deg);
    font-weight: bold;
    font-size: large;
  }
}
#unimportant {
  min-height: 220px;
  .rotate-text {
    transform: rotate(-90deg);
    font-weight: bold;
    font-size: large;
  }
}
</style>
