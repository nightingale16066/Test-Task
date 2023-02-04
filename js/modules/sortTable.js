import { tableBody, table, tableData, HeaderNames } from './const.js'
import { fillTable, updateColumnVisibility } from './setData.js'

// Сортировка данных в соответствии с выбранной колонкой
const sortData = (index, changeDirection) => {
  const sortField = HeaderNames[index]
  tableBody.innerHTML = ''
  tableData.data.sort((a, b) => {
    const tr1 = a[sortField]
    const tr2 = b[sortField]
    return changeDirection === 'ascend' ? tr1.localeCompare(tr2) : tr2.localeCompare(tr1)
  })

  const currentPage = document.querySelector('.active-page').dataset.page
  fillTable(currentPage)
}

// Обработка сортировки выбранного столбца
export const handleTableSort = () => {
  let currentIndex = null
  let changeDirection = 'ascend'
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      changeDirection = cellIndex === currentIndex ? changeDirection === 'ascend' ? 'descend' : 'ascend' : 'ascend'
      currentIndex = cellIndex

      sortData(cellIndex, changeDirection)
      updateColumnVisibility()
    });
  }
}

handleTableSort()