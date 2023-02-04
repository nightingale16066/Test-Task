import { table, btnGroup } from "./const.js"

// Изменение состояния видимости столбца
const changeRowVisibility = (rowNumber, visibility, clickedBtn) => {
  [...table.rows].forEach(row => {
    row.cells[rowNumber].style.display = visibility === 1 ? 'none' : 'table-cell'
  })

  clickedBtn.dataset.vis = visibility === 1 ? 0 : 1
  clickedBtn.textContent = visibility === 1 ? 'Показать' : 'Скрыть'
}

// Обработка нажатия кнопок для установки видимости
export const handleBtnClick = () => {
  btnGroup.addEventListener('click', ({target}) => {
    if (target.closest('.setting-btn')) {
      const clickedBtn = target.closest('.setting-btn')
      const rowNumber = clickedBtn.dataset.rowNumber
      const visibility = +clickedBtn.dataset.vis
      changeRowVisibility(rowNumber, visibility, clickedBtn)
    }
  })
}

handleBtnClick()
