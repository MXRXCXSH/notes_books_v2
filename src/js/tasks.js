import { renderMarkupTask } from './render-tasks';
import localStorageApi from './local-storage-api';

export function handleAddTask(evt) {
  evt.preventDefault();
  const { taskName, taskDescription } = evt.target.elements;

  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('incorect data. please fill all fields');
    return;
  }

  const task = {
    name: taskName.value.trim(),
    dscr: taskDescription.value.trim(),
  };
  console.log('🚀 ~ handleAddTask ~ task:', task);
  renderMarkupTask(task);
  localStorageApi.saveTask(task);
  evt.target.reset();
}
