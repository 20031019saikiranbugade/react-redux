const initState = {
    count: 0,
    valueStore: []
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 10,
            }
        case 'sub':
            return {
                ...state,
                count: state.count - 10,
            }
            break;
        case 'get_API_Value':
            return {
                ...state.valueStore,
                valueStore:state.valueStore+getValueAPI(),
            }
            break;


        default:
            return state;
            break;
    }
}


const getValueAPI = async () => {
    const result = await fetch('https://fakestoreapi.com/products/');
    const res = await result.json();
    console.log(res)
    return res;
}
export default reducer;