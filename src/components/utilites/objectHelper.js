
export const updateObjectInArray = (items, itemID, objPropName, newPropsObj)=> {

return  items.map(u => {
  if (u[objPropName] === itemID) {
    return {...u, ...newPropsObj}
  }
  return u;
})
};