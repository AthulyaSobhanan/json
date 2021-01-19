var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  height: 25,
  weight: 6,
  catFriends: [
  {
  name: "bar",
  activities: ["be grumpy", "eat bread omblet"],
  weight: 8,
  furcolor: "white"
  }, 
  {
  name: "foo",
  activities: ["sleep", "pre-sleep naps"],
  weight: 3
  }
  ]
 }
 console.log(cat);

 console.log("Fluffy's height in cm is :", cat.height);
 console.log("Fluffy's weight in kg is:",  cat.weight);
 
 cat.name = "Fluffyy";
 console.log(cat.name);
 
 console.log(cat.catFriends[0].activities + "," + cat.catFriends[1].activities);
 console.log("Names of cat friends :", cat.catFriends[0].name + " and " + cat.catFriends[1].name);
 let totalweight = cat.catFriends[0].weight + cat.catFriends[1].weight;
 console.log("Total weight of Fluffyy's frinds is :", totalweight);


console.log(cat.activities.join());

for (let i in cat.catFriends)    
    console.log(cat.catFriends[i].activities.join());

cat.catFriends[0].activities.push("Play", "catch mouse");
cat.catFriends[1].activities.push("playing", "meow");


cat.catFriends[0].furcolor = "black";
console.log("bar's fur colour is:", cat.catFriends[0].furcolor);

-----------------------------------------------------------------------------------------------------------------------


var myCar = {
 make: "Bugatti",
 model: "Bugatti La Voiture Noire",
 year: 2019,
 accidents: [
 {
 date: "3/15/2019",
 damage_points: "5000",
 atFaultForAccident: true
 },
 {
 date: "7/4/2022",
 damage_points: "2200",
 atFaultForAccident: true
 },
 {
 date: "6/22/2021",
 damage_points: "7900",
 atFaultForAccident: true
 }
 ]
}

console.log(mycar);
let acci=mycar.accidents;


for (i=0;i<acci.length;i++)
{
 i.atFaultForAccident=false;
 console.log(i.date);


}
------------------------------------------------------------------------------------------------------------

 var obj = {name : "Rajanikanth", age : 33, hasPets : false};

 function printAllValues(obj) {
  return Object.values(obj);
 }
 console.log(printAllValues(obj));

-------------------------------------------------------------------------------------------------------------
var obj1 = {name : "RajiniKanth", age : 25, hasPets : true};
 function printAllKeys(obj) {
  return Object.keys(obj1);
 }
 console.log(printAllKeys(obj));

------------------------------------------------------------------------------------------------------------

 var employee = {"name": "ISRO", "age": 35, "role": "Scientist"};

function convertListToObject(obj) {
  return Object.entries(obj);
}
console.log(convertListToObject(employee));

------------------------------------------------------------------------------------------------------------
var arr = [“GUVI”, “I”, “am”, “Geek”];
var finalobject = transfromFirstAndLast(arr);
console.log(finalobject);

function transformFirstAndLast(arr) {
 
 var obj1 ={};
  obj1[arr[0]] = arr[arr.length-1];
  return(obj1);
  
}

--------------------------------------------------------------------------------------------------------------
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(arr) {
  var newObject1 = {};
  for (var i= 0; i< arr.length; i++){
    let key = arr[i][0];
    let value = arr[i][1];
    newObject1[key] = value;
  }
  return newObject1;
}
console.log(fromListToObject(arr));

--------------------------------------------------------------------------------------------------------------
var arrayList = [
  [
    ['firstName', 'Vasanth'],
    ['lastName', 'Raja'], 
    ['age', 24], 
    ['role', 'JSWizard']
  ], 
  [
    ['firstName', 'Sri'], 
    ['lastName', 'Devi'], 
    ['age', 28], 
    ['role', 'Coder']
  ]
];
function transformEmployeeData(arrayList) {
  var tranformEmployeeList = [];
  for (var i= 0; i< arrayList.length; i++){
    let newObject = {};	
    for (var j= 0; j< arrayList[i].length; j++){
      let key = arrayList[i][0];
      let value = arrayList[i][1];
      newObject[key] = value;	
    }
    tranformEmployeeList.push(newObject);
  }
  return tranformEmployeeList;
}
console.log(transformEmployeeData(arrayList));

-----------------------------------------------------------------------------------------------------------
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 
    if (JSON.stringify(expected) == JSON.stringify(actual))
        console.log("Passed");
    
    else
        console.log("FAILED", testName, "Expected", expected, ",but got", actual);
}

assertObjectsEqual(actual, expected, 'detects that two objects are equal');

----------------------------------------------------------------------------------------------------------------
var students = [
        
 {name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
 
 {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
 
 {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},  
 
 {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
 
 {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
 
 {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
 
 {name: 'Devdas',age: 56}
 
 ];

  function returnMinors(arr)
    {
      var newObj = [];
      for (var i = 0; i< arr.length; i++){
        if (arr[i].age < 20){
          newObj.push(arr[i]);
        }
      }
      return newObj;
    }
    console.log(returnMinors(students));

-------------------------------------------------------------------------------------------------------------
var securityQuestions = [
 {
 question: 'What was your first pet’s name?',
 expectedAnswer: 'FlufferNutter'
 },
 {
 question: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 question: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
]
function chksecurityQuestions(securityQuestions,question,answer) {

    for (i = 0; i < securityQuestions.length; i++)
    {
        if (securityQuestions[i].question == question) {
            if (securityQuestions[i].expectedAnswer == answer)
                return true;
        }

        else
            return false;
    }
 
}
var ques = 'What was your first pet’s name?';
var ans  =  'FlufferNutter';