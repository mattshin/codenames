function reduceActions(state = {}, action) {
    switch (action.type) {
        case 'REVEAL':
            var word = action.word;
            state[word].revealed = true;
            return state;
        default:
            return state;
    }
}

module.exports = reduceActions;