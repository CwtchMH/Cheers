import { useTasksStore } from '../stores/tasks';

export const addTask = (task: string, priority: string, status: string) => {

    const tasksStore = useTasksStore();
    // Thêm task vào mảng tasks dựa vào priority và status

    if (priority === 'important' && status === 'urgent') {
        tasksStore.tasks.important.urgent.push({
          task: task,
          priority: priority,
          status: status,
          done: false,
          color: 'text-danger',
          isEditing: false
        });
      } else if (priority === 'important' && status === 'not-urgent') {
          tasksStore.tasks.important.unurgent.push({
          task: task,
          priority: priority,
          status: status,
          done: false,
          color: 'text-warning',
          isEditing: false
        });
      } else if (priority === 'non-important' && status === 'urgent') {
          tasksStore.tasks.unimportant.urgent.push({
          task: task,
          priority: priority,
          status: status,
          done: false,
          color: 'text-primary',
          isEditing: false
        });
      } else if (priority === 'non-important' && status === 'not-urgent') {
          tasksStore.tasks.unimportant.unurgent.push({
          task: task,
          priority: priority,
          status: status,
          done: false,
          color: 'text-success',
          isEditing: false
        });
      }
}