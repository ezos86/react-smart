const counter = {
    increment: () => {
        return {
            type: 'INCREMENT'
        };
    },
    decrement: () => {
        return {
            type: 'DECREMENT'
        };
    },
    reset: () => {
        return {
            type: 'RESET'
        };
    }
};

export default counter;
