// using map() in ES6

const birds = [
    {ID: "DV8", Name: "Eurasian Collared-Dove", Type: "Dove" },
    {ID: "HK12", Name: "Bald Eagle", Type: "Hawk" },
    {ID: "HK6", Name: "Cooper's Hawk", Type: "Hawk" },
    {ID: "SP11", Name: "Bell's Sparrow", Type: "Sparrow" },
    {ID: "DV2", Name: "Mourning Dove", Type: "Dove" }
];
// The Way 1: Use map() to manipulate array in ES6
// Use map() to create a new map calling a function for array element.
console.log(birds.map(takeId));
function takeId(values) {
    return values.ID;
}

// The way 2: Use lambda Expression to work with array.
birds.forEach(bird => console.log(bird.Name));

// The way 3: Use for..of loop to browser birds array.
for (const bird of birds) {
    console.log(bird.Type);
}
