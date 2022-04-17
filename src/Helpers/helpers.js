export const getItem = (arr, id) => {
    for(let item of arr){
        if(item.id === id) return item
    }
}

