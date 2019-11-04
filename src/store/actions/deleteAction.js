// Action Creator
export const deleteItem = (id) => {
  console.log("inside deleteAction")
  console.log("id: ", id)

  // Action (type & payload)
  return {
    type: 'DELETE_ITEM',
    payload: id
  }
}

