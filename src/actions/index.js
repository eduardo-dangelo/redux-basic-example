export function selectItem(item) {
  return {
    type: 'ITEM_SELECTED',
    payload: item
  }
}

export function selectForm(form) {
  return {
    type: 'FORM_SELECTED',
    payload: form
  }
}
