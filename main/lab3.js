

const checkDogs =function(dogsJulia,dogsKate){
const dogsJuliaCorected=dogsJulia.slice();
dogsJuliaCorected.splice(0);
dogsJuliaCorected.splice(-2);
//dogsJulia.slice(1,3);
const dogs=dogsJuliaCorected.concat(dogsKate);
console.log(dogs);

dogs.forEach(function(dog,i){
    if(dog>=3){
        console.log('dog number ${i+1} is an adult, end is ${dog} years old');
    }else{
        console.log('dog number ${i+1} is still a puppy');
    }
});

//console.log(dogsJuliaCorected);
}
checkDogs([3,5,2,12,7],[4,1,15,8,3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//lab3.3
const calcAverageHumanAge=function (ages) {
const humanAges=ages.map(age=>(age<=2 ? 2 * age : 16 + age*4));
   const adults=humanAges.filter(age=>age>=18);
   console,log(humanAges);
   console.log(adults);
   const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length, 0
);
   return average;
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1,avg2);