import { pagination, tableBody, tableData } from "./const.js"
import { fillTable, updateColumnVisibility } from "./setData.js"

// Создание кнопок пагинации
const createPaginationButton = (btnIndex) => {
  const btn = document.createElement('div')

  if (btnIndex === 0) {
    btn.classList.add('active-page')
  }
  btn.classList.add('pag-btn')
  btn.dataset.page = btnIndex
  btn.textContent = `${btnIndex + 1}`

  return btn
}

// Создание панели пагинации
const createPagination= () => {
  const itemsAmount = tableData.data.length / 10
  
  for (let i = 0; i < itemsAmount; i++) {
    pagination.append(createPaginationButton(i))
  }
}

// Обработка выбора страницы просмотра
const handlePaginationClick = () => {
  pagination.addEventListener('click', ({target}) => {
    if (target.closest('.pag-btn')) {
      const curBtn = target.closest('.pag-btn')
      const curBtnId = curBtn.dataset.page;

      [...pagination.children].forEach(btn => btn.classList.remove('active-page'))
      curBtn.classList.add('active-page')

      tableBody.innerHTML = ''

      fillTable(curBtnId)
      updateColumnVisibility()
    }
  })
}

createPagination()
handlePaginationClick()