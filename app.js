/* function showRating (rating) {
    let ratings = ""
    for (let i = 0; i < 4; i++) {
        if (i === 3) {
            ratings = ratings + "*"
        }
        else {
            ratings = ratings + "* "
        }
    }
    return ratings
}

console.log(showRating(4)) */


/* function showRating (rating) {
    let ratings = ""
    for (let i = 0; i < Math.floor(rating); i++) {
        ratings += "*"
        if (i !== Math.floor(rating) -1) {
            ratings += " "
        }
     }
     if (!Number.isInteger(rating)) {
        ratings += " ."
     }
     return ratings
    }
    
console.log(showRating(5)) */

/* function sortToHigh(numbers) {
    return numbers.sort((a, b) => a - b) // es6 no {} invisible return
}
console.log(sortToHigh([20, 40, 10, 30, 50, 10]))
console.log(sortToHigh([5, 10, 0, -5]))
console.log(sortToHigh([3, 2, 1, 0])) */

/* function sortHighToLow(numbers) {
    return numbers.sort((a, b) => a.price - b.price) //ES6 no return no {}
}

console.log(
    sortHighToLow([
        { id: 1, price: 50},
        { id: 2, price: 0},
        { id: 3, price: 500},
    ])
    ) */

/*     async function postByUser(userId) {
        const promise = await fetch("https://jsonplaceholder.typicode.com/posts") // promise from fetch API backend
        const  result = await promise.json() // transfrom banck => front await!!
        const post = result.filter(element => element.userId === userId) // filter info by userId

        console.log(post)
    }
    
    postByUser(4) */

    async function firstSixIncomplete(notDo) {
        const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
        const result = await promise.json()
        const notCompleted = result.filter(element => !element.completed).slice(0, 6)

        console.log(notCompleted)
    }   

    firstSixIncomplete(false)
