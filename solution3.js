const mongoose = require('mongoose');
// connect mongoose
mongoose.connect('mongodb://localhost/mongo-exercises');
//create a schema
const courseSchema = new mongoose.Schema({
name: String,
tags: [ String ],
isPublished: Boolean,
author: String,
date: Date,
price: Number
});
//create a model
Course = mongoose.model('Course', courseSchema);
//query the Course
async function getCourses(){
    return await Course
    //first method.find ({isPublished: true, tags: { $in: ['frontend', 'backend']}})
    .find ({isPublished: true})
.or ([{price: {$gte: 15}}, {name: /.*by.*/i} ])
    .sort({price: -1})
    .select({name: 1, author: 1, price: -1})
};
async function run(){
    const courses = await getCourses();
    console.log(courses);
};

run();