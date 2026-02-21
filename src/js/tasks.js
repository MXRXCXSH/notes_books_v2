import { renderMarkupTask } from './render-tasks';
import localStorageApi from './local-storage-api';
import { nanoid } from 'nanoid';

export function handleAddTask(evt) {
  evt.preventDefault();
  const { taskName, taskDescription } = evt.target.elements;

  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('incorect data. please fill all fields');
    return;
  }

  const task = {
    id: nanoid(),
    name: taskName.value.trim(),
    dscr: taskDescription.value.trim(),
  };
  console.log('🚀 ~ handleAddTask ~ task:', task);
  renderMarkupTask(task);
  localStorageApi.saveTask(task);
  evt.target.reset();
}

export function handleDeleteTask(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  const taskElement = evt.target.closest('li');
  const taskElementId = taskElement.dataset.id;
  console.log('🚀 ~ handleDeleteTask ~ taskId:', taskElementId);
  taskElement.remove();
  localStorageApi.deleteTask(taskElementId);
}
