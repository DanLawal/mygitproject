const mongoose = require('mongoose');
// connect mongoose
mongoose.connect('mongodb://localhost/mongo-exercises');
//create a Schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

//create a model
const Course = mongoose.model('Course', courseSchema);
//query the course
async function getCourses() {
    return await Course
    .find({isPublished: true, tags: ('backend')})
    .sort({name: 1})
    .select({name: 1, author: 1})
};

async function run() {
    const courses = await getCourses();
    console.log(courses);
};

run();