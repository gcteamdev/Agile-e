window.addEventListener('load', ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const enteredTextarea = document.querySelector("#new-task-textarea");
    const dateInput = document.querySelector("#task-due");
    const fileInput = document.querySelector("#file");
    const list_el = document.querySelector("#tasks");


    //in this space of function we will someting which will prevent auto submit with page refresh
    form.addEventListener('submit',(e) =>{
        e.preventDefault();

        //also put a if condition to enter text to submit give a alert message else console "success"
        const task = input.value;
        const submittedTextArea = enteredTextarea.value;
        const submittedDate = dateInput.value;
       
       
     
     
     
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

      



      //now we have an <input element with class, type, value and attribute who will be a child of content container;
      const task_input_el = document.createElement("input");
      task_input_el.classList.add('text');
      task_input_el.type = "text";
      task_input_el.value = task;
      //meaning value will be whatever user entered as input see 'task' defined in line 24
      task_input_el.setAttribute("readonly","readonly");

      
      //textarea
      const task_textarea_el = document.createElement("textarea");
      task_textarea_el.classList.add('textarea');
      task_textarea_el.type = "text";
      task_textarea_el.value = submittedTextArea;
      //meaning value will be whatever user entered as input see 'textarea' 
      task_textarea_el.setAttribute("readonly","readonly");



      //status of project <select an option

      const task_status_el = document.createElement('select');
      task_status_el.name = 'drop1';
      task_status_el.id = "Select1";

      const status = ["In-Progress","Project-Completed","Postpone",];


      const options = status.map(pickStatus => {
         const value = pickStatus.toLowerCase();
         return `<option value = "${value}"> ${pickStatus}</option>`;
      });
      task_status_el.innerHTML = options;





      // due date
      const task_dueDate_el = document.createElement("input");
      task_dueDate_el.classList.add('due-by');
      task_dueDate_el.type = "date";
      task_dueDate_el.value = submittedDate;
      task_dueDate_el.setAttribute("readonly","readonly");
    
      //for level 
       const task_attachlevel_el = document.createTextNode("Attach Mocups or files");
   

    
      //attach file

      const task_attachment_el = document.createElement("input");
      task_attachment_el.classList.add("fileEntered");
      task_attachment_el.type = "file";
      task_attachment_el.setAttribute("readonly","readonly");
     
      
      
      //all the  direct childs of task_content get appended
      
      task_content_el.appendChild(task_input_el);
      task_content_el.appendChild(task_textarea_el);
      task_content_el.appendChild(task_status_el);
      task_content_el.appendChild(task_dueDate_el);
      task_content_el.appendChild(task_attachment_el);
      task_content_el.appendChild(task_attachlevel_el);


      

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
    
    
    
      // #FINALLY, now lets put the outer dive inside the div of Headline 'TASK' in html
     
      list_el.appendChild(task_el)






      //if you keep the value to empty string once you add one task, the main task card defult to clean.
      input.value = "";
      enteredTextarea.value = "";
      dateInput.value = "";
    
      

      
      //lets add a event listener which is with event click for Edit
    
      task_edit_el.addEventListener('click',()=>{

         //lets add a condition if the button says 'edit' then do something like editing else keep it as it is 
         if(task_edit_el.innerText.toLocaleLowerCase()=="edit"){
            task_input_el.removeAttribute("readonly");
            task_textarea_el.removeAttribute("readonly");
            task_status_el.removeAttribute("readonly");
            task_dueDate_el.removeAttribute("readonly");
            task_edit_el.innerText = "Save";
            task_input_el.focus();
            task_textarea_el.focus();
            task_status_el.focus();
            task_dueDate_el.focus();


         }else {
            task_input_el.setAttribute("readonly","readonly");
            task_textarea_el.setAttribute("readonly","readonly");
            task_status_el.setAttribute("readonly","readonly");
            task_dueDate_el.setAttribute("readonly","readonly");

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