export const weightedLottery = weights => {
    // keep track of the weights 
    // ['green', 'yellow', 'yellow', 'red', 'red', 'red',]
    let containerArray = [];

    Object.keys(weights).forEach(key => {
        for (let i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    })
    return containerArray[(Math.random() * containerArray.length | 0)];
}

export const weights = {
winning: 1,
losing: 100
}

const x = weightedLottery(weights);
weightedLottery(x);