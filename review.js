let people = [
    { name: "John", age: 30, profession: "Engineer", salary: 55000 },
    { name: "Sarah", age: 24, profession: "Doctor", salary: 72000 },
    { name: "Mike", age: 41, profession: "Teacher", salary: 40000 },
    { name: "Jessica", age: 29, profession: "Lawyer", salary: 80000 },
    { name: "Paul", age: 35, profession: "Nurse", salary: 52000 },
    { name: "Laura", age: 33, profession: "Engineer", salary: 61000 },
    { name: "James", age: 28, profession: "Teacher", salary: 45000 },
    { name: "David", age: 46, profession: "Doctor", salary: 85000 },
    { name: "Emma", age: 31, profession: "Lawyer", salary: 78000 },
    { name: "Daniel", age: 38, profession: "Engineer", salary: 63000 },
    { name: "Sophia", age: 26, profession: "Nurse", salary: 49000 },
    { name: "George", age: 44, profession: "Doctor", salary: 90000 },
    { name: "Anna", age: 27, profession: "Engineer", salary: 58000 },
    { name: "Oliver", age: 32, profession: "Teacher", salary: 47000 },
    { name: "Rebecca", age: 39, profession: "Lawyer", salary: 82000 },
    { name: "Henry", age: 34, profession: "Nurse", salary: 53000 },
    { name: "Sophie", age: 25, profession: "Doctor", salary: 74000 },
    { name: "Mark", age: 37, profession: "Engineer", salary: 62000 },
    { name: "Claire", age: 40, profession: "Teacher", salary: 46000 },
    { name: "Samuel", age: 45, profession: "Lawyer", salary: 83000 },
    { name: "Tom", age: 30, profession: "Engineer", salary: 57000 },
    { name: "Lucy", age: 24, profession: "Doctor", salary: 76000 },
    { name: "Steven", age: 42, profession: "Teacher", salary: 41000 },
    { name: "Megan", age: 29, profession: "Lawyer", salary: 81000 },
    { name: "Chris", age: 36, profession: "Nurse", salary: 54000 },
    { name: "Liam", age: 33, profession: "Engineer", salary: 62000 },
    { name: "Jake", age: 28, profession: "Teacher", salary: 48000 },
    { name: "Martha", age: 47, profession: "Doctor", salary: 89000 },
    { name: "Ella", age: 31, profession: "Lawyer", salary: 79000 },
    { name: "Jason", age: 38, profession: "Engineer", salary: 64000 },
    { name: "Isabella", age: 26, profession: "Nurse", salary: 51000 },
    { name: "Ethan", age: 44, profession: "Doctor", salary: 92000 },
    { name: "Alice", age: 27, profession: "Engineer", salary: 60000 },
    { name: "Oscar", age: 32, profession: "Teacher", salary: 49000 },
    { name: "Ruth", age: 40, profession: "Lawyer", salary: 85000 },
    { name: "Leon", age: 35, profession: "Nurse", salary: 53000 },
    { name: "Emily", age: 25, profession: "Doctor", salary: 75000 },
    { name: "Max", age: 39, profession: "Engineer", salary: 63000 },
    { name: "Nina", age: 41, profession: "Teacher", salary: 42000 },
    { name: "Nathan", age: 45, profession: "Lawyer", salary: 84000 },
    { name: "Hannah", age: 31, profession: "Nurse", salary: 52000 },
    { name: "Louis", age: 27, profession: "Engineer", salary: 61000 },
    { name: "Zoe", age: 24, profession: "Doctor", salary: 77000 },
    { name: "Isaac", age: 34, profession: "Teacher", salary: 47000 },
    { name: "Eleanor", age: 43, profession: "Lawyer", salary: 81000 },
    { name: "Vincent", age: 40, profession: "Nurse", salary: 55000 },
    { name: "Chloe", age: 25, profession: "Engineer", salary: 59000 },
    { name: "Ben", age: 36, profession: "Doctor", salary: 87000 },
    { name: "Freya", age: 29, profession: "Lawyer", salary: 82000 },
    { name: "Adam", age: 37, profession: "Nurse", salary: 56000 },
    { name: "Grace", age: 30, profession: "Engineer", salary: 62000 },
    { name: "Evan", age: 48, profession: "Doctor", salary: 95000 },
    { name: "Nicole", age: 28, profession: "Lawyer", salary: 80000 },
    { name: "Jack", age: 32, profession: "Teacher", salary: 46000 },
    { name: "Victoria", age: 34, profession: "Engineer", salary: 63000 },
    { name: "Connor", age: 39, profession: "Nurse", salary: 57000 },
    { name: "Lily", age: 29, profession: "Doctor", salary: 78000 },
    { name: "Ryan", age: 31, profession: "Lawyer", salary: 82000 },
    { name: "Aaron", age: 42, profession: "Teacher", salary: 43000 },
    { name: "Beth", age: 35, profession: "Nurse", salary: 58000 },
    { name: "Peter", age: 44, profession: "Engineer", salary: 64000 },
    { name: "Maria", age: 25, profession: "Doctor", salary: 74000 },
    { name: "Jonathan", age: 33, profession: "Lawyer", salary: 83000 },
    { name: "Charles", age: 36, profession: "Teacher", salary: 44000 },
    { name: "Ruby", age: 40, profession: "Engineer", salary: 65000 },
    { name: "Sebastian", age: 43, profession: "Nurse", salary: 55000 },
    { name: "Isabel", age: 26, profession: "Doctor", salary: 77000 },
    { name: "Lucas", age: 29, profession: "Lawyer", salary: 86000 },
    { name: "Molly", age: 37, profession: "Teacher", salary: 46000 },
    { name: "Tommy", age: 34, profession: "Nurse", salary: 60000 },
    { name: "Grace", age: 28, profession: "Engineer", salary: 61000 },
    { name: "Aiden", age: 49, profession: "Doctor", salary: 92000 },
    { name: "Fiona", age: 31, profession: "Lawyer", salary: 81000 },
    { name: "Elliot", age: 38, profession: "Teacher", salary: 43000 },
    { name: "Sadie", age: 27, profession: "Nurse", salary: 49000 },
    { name: "Jacob", age: 30, profession: "Engineer", salary: 60000 },
    { name: "Daisy", age: 41, profession: "Doctor", salary: 85000 },
    { name: "Amelia", age: 29, profession: "Lawyer", salary: 84000 },
    { name: "George", age: 35, profession: "Teacher", salary: 45000 },
    { name: "Riley", age: 43, profession: "Engineer", salary: 66000 },
    { name: "Erin", age: 25, profession: "Nurse", salary: 51000 },
    { name: "Joshua", age: 34, profession: "Doctor", salary: 78000 },
    { name: "Florence", age: 27, profession: "Lawyer", salary: 82000 },
    { name: "Harper", age: 37, profession: "Teacher", salary: 47000 },
    { name: "Jordan", age: 44, profession: "Engineer", salary: 64000 },
    { name: "Lila", age: 26, profession: "Doctor", salary: 77000 },
    { name: "Theo", age: 30, profession: "Lawyer", salary: 81000 }
];

// Write a function to return a list of engineers who are above 30 years of age.
function listOfEng(arr)
{
//     let newArr=[];
//   for(var index in arr)
//   {
//     if(arr[index].age>30)
//     {
//         newArr.push(arr[index].name);
//     }
//   }
  let newArr=arr.filter((value,index,arr)=>value.age>30 && value.profession==='Engineer');
  let ab=newArr.map(newArr=>newArr.name);
  return ab;
}
console.log(listOfEng(people));

function groupProfession(arr)
{
    
    let obj={}
    for(let p in arr)
    {

        let pro=arr[p].profession;
        if(!obj[pro])
        {
            obj[pro]={};
        }
        obj[pro]=arr[p];
    }
    return obj;
}

function averagesalary(arr)
{
    let obj={};
    for(let p in arr)
    {
        let pro=arr[p].profession;
        if(!obj[pro])
        {
            obj[pro]={};
        }
        let sum=arr[p].salary;
        obj[pro]+=sum;
    }
}
console.log(averagesalary(people));


// console.log(groupProfession(people));



  