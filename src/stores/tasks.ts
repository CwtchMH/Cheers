import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

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

  // Hàm để lưu dữ liệu vào localStorage khi thay đổi
  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem('tasks', JSON.stringify(newTasks))
    },
    { deep: true },
  ) // { deep: true } để theo dõi thay đổi sâu trong đối tượng tasks

  return {
    tasks,
  }
})
