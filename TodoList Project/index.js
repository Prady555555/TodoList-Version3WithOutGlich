var btn = document.querySelector("button");
btn.addEventListener('click',btnFunction);

var array =[];



function addAutomatic(){
  var variable = '';
  
  
  array.forEach(function(todo,index){
   
  
  var{name,dueDate}=todo;

  
  var html = `
  <div> ${name} </div>
  <div>${dueDate}</div>
 
  <button onClick="array.splice(${index}, 1);
  addAutomatic(); "
  class="btn-delete">Delete
  </button>
  `
  variable += html;
  console.log(html);
 
  });
document.querySelector('.div-class2').innerHTML= variable; 


// this is the first version of the todo list code we use here for loop instead of foreach.


  //   for(var i = 0 ; i <= array.length -1; i++){
//   var todo = array[i];
//   // var name = todo.name;
//   // var dueDate = todo.dueDate;
//   var{name,dueDate}=todo;

  
//   var html = `
//   <div> ${name} </div>
//   <div>${dueDate}</div>
 
//   <button onClick="array.splice(${i}, 1);
//   addAutomatic(); "
//   class="btn-delete">Delete
//   </button>
//   `
//   variable += html;
//   console.log(html);


// here we have made a mistake in previous code that we put the down document .querrySelector inside the the function so that we cannot remove the first todolist because its keeps looped so you have keep the down document outside of the function

// document.querySelector('.div-class2').innerHTML= variable; 
// }
}

function btnFunction(){
  var input = document.querySelector('.input-todo');
  var name = input.value;
  var input2 = document.querySelector('.date-input');
  var dueDate = input2.value;
   array.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
   });
  // console.log(array);
  input.value= "";
  input2.value= "";
 addAutomatic();
}