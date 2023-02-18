// Below id will function as our index number for the operation.
let id = 0;

// below gets the event element using the addEventListner for when the click happens
document.getElementById('add').addEventListener('click', () => {
// The following creates the varaible we will use
let createdDate = new Date();
// below gets our 'list' for the task
let table = document.getElementById('list');
// below creates the row
let row = table.insertRow(1);
// sets the attributes for ID, and Task #
row.setAttribute('id', `task-${id}`);
// creates the task portion of the table
row.insertCell(0).innerHTML = document.getElementById('new-task').value;
// creates the date created portion of the table
row.insertCell(1).innerHTML = `${createdDate.getFullYear()} - ${createdDate.getMonth() + 1} - ${createdDate.getDate()}`;
// creates the start date portion of the table
row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
// creates the end date portion of the table
row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
// inserts our action button in the 5th column of the table
let actions = row.insertCell(4);
// this part appends the child by calling the createDeleteButton function and feeding it the id incremented x1
// it also will recieve a return of btn
actions.appendChild(createDeleteButton(id++));
// then we reset the button.
document.getElementById('new-task').value = ' ';
});

// This is the function that creates the Delete button, and it contains
// the code that deletes the element and returns the button. 
function createDeleteButton(id) {
    // declares the btn variable which creates the button element
    let btn = document.createElement('button');
    // declares the classes which will apply to the button when created
    btn.className = 'btn btn-primary' ;
    // assigns an id to the button
    btn.id = id;
    // applies the text inside the tag for the button
    btn.innerHTML = 'Delete';
    // is the function for what to do when clicked. 
    btn.onclick = () => {
        // consoles out the text of what task id we are deleting when clicked. 
        console.log(`Deleting row with id: task-${id}`);
        // declares a value for what element we want to delete -->
        let elementToDelete = document.getElementById(`task-${id}`)
        // Then deletes it from the parent node. 
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    // retuns btn to create the button again. 
    return btn;
}
