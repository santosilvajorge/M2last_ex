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
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one
         with the higher sum of values
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
        randomArray.push(parseInt(Math.random()*10000))
    }
    console.log(randomArray)

    //27
    let max = randomArray[0];
    for (let i = 0; i < randomArray.length; i++) {
      if (randomArray[i] > max) {
        max = randomArray[i];
      }
    }
      console.log(max)

      let min = randomArray[0];
      for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] < min) {
          min = randomArray[i];
        }
      }
        console.log(min)

    
    //28
    let masterArray = []
    let firstArray = []
    let secondArray = []
    let thirdArray = []

    for (i=0; i<10; i++) {
        firstArray.push(parseInt(10*Math.random()))
        secondArray.push(parseInt(10*Math.random()))
        thirdArray.push(parseInt(10*Math.random()))
    }

    masterArray.push(firstArray) 
    masterArray.push(secondArray)
    masterArray.push(thirdArray)
    console.log(masterArray)


    //29
   const arrayA = [1, 3, 5, 7, 9]
   const arrayB = [2, 4, 6, 8]

   if (arrayA.length > arrayB.length) {
       console.log(arrayA)
   } else {
       console.log(arrayB)
   }

   //30
   var sumA = 0
   var sumB = 0
   for (i=0; i<arrayA.length; i++){
       sumA += arrayA[i]
   }
   for (i=0; i<arrayB.length; i++){
       sumB += arrayB[i]
   }
   
   if (sumA > sumB) {
       console.log(arrayA)
   } else {
       console.log(arrayB)
   }
   console.log(` Sum of Array A = ${sumA}, Sum of Array B = ${sumB}, since A higher than B, we will have as output the Array A`)