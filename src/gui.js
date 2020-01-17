import { toDoEvent } from "./todo";
import { toDoList } from "./todolist";
import {search,lastSearch} from './searchList';
import {display} from './display';
import { local } from "./localStorageGetSet";

export let gui = {
        mainView:document.querySelectorAll('.mainView'),

       mainViewToggle(){
        gui.mainView.forEach(el=>{
            console.log('excecuting')
            console.log(gui.mainView)
            el.classList.toggle('mainView--hidden')
        })
       },
   
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
              
                console.log(lastSearch[2]);
                    gui.search.projectList.textContent="";
                    let pjOptionButtons = []
                    toDoList.projects.forEach(el=>{
                        if(el!=="" && el!==" "){
                        
                            let newEl = document.createElement('span')
                            newEl.classList.add('pjOption');
                            
                            newEl.dataset.pj = el;
                            newEl.textContent = el;
                            pjOptionButtons.push(newEl)
                            newEl.addEventListener("click",()=>{
                                pjOptionButtons.forEach(el=>el.classList.remove('currentSelection'))
                                newEl.classList.add('currentSelection')
                                
                                let results = search(toDoList.list,'project',el)
                                
                                display.clearDisplay(gui.window.list)
                                display.renderList(results,gui.window.list)
                            })
                            this.projectList.appendChild(newEl);
                        }
                })
               
                document.querySelector(`[data-pj=${lastSearch[2]}`).classList.add('currentSelection');
            },
           
            

        },
        window:{
            display: document.querySelector('#displayWindow'),
            list: document.querySelector('#listDisplay'), //A UL that the list is rendered in
            
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
            document.querySelector("[data-pj='all']").classList.add('currentSelection')
        },
     clearer(obj){

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
      display.renderList(search(...lastSearch),gui.window.list)
      gui.search.refreshPjList();
      
    })
    gui.search.taskSearchBtn.addEventListener('click',()=>{//////////task search
        
        let results = search(toDoList.list, 'task',gui.search.taskSearchIn.value)
        display.clearDisplay(gui.window.list)
        display.renderList(results,gui.window.list);
        clearer(gui.search)
    })
    gui.footControls.clear.addEventListener('click',toDoList.clearAll);



   


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

