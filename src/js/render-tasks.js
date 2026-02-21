import { createMarkupTask } from './markup-tasks';
import refs from './refs';

export function renderMarkupTask(task) {
  refs.taskList.insertAdjacentHTML('beforeend', createMarkupTask(task));
}
