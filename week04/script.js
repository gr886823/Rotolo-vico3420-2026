// CREATE & DEFINE variables
let name = "Gianna Rotolo";
let age = 20;
let major = "Communications";

// DISPLAY variables
document.getElementById("name").textContent = "Name: " + name;
document.getElementById("age").textContent = "Age: " + age;
document.getElementById("major").textContent = "Major: " + major;

// UPDATE variables
age = age + 1;
major = "Media Studies";

// DISPLAY updated variables
document.getElementById("updatedAge").textContent = "Updated Age: " + age;
document.getElementById("updatedMajor").textContent = "Updated Major: " + major;

// CONCATENATE variables
let sentence = name + " is studying " + major + ".";
document.getElementById("sentence").textContent = sentence;

// MATH operation
let classes = 5;
let semesters = 2;
let totalClasses = classes * semesters;

document.getElementById("math").textContent =
    "Total classes per year: " + totalClasses;
