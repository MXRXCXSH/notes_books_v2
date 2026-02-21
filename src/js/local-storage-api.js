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

function saveTheme(theme) {
  localStorage.setItem('THEME', theme);
}
function getTheme() {
  return localStorage.getItem('THEME');
}

export default {
  saveTask,
  getTasks,
  initTasks,
  deleteTask,
  saveTheme,
  getTheme,
};
