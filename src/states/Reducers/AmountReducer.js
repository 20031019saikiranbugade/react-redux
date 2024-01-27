const initState={
    count:0
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

        default:
            return state;
            break;
    }
}

export default reducer;