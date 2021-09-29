class Exercise {
    constructor(name){
        this.name = name;
        this.data = [];
    }
}

class Exercises {
    static exercises = [];
}

// Add Exercise 
/** 1) Get input from input add-exercise
 *  2) Create a new Exercise object
 *  3) Create a div with name of exercise
 *  4) push the div onto the list 
 *  5) push exercise onto select list
 */

function addExercise(event){
    event.preventDefault();
    // 1)
    let name = document.getElementById('add-exercise').value;
    // 2)
    let exercise = new Exercise(name);
    Exercises.exercises.push(exercise);
    // 3)
    let div = document.createElement('div');
    div.classList.add('exercise-list-item');
    div.innerHTML = name;
    // 4)
    let li = document.createElement('li');
    let list = document.querySelector('.exercise-list');
    list.appendChild(li);
    li.appendChild(div);
    // 5)
    let selector = document.getElementById('exercises');
    let option = document.createElement('option');
    option.innerHTML = name;
    selector.appendChild(option);
    // Clear value
    document.getElementById('add-exercise').value = '';
    
}

const addExerciseSubmit = document.getElementById('add-exercise-submit');
addExerciseSubmit.addEventListener('click', addExercise);

// Add data
/**
 * 1) Get the value from exercises selector
 * 2) Get value from weight-moved input
 * 3) Push of weight moved with current date/time to exercise object
 */
function addData(event) {
    event.preventDefault();
    // 1)
    let exercise = document.getElementById('exercises').value;
    // 2)
    let weightMoved = document.getElementById('weight-moved').value;
    // 3)
    let object = Exercises.exercises.find(ele => ele.name === exercise);
    object.data.push({x: new Date().toString(), y: weightMoved});
}

const addDataSubmit = document.getElementById('add-data-submit');
addDataSubmit.addEventListener('click', addData);


// Draw Chart 
/**
 * 1) Get value from exercises selector
 * 2) find the object in exercises
 * 3) put its data onto the chart
 */
function drawChart(event){
    // 1)
    let exercise = document.getElementById('exercises').value;
    // 2)
    let object = Exercises.exercises.find(ele => ele.name === exercise);
    // 3)
    const xAxis = object.data.x;
    const yAxis = object.data.y;

    
}