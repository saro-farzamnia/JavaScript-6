// Quiz
const fullStack = [["HTML","CSS","JS","REACT"],["Node","Express","Mongodb"]];
// const frontEnd=fullStack[0];
// const backEnd=fullStack[1];
// console.log(frontEnd);
// console.log(backEnd);
const [frontEnd,backEnd]=fullStack;
console.log(frontEnd,backEnd);


const myData = [
    {
      identity: {
        name: "Jamal",
        lastName: "Shamsi",
        age: 35,
        city: "Boukan",
      },
    },
    {
      skills: ["Js", "React.js", "Next.js"],
    },
];
const [data1,data2]=myData;
console.log(data1,data2);
const {identity:{name,lastName,age,city}}=data1;
console.log(name,lastName,age,city);
const {skills:[javascript,react,next]}=data2;
console.log(javascript,react,next);