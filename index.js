"use strict";
///////////////////////////////////////////////////////
// ********** QUESTION 1 STARTS HERE **********
////////////////////////////////////////////////////////
function InstagramPost(handle, content, imageLink, numViews, numLikes) {
  this.handle = handle;
  this.content = content;
  this.imageLink = imageLink;
  this.numViews = numViews;
  this.numLikes = numLikes;
}

///////////////////////////////////////////////////////
// ********** QUESTION 2 STARTS HERE **********
////////////////////////////////////////////////////////

const instaPostObj1 = new InstagramPost(
  "fooodNanny",
  "Food is Life, keep eating",
  "img1.jpg",
  20000,
  18000
);

console.log(instaPostObj1);
const instaPostObj2 = new InstagramPost(
  "@aprokoCorner",
  "He say, them say, na who say. A little gossip wont kill you, keep your ears glue to our channel",
  "img2.jpg",
  80000,
  70000
);
console.log(instaPostObj2);

///////////////////////////////////////////////////////
// ********** QUESTION 3 STARTS HERE **********
////////////////////////////////////////////////////////
// 3(a)
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

const musa = createPerson("Musa", 19, "Lekki - Lagos State - Nigeria");
console.log(musa);

// 3(b)
function createJambScores(eng, gov, lit, crk) {
  return {
    eng: eng,
    gov: gov,
    lit: lit,
    crk: crk,
  };
}

const musaJambScore = createJambScores(70, 85, 82, 94);

musa.jambScore = musaJambScore;
console.log(musa);
console.log(musa.jambScore.gov);

///////////////////////////////////////////////////////
// ********** QUESTION 4 STARTS HERE **********
////////////////////////////////////////////////////////

//The following are the different ways of cloning an object;
// 1. Object.assign()
// 2. The spread (...) operator
// 3. JSON.parse(JASON.stringify())

// example 1 (Object.assign())
let person = {
  firstname: "Rachel",
  midleName: "Karekonde",
  lastName: "Opuba",
  age: 18,
  isMarried: true,
  numKids: 2,
};

let person1 = Object.assign({}, person);
console.log(person, person1);

// example 2 (spread(...) operator)
let person2 = { ...person };
console.log(person2);

// example 3 JSON.parse(JASON.stringify())
let person3 = JSON.parse(JSON.stringify(person));
console.log(person3);

///////////////////////////////////////////////////////
// ********** QUESTION 5 STARTS HERE **********
////////////////////////////////////////////////////////
const presidentialCandidates = {
  ACC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (let party in presidentialCandidates) {
  console.log(
    `${presidentialCandidates[party]} is the presidential candidate of ${party}`
  );
}
///////////////////////////////////////////////////////
// ********** QUESTION 5 ENDS HERE **********
////////////////////////////////////////////////////////
