export const handleItemNavBar=(value)=>{
    const arr = JSON.parse(value[0]);
    JSON.stringify(arr, (key, value) => {
        if (typeof value === 'string') {
          return value.replace(/"/g, '');
        }
        return value;})
   
}