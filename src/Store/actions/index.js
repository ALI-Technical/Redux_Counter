
const incNum = (value) => {
    return {
        type: 'INCREMENT',
        payload: value
    }
}

const decNum = (value) => {
    return {
        type: 'DECREMENT',
        payload: value
    }
}

export {incNum, decNum};