window.addEventListener('load', ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const enteredTextarea = document.querySelector("#new-task-textarea");
    const enteredStatus = document.querySelector("#status");
    const optionSelected = document.querySelector("#new-option");
    const list_el = document.querySelector("#tasks");


    //in this space of function we will someting which will prevent auto submit with page refresh
    form.addEventListener('submit',(e) =>{
        e.preventDefault();

        //also put a if condition to enter text to submit give a alert message else console "success"
        const task = input.value;
        const submittedTextArea = enteredTextarea.value;
        const submittedStatus = enteredStatus.value;
        const submittedOption = optionSelected.value;
       
     
     
     
     //input was defined on top
        // ! task means task ==""
        if (!task) {
            
            alert("Please fill out the project info!");
            return;
            //no input = return nothing will happen any further.
         }/* else {
            //console.log("Success");
         }*/
         


      const task_el = document.createElement('div');
      task_el.classList.add('task');
      //so this will be the outer div for where we are trying paste our task once clicked "add task"

      //now lets create a content div inside that outer div
      const task_content_el = document.createElement('div')
      task_content_el.classList.add('content')


      //now lets append this content div inside the outer div

      task_el.appendChild(task_content_el);

      //inside the content div we want to paste whatever the value of entered input (line 24) in the form 

     // task_content_el = task;


     // now lets put the outer dive inside the div of Headline 'TASK' in html
     // take this at bottom as it make more sens at the end 
      //list_el.appendChild(task_el)



      //now we have an <input element with class, type, value and attribute who will be a child of content container;
      const task_input_el = document.createElement("input");
      task_input_el.classList.add('task');
      task_input_el.type = "text";
      task_input_el.value = task;
      //meaning value will be whatever user entered as input see 'task' defined in line 24
      task_input_el.setAttribute("readonly","readonly");


      const task_textarea_el = document.createElement("textarea");
      task_textarea_el.classList.add('textarea');
      task_textarea_el.type = "text";
      task_textarea_el.value = submittedTextArea;
      //meaning value will be whatever user entered as input see 'textarea' 
      task_textarea_el.setAttribute("readonly","readonly");



      

      const task_status_el = document.createElement("select");
      task_status_el.classList.add('status');
     // task_status_el.type = "text";
      task_status_el.value = submittedStatus;
      //meaning value will be whatever user entered as input see 'select status' 
      task_status_el.setAttribute("readonly","readonly");


      const statusOption = document.createElement("option");
      //statusOption.value = enteredStatus.value.toLocaleLowerCase();
      statusOption.value = submittedOption;
      statusOption.text = submittedOption;
      statusOption.setAttribute("readonly","readonly");
    

      task_status_el.appendChild(statusOption);
    


      

      
      task_content_el.appendChild(task_input_el);
      task_content_el.appendChild(task_textarea_el);
      task_content_el.appendChild(task_status_el);

      

      //inside the outer-div(task_el) we also have a another div with delete and edit buttons who is a sibling of content div or a second child of outer div.

      const task_action_el = document.createElement('div');
      task_action_el.classList.add('actions');

      //inside this .actions div lets put buttons for edit and delete

      const task_edit_el = document.createElement('button');
      task_edit_el.classList.add('edit');
      task_edit_el.innerHTML = "Edit";

      const task_delete_el = document.createElement('button');
      task_delete_el.classList.add('delete');
      task_delete_el.innerHTML = "&cross;";



      //lets append the buttons to its parent .actions div
      task_action_el.appendChild(task_edit_el);
      task_action_el.appendChild(task_delete_el);

      //lets have task_el(outerdiv) claim/append his child in browser
      task_el.appendChild(task_action_el);
    
    
    
      // now lets put the outer dive inside the div of Headline 'TASK' in html
     
      list_el.appendChild(task_el)


      input.value = "";
      enteredTextarea.value = "";
      enteredStatus.value = "";
      optionSelected.value = "";

      
      //lets add a event listener which is with event click for Edit
    
      task_edit_el.addEventListener('click',()=>{

         //lets add a condition if the button says 'edit' then do something like editing else keep it as it is 
         if(task_edit_el.innerText.toLocaleLowerCase()=="edit"){
            task_input_el.removeAttribute("readonly");
            task_textarea_el.removeAttribute("readonly");
            task_status_el.removeAttribute("readonly");
            task_edit_el.innerText= "Save";
            task_input_el.focus();
            task_textarea_el.focus();

         }else {
            task_input_el.setAttribute("readonly","readonly");
            task_textarea_el.setAttribute("readonly","readonly");
            task_status_el.setAttribute("readonly","readonly");
            task_edit_el.innerText = "Edit";
         }

      })



      //lets add a event listener which is with event click for delete
      task_delete_el.addEventListener('click',()=>{
        list_el.removeChild(task_el);
      })



    //end of form Eventlistener
    })




//end bracket of entire window (page) EventListenter below
})