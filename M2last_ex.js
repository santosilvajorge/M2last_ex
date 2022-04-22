/* JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
 */

    //21
    let x = 'John'
    let y = 'Doe'
    console.log(`${x} <> ${y}`)

    //22
    let object = {
        name: 'John',
        surname: 'Dallas',
        email: 'dallas_john22@gmail.com'
    }
    console.log(object.email)

    //23
    delete object["email"]
    console.log(object)

    //24
    let myArray = ['Arnald', 'Bob', 'Clara', 'David', 'Elvis', 'Fred', 'George', 'Hector', 'Isabel', 'John']
    console.log(myArray)
    
    //25
    for (i=0; i < myArray.length; i++){
        console.log(myArray[i])
    }

    //26
    var randomArray = []

    for (i=0; i<100; i++) {
        randomArray.push(parseInt(Math.random()*100))
    }
    console.log(randomArray)

    //27
    let sortArray = randomArray.sort()
    console.log(sortArray)