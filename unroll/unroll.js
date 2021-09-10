function unroll(squareArray) {
const arr = []
while(squareArray.length){
    arr.push(
        ...squareArray.shift(),
        ...squareArray.map(a => a.pop()),
        ...(squareArray.pop() || []).reverse(),
        ...squareArray.map(a => a.shift()).reverse()
    )
}
}

module.exports = unroll;
