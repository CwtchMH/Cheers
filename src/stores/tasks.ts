import { defineStore } from 'pinia'
import { nextTick, reactive, ref, watch } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const storeTasks = localStorage.getItem('tasks')
  const tasks = ref(
    storeTasks
      ? JSON.parse(storeTasks)
      : {
          important: {
            urgent: [],
            unurgent: [],
          },
          unimportant: {
            urgent: [],
            unurgent: [],
          },
        },
  )

  function deleteAllTasks() {
    tasks.value.important.urgent = []
    tasks.value.important.unurgent = []
    tasks.value.unimportant.urgent = []
    tasks.value.unimportant.unurgent = []
  }

  // Hàm để lưu dữ liệu vào localStorage khi thay đổi
  watch(
    tasks,
    (newTasks) => {
      console.log('watch tasks')
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      console.log('tasks.value', tasks.value)
    },
    { deep: true },
  ) // { deep: true } để theo dõi thay đổi sâu trong đối tượng tasks

  return {
    tasks,
    deleteAllTasks,
  }
})
