import { renderMarkupList } from './render-tasks';

function saveTask(task) {
  const taskArr = getTasks() || [];
  taskArr.push(task);
  localStorage.setItem('TASKS', JSON.stringify(taskArr));
}
function getTasks() {
  return JSON.parse(localStorage.getItem('TASKS'));
}
function initTasks() {
  const listTask = getTasks() || [];
  renderMarkupList(listTask);
  console.log('🚀 ~ initTasks ~ listTask:', listTask);
}
function deleteTask(id) {
  const listTask = getTasks() || [];
  const updatedList = listTask.filter(task => task.id !== id);
  localStorage.setItem('TASKS', JSON.stringify(updatedList));
}
export default { saveTask, getTasks, initTasks, deleteTask };
