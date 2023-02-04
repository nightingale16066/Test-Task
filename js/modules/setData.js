import { tableData, tableBody, btnGroup, table } from "./const.js"

// Создание ряда таблицы
export const createTableRow = (rowData) => {
  const tableRow = document.createElement('tr')
  tableRow.dataset.id = rowData.id
  tableRow.insertAdjacentHTML('beforeend', `
    <td width="15%" class="row-name">${rowData.name}</td>
    <td width="15%" class="row-lastName">${rowData.lastName}</td>
    <td width="65%" class="row-about">
      <div class="about">${rowData.about}</div>
    </td>
    <td width="5%" class="row-eyeColor">
      <div class="color-cell" style='background: ${rowData.eyeColor}'></div>
    </td>
  `)
  return tableRow
}

// Заполнение таблицы в соответствии с выбранной страницей
export const fillTable = (index) => {
  for (let i = index * 10; i < (index * 10) + 10; i++) {
    tableBody.append(createTableRow(tableData.data[i]))
  }
} 

// Отрисовка колонок в соответствии с установленными настройками видимости
export const updateColumnVisibility = () => {
  const columnsVisibility = [...btnGroup.querySelectorAll(`.setting-btn`)].map(btn => btn.dataset.vis)
  columnsVisibility.forEach((visibility, index) => {
    [...table.rows].forEach(row => {
      row.cells[index].style.display = +visibility === 1 ? 'table-cell' : 'none'
    })
  })
}

// Начальное заполнение таблицы
export const getData = () => {
  tableData.data = tableData.data.map(item => ({...item, name: item.name.firstName, lastName: item.name.lastName}))

  fillTable(0)
}

getData()
