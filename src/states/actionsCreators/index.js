export const addValue = (data) => {
    return(dispatch)=>{
        dispatch({
            type: 'add',
            payload: data
        })
    }
}


export const subValue = (data) => {
    return(dispatch)=>{
        dispatch({
            type: 'sub',
            payload: data
        })
    }
}
