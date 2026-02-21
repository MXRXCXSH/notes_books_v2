export function saveTask(task) {
  const taskArr = getTasks() || [];
  taskArr.push(task);
  localStorage.setItem('TASKS', JSON.stringify(taskArr));
}
export function getTasks() {
  return JSON.parse(localStorage.getItem('TASKS'));
}
export default { saveTask, getTasks };
