var name = "Rahma"

console.log(name)
console.log(typeof (name))


var x = 7.5

console.log(x)

console.log(typeof(x))


var bool = true

console.log(bool)

console.log(typeof(bool))


var x = [3,9.5,10,55,33]

console.log(x)

console.log(x[4])

console.log(x[2])

console.log(typeof(x))


var user = { name:"Rania", age : 2, city : "Megrine"}

console.log(user.name)
console.log(user.age)

console.log(user)

console.log(typeof(user))

console.log(Object.keys(user))

console.log(Object.values(user))

console.log(Object.entries(user))

var a = 5
var b = 2

console.log(a+b)
console.log(a*b)
console.log(a-b)
console.log(a/b)

console.log(a)

a = 9

console.log(a)

a = a + 1

console.log(a)

a++

console.log(a)

a--

console.log(a)

a = a -1

console.log(a)
a = a ** 2
console.log(a)


var a = 6

var b = 2

console.log(a%b)

var a = 5
var b = 2
var c = "5"

console.log(a == b)
console.log(a == c)
console.log(a === c)

console.log(a != c)
console.log(a !== c)

var a = 5
var b = 2
var c = "5"

console.log(a>b)
console.log(a<b)
console.log(a<=c)
console.log(a>=b)


var a = 4
var b = 9
var c = 4

console.log(a >c && a<b)
console.log(a == c && a<b)

console.log(a== c || a>b)
console.log(a>c || a>b)

var age = 90


if(age < 18){
  console.log("Child")
}else if(age<60){
  console.log("Kahl")
}else{
  console.log("Cheyeb")
}

var A = 3

if(A<10){
  console.log('Nchalah 3am jey')
}else{
  console.log('Mabrouk')
}

var t = [7, 9, 10]

// console.log(t[3])

// console.log(t)

for(var i = 0; i<t.length; i++){
  console.log(t[i])
}


var compteur = 0
while (compteur < 10) {
  console.log('Rahma')
  compteur++
}

var compteur = 0
do {
    console.log('Yesser')
    compteur++
} while (compteur < 10);