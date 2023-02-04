import {
  tableData,
  tableBody,
  inputName,
  inputSurname,
  inputDescription,
  inputEyeColor,
  form,
  buttonGroup,
  inputPhone,
} from "./const.js"

let itemId = 0;

// Заполнение формы данными выбранного ряда
export const handleRowSelection = () => {
  tableBody.addEventListener('click', (e) => {
    const selectedRow = e.target.closest('tr')
    itemId = selectedRow.dataset.id

    const rowData = tableData.data.find(i => i.id === itemId)

    form.classList.add('form-active')
    inputName.value = rowData.name
    inputSurname.value = rowData.lastName
    inputDescription.value = rowData.about
    inputEyeColor.value = rowData.eyeColor
    inputPhone.value = rowData.phone
  })
}

// Обновить значение клетки в таблице
const updateCellData = (rowToChange, cellClass, dataToInsert) => {
  const cellToChange = rowToChange.querySelector(`.${cellClass}`)
  if (cellToChange.className === 'row-eyeColor') {
    cellToChange.querySelector('.color-cell').style.background = dataToInsert
    return
  }
  if (cellToChange.className === 'row-about') {
    cellToChange.querySelector('.about').textContent = dataToInsert
    return
  }
  cellToChange.textContent = dataToInsert
}

// Обновить содержимое выбранного ряда
const updateTableRow = (updatedData) => {
  const rowToChange = document.querySelector(`[data-id='${itemId}']`)
  const rowCellClasses =
    [...rowToChange.querySelectorAll('td')].map(i => i.className)

  rowCellClasses.forEach(cellClass => {
    const fiedlName = cellClass.substring(4)
    updateCellData(rowToChange, cellClass, updatedData[fiedlName])
  })
}

// Обработать нажатие кнопок в форме
export const handleButtonClick = () => {
  buttonGroup.addEventListener('click', (e) => {
    e.preventDefault()
    const target = e.target

    if (target.closest('.decline-btn')) {
      form.classList.remove('form-active')
    }

    if (target.closest('.confirm-btn')) {
      const formData = new FormData(form)
      const id = tableData.data.findIndex(i => i.id === itemId)

      const updatedData = {
        name: formData.get('name'),
        lastName: formData.get('surname'),
        about: formData.get('description'),
        eyeColor: formData.get('eyeColor'),
        phone: formData.get('phone')
      }

      tableData.data[id] = {...tableData.data[id], ...updatedData}
      updateTableRow(updatedData)

      form.classList.remove('form-active')
    }
  })
}

handleRowSelection()
handleButtonClick()
