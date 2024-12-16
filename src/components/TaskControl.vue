<template>
  <div v-for="(el, index) in tasks" class="mt-2 d-flex justify-content-center align-items-center">
    <input v-if="!el.isEditing" type="checkbox" v-model="el.done" class="me-2" />
    <span v-if="!el.isEditing" :class="[el.done === true ? 'text-decoration-line-through' : '', el.color]"
      >{{ index + 1 }}. {{ el.task }}</span
    >

    <input v-if="el.isEditing" type="text" v-model="el.task" class="form-control" />

    <button class="btn btn-warning ms-3 me-2" @click="editTask(el)">{{ el.isEditing === true ? 'Save' : 'Edit' }}</button>
    <button v-if="!el.isEditing" class="btn btn-danger" @click="deleteTask(index)">Delete</button>

  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const { tasks } = defineProps<{ tasks: Array<{ id: number, task: string, done: boolean, color: string, isEditing: boolean }> }>()

const deleteTask = (index: number) => {
    tasks.splice(index, 1);
}

console.log(tasks);

const editTask = (el: {isEditing: boolean}) => {
    el.isEditing = !el.isEditing;
}


</script>

<style scoped lang="scss"></style>
