function reveal(word){
    return { type: 'REVEAL', word: word};
}

module.exports = {
    reveal: reveal
};