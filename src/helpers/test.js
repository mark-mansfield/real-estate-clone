// paginator
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 145, 15, 16, 17];
let paginatorIndex = 0;
let paginatorPageSize = 4;

const determinePageCount = () => {
  let pageCount = arr.length / paginatorPageSize;
  pageCount % 1 != 0 ? (pageCount = parseInt(pageCount) + 1) : null;
  return pageCount;
};

let pageCount = determinePageCount();


const paginatePropertyList = action => {
  if (action === '+') {
    if (paginatorIndex < pageCount) {
      paginatorIndex += 1;
      console.log(`page: ${paginatorIndex}`);
    }
  }
  if (action === '-') {
    if (paginatorIndex >= 1) {
      paginatorIndex--;
      console.log(`page: ${paginatorIndex}`);
    }
  }
};

const incrementButton = document.querySelector('#increment-button');
incrementButton.addEventListener('click', () => {
  paginatePropertyList('+');
});

const decrementButton = document.querySelector('#decrement-button');
decrementButton.addEventListener('click', () => {
  paginatePropertyList('-');
});
// console.log(determinePageCount());
