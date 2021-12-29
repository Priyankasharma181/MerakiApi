const fs = require("fs")
let course = fs.readFileSync("course.json")
let Course = JSON.parse(course)
// console.log(Course);
module.exports=Course