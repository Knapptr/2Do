import {gui} from './gui';
import {display} from './display';
import { toDoList } from './todolist';
import { popUpBox } from './popUpContent';
import {format, parse, parseISO} from 'date-fns'
import {toDoEvent} from './todo'
import {local} from './localStorageGetSet'


///use single task as source to render edit fields in popup





export let popUp ={

   
    
    toggle(){
        gui.popup.popup.classList.toggle('popUpVisible')
    },
    renderPopUp(source){
        
        popUpBox.options.innerHTML=""
        toDoList.projects.forEach(el=>{
            if(el!=="" && el!==" "){
            let newOption = document.createElement('option');
            newOption.textContent=el
            popUpBox.options.appendChild(newOption);
            
            }
        })
        let saver = function(){
            popUp.submitData(source,toDoList.list)
            reset();
            popUp.toggle();
        }
        let close = function(){
            popUp.toggle();
            display.clearDisplay(gui.window.list)
            display.renderList(toDoList.list,gui.window.list)
            reset();
        }
        let reset= function(){
            gui.clearer(popUpBox);
            popUpBox.closeBtn.removeEventListener('click',close)
            popUpBox.saveBtn.removeEventListener('click',saver)
        }
        reset();

        
        
        
        popUpBox.closeBtn.addEventListener('click',close)
       
        
        popUpBox.saveBtn.addEventListener('click',saver)
        
        popUpBox.taskName.value = source.task;
        
        if(source.dateDue){popUpBox.dueDate.value = (format(source.dateDue,'yyyy-MM-dd'))}
        popUpBox.projectSelector.value = source.project;
        
        if(source.notes){popUpBox.notesField.value = source.notes};
        
        if(source.complete){popUpBox.completeBox.checked = true}else{popUpBox.completeBox.checked = false}
        
        
    },
    submitData(source,dest){
        
        let replacementEvent = toDoEvent(popUpBox.taskName.value,popUpBox.projectSelector.value)
        if(popUpBox.dueDate.value){replacementEvent.setDue(popUpBox.dueDate.value)}
        replacementEvent.dataID = source.dataID
        if(popUpBox.notesField.value){replacementEvent.notes = popUpBox.notesField.value}
        replacementEvent.complete = popUpBox.completeBox.checked
        if(popUpBox.projectSelector.value){
            toDoList.addProject(popUpBox.projectSelector.value)
            gui.sub.populatePjList(toDoList.projects);
            gui.search.refreshPjList();
        }
        
        
        dest[source.dataID] = replacementEvent//find original element in array and replace w/ new
        display.clearDisplay(gui.window.list)
        display.renderList(toDoList.list,gui.window.list)
        local.save(toDoList.list)
        
    },
    

 
}   

