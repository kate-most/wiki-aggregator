const articlesReducer = (state = {
    entries: [],
    isLoading: false
}, action) => {
    switch (action.type) {
        case 'RECEIVE_ARTICLES':
            return {
                ...state,
                entries: action.payload
            };
        default:
            return state;
    }
};

export default articlesReducer;
