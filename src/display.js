import {gui, createTaskCard} from './gui'
import { taskCard } from './taskCard';
import { toDoList } from './todolist';
import {popUp} from './popUpBehavior'

export let display = {
    renderList(source,dest){
        
        if(Array.isArray(source)){
        source.forEach(el => {
            
            let newEl = taskCard.cardContent(el)
            dest.appendChild(newEl);
        })
    } else{
        let newEl = taskCard.cardContent(source)
        
        dest.appendChild(newEl);
    }
    assignCardEvents();
    
    },
    clearDisplay(dest){
        dest.textContent = ""
    }
    

    
}
export let assignCardEvents = () =>{


    gui.card.cards = document.querySelectorAll('.taskCard')
    gui.card.completeState = document.querySelectorAll('.completeState')
    gui.card.completeBtn = document.querySelectorAll('.markComplete')
    gui.card.deleteBtn = document.querySelectorAll('.deleteBtn')
    
    
    gui.card.cards.forEach(el=>{
        el.addEventListener('dblclick',function(){
            
            popUp.toggle();
            
            popUp.renderPopUp(toDoList.list[this.dataset.index])
            display.clearDisplay(gui.window.list)
        })
    })
    
    gui.card.completeBtn.forEach(el=>{                  //Assigns incomplete tasks a complete btn
        el.addEventListener('click',function(){
            
            toDoList.markItemComplete(el.dataset.index)
             this.parentNode.classList.toggle('completed');   
             this.parentNode.textContent = "Finished!"
             
            
        })
    })
    gui.card.deleteBtn.forEach(el=>{
        el.addEventListener('click',function(){
            
            toDoList.removeItem(el.dataset.index)
        })
    })
}