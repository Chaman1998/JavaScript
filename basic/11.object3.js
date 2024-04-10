const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "anybody"
}
// course.courseInstructor

const {courseInstructor} = course   //1st try this
console.log(courseInstructor);  //now call this 'coursename'
const {coursename} = course 
console.log(coursename);

const {courseInstructor:instructor} = course    //Try this and change 'courseInstructor' to 'instructor' here
console.log(instructor);    //now call the new 'instructor'

// const navbar = ({company}) => {

// }
// navbar(company = "chaman")   //object destructure

//=======================JSON format========================
// {
//     "name": "chaman",
//     "coursename": "js",
//     "price": "free"
// }

//=============API format============
// [
//     {},
//     {},
//     {}
// ]

