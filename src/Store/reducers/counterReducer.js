const INITIAL_STATE = 0;

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state = ++state;
        case 'DECREMENT':
            return state = --state;
        default:
            return state;
    }
}

export { counterReducer };