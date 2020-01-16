import { toDoEvent } from "./todo";
import { toDoList } from "./todolist";
import {search} from './searchList';
import {display} from './display';
import { local } from "./localStorageGetSet";

export let gui = {
   
        sub:{
            taskNameIn: document.querySelector('#taskInput'),
            dueDateIn: document.querySelector('#dueIn'),
            // timeIn: document.querySelector('#timeIn'),
            projectIn: document.querySelector('#projectIn'),
            projectInList: document.querySelector('#projectName'),
            submitBtn: document.querySelector('#submitBtn'),
            populatePjList(source){
                this.projectInList.innerHTML=""                                 //creates list of options from toDoList.projects array
                source.forEach(el=>{
                    let newEl = document.createElement('option')
                    newEl.value = el;
                    this.projectInList.appendChild(newEl)
                })
            }
            
        },
        search:{
            projectNameIn: document.querySelector('#projectNameSearch'),
            taskSearchIn: document.querySelector('#taskSearchIn'),
            taskSearchBtn: document.querySelector('#nameSearchBtn'),
            projectList: document.querySelector('.projectNav'),
            refreshPjList(){
                    gui.search.projectList.textContent="";
                    toDoList.projects.forEach(el=>{
                        if(el!=="" && el!==" "){
                            let newEl = document.createElement('span')
                            newEl.classList.add('pjOption');
                            newEl.dataset.pj = el;
                            newEl.textContent = el;
                            newEl.addEventListener("click",()=>{
                                gui.popup.popup.classList.remove('popUpVisible')
                                
                                let results = search(toDoList.list,'project',el)
                                if(el==='all'){results = toDoList.list}
                                display.clearDisplay(gui.window.list)
                                display.renderList(results,gui.window.list)
                            })
                            this.projectList.appendChild(newEl);
                        }
                })
            },
           
            

        },
        window:{
            display: document.querySelector('#displayWindow'),
            list: document.querySelector('#listDisplay') //A UL that the list is rendered in
            
        },
        card:{
            cards: document.querySelectorAll('.taskCard'),
            completeState: document.querySelectorAll('.completeState'),
            completeBtn: document.querySelectorAll('.markComplete')
        },
        popup:{
            popup: document.querySelector('.editPopup')
        },
        footControls:{
            clear: document.querySelector('#clearAll')
        },
        initialize(){
            local.init();
            display.clearDisplay(gui.window.list)
            display.renderList(toDoList.list,gui.window.list)
            gui.sub.populatePjList(toDoList.projects);
            gui.search.refreshPjList();
        },
     clearer: function(obj){

    for(let i in obj){
        obj[i].value = ""
    }
}
}

/////////////////the immediately invoked behavior of the GUI
export let behavior = (function (){
    gui.sub.submitBtn.addEventListener('click', ()=>{//////////Submission click
      let newEvent = toDoEvent(gui.sub.taskNameIn.value, gui.sub.projectIn.value);
      console.log(gui.sub.dueDateIn.value)
      if(gui.sub.dueDateIn.value){newEvent.setDue(gui.sub.dueDateIn.value)}
     
      
      toDoList.addProject(gui.sub.projectIn.value)
      newEvent.addToList(toDoList.list);
      
      gui.sub.populatePjList(toDoList.projects);
      gui.clearer(gui.sub)
      display.clearDisplay(gui.window.list)
      display.renderList(toDoList.list,gui.window.list)
      gui.search.refreshPjList();
      
    })
    gui.search.taskSearchBtn.addEventListener('click',()=>{//////////task search
        
        let results = search(toDoList.list, 'task',gui.search.taskSearchIn.value)
        display.clearDisplay(gui.window.list)
        display.renderList(results,gui.window.list);
        clearer(gui.search)
    })
    gui.footControls.clear.addEventListener('click',toDoList.clearAll);



    gui.search.refreshPjList();
    // gui.search.projectNameIn.addEventListener('change',()=>{
    //     let results;
    //     display.clearDisplay(gui.window.list)
    //     if(gui.search.projectNameIn.value ==='all'){
    //         console.log('hello')
    //         results = toDoList.list;
    //     }
    //     else{
    //     results = search(toDoList.list, 'project', gui.search.projectNameIn.value);
    //     }
    //     display.renderList(results,gui.window.list);
    //      })
})();

