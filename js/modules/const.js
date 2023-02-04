import data from '../data.json' assert { type: "json" }

export const tableData = {data}
export const HeaderNames = ['name', 'lastName', 'about', 'eyeColor']

export const tableBody = document.querySelector('.table-body')
export const table = document.querySelector('.table')

export const form = document.querySelector('.form')
export const buttonGroup = document.querySelector('.button-group')


export const inputName = document.querySelector('input[name="name"]')
export const inputSurname = document.querySelector('input[name="surname"]')
export const inputDescription = document.querySelector('textarea[name="description"]')
export const inputEyeColor = document.querySelector('input[name="eyeColor"]')
export const inputPhone = document.querySelector('input[name="phone"]')

export const btnGroup = document.querySelector('.setting-btns')

export const pagination = document.querySelector('.pagination-wrapper')

