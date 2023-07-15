/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  console.log('All the employees who are developers using the map function');
  arr.map((element)=>{
    if(element.profession == 'developer')
    console.log(element.name);
  })

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  console.log('All the employees who are developers using the forEach function');
  arr.forEach((element)=>{
    if(element.profession == 'developer')
    console.log(element.name);
  })
}

function addData() {
  //Write your code here, just console.log
  let susan = {id: 4, name: "susan", age: "20", profession: "intern"};
  console.log('New Employee '+susan.name+' is added');
  arr.push(susan);
  arr.forEach((element)=>{
    console.log('ID: '+element.id+', Name: '+element.name+', Age: '+element.age+', Profession: '+element.profession);
  })
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((element)=>{
    return (element.profession != 'admin')
  })
  console.log('Admin was removed')
  arr.forEach((element)=>{
    console.log('ID: '+element.id+', Name: '+element.name+', Age: '+element.age+', Profession: '+element.profession);
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  //New array with 3 different employees
  let Executives = [
    { id: 1001, name: "Mike", age: "45", profession: "Manager" },
    { id: 1002, name: "Steve", age: "46", profession: "Head of Operations" },
    { id: 1003, name: "Ken", age: "54", profession: "Director" },
  ];

  //Concatenate arr and Executives

  let list = arr.concat(Executives);
  console.log('New Employee List')
  list.forEach((element)=>{
    console.log('ID: '+element.id+', Name: '+element.name+', Age: '+element.age+', Profession: '+element.profession);
  })
}
