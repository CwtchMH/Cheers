<template>
  <div id="input" class="d-flex justify-content-between">
    <div id="input-content" class="">
      <input type="text" v-model="task" placeholder="New task for new life" class="ps-3" />
    </div>
    <div id="input-category-priority" class="d-flex flex-column text-center">
      <label for="priority">Priority:</label>
      <select id="priority" v-model="priority">
        <option value="" selected disabled>Select an option</option>
        <option value="important">Important</option>
        <option value="non-important">Unimportant</option>
      </select>
    </div>
    <div id="input-category-status" class="d-flex flex-column text-center">
      <label for="status">Status:</label>
      <select id="status" v-model="status">
        <option value="" selected disabled>Select an option</option>
        <option value="urgent">Urgent</option>
        <option value="not-urgent">Unurgent</option>
      </select>
    </div>
    <button class="btn btn-success" @click="handleAddTask">Add a new task</button>
    <button class="btn btn-danger" @click="handleDeleteTask">Delete all tasks</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '../stores/tasks'
import { addTask } from '../composable/AddTask'

const task = ref('')
const priority = ref('')
const status = ref('')
const tasksStore = useTasksStore()

const handleAddTask = () => {
  addTask(task.value, priority.value, status.value) // Truyền giá trị của task, priority, status
  task.value = '' // Reset lại các giá trị
  priority.value = ''
  status.value = ''
}

const handleDeleteTask = () => {
  tasksStore.deleteAllTasks()
}
</script>

<style scoped lang="scss">
#input {
  width: 100%;
  #input-content {
    width: 50%;
    input {
      width: 100%;
      height: 50px;
      border-radius: 10px;
    }
  }
}
</style>
