import {display} from './display';
import { formatDistance,format,parseISO,formatDistanceToNow,formatRelative,set, parse } from 'date-fns'
import {toDoEvent} from './todo';
import {search} from './searchList';
import {gui,behavior} from './gui';


import {toDoList} from './todolist';






import {taskCard} from './taskCard';

import {renderPopUp} from './popUpBehavior'

import {popUpBox} from './popUpContent'

import {popUp} from './popUpBehavior'

import {local} from './localStorageGetSet'



////init test zone///






/////DUMMY EVENT BEFORE DATA PERSIST
// let newEvent = toDoEvent('Complete Project', 'ProjectName');
      
//     newEvent.setDue('2020-01-14')
//       newEvent.addNotes('example notes')
//        newEvent.addToList(toDoList.list);
    

    // renderPopUp(newEvent);   
////////////////////////

////////////////////////////////////////

/////////////////////////////////////////
gui.sub.populatePjList(toDoList.projects)

// let event = function(task,type){
//     let dateAssigned = Date();
//     let dateDue;
//     let setDue = function(date){
//        this.dateDue = date;  
//     }
    
//    return {task, type, dateAssigned, setDue}
// }

//moved to gui.js
// let btn = document.querySelector('button')
// let taskInput = document.querySelector('input.taskInput')
// let dateInput = document.querySelector('.dateInput')
// let typeInput = document.querySelector('select[name="taskType"]')
// let typeSearchBtn = document.querySelector('button.search')
// let typeQuery = document.querySelector('select[name="searchTypeIn"]')
// let nameQuery = document.querySelector('input.nameSearchQuery')
// let nameSearchBtn = document.querySelector('button#nameSearchBtn')
// let clearBtn = document.querySelector('.clear');
// let displayWindow = document.querySelector('.listDisplay');
////Add task

// btn.addEventListener('click', ()=>{
//     let newEvent = toDoEvent(taskInput.value,typeInput.value)
//     if(dateInput.value){newEvent.setDue(parseISO(dateInput.value))}
//     newEvent.addToList(toDoList.list);
//     console.log(toDoList.list);
// })
///search Task
// typeSearchBtn.addEventListener('click',()=>search(toDoList.list,'type',typeQuery.value));
// typeSearchBtn.addEventListener('click',()=>display.clearDisplay(displayWindow))
// typeSearchBtn.addEventListener('click',()=>display.renderList(search(toDoList.list,'type',typeQuery.value),displayWindow));
// ////////////search name
// nameSearchBtn.addEventListener('click',e=> search(toDoList.list,'task',nameQuery.value));
// ///clear test
// clearBtn.addEventListener('click',toDoList.clearAll);
// ///////////////////////DOM render


////////////////////searchType (now in the searchList.js)
// function filterType(searchTerm){
//     let results = [];
//     results =tasks.filter(task => task.type === searchTerm);
//     console.log(results);
//     return results;
    
// }
// ///////searchTask
// function filterTask(searchTerm){
//     let results = [];
//     console.log(tasks)
//     console.log(tasks[0])
//     results = tasks.filter(el => el.task === searchTerm);
//     console.log(results)
//     return results;
// }

//init render:




gui.initialize();

