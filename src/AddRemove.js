/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import {
  itemsArr, tasksListShow, getItems, saveLocalStorage,
} from './activeList.js';

const removeAll = document.querySelector('.removeAll');

const removeItem = function (item) {
  const removeIndex = itemsArr.indexOf(item);
  itemsArr.splice(removeIndex, 1);
};

const updateItem = function (currentItemIndex, value) {
  const newItem = itemsArr[currentItemIndex];
  newItem.description = value;
  itemsArr.splice(currentItemIndex, 1, newItem);
  saveLocalStorage(itemsArr);
};

// Reload the Page
function reload() {
  // eslint-disable-next-line no-func-assign
  reload = location.reload();
}
// Event listeners for reload.
removeAll.addEventListener('click', reload, false);

export {
  reload, removeAll, removeItem, updateItem,
};
