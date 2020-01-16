import {parse} from 'date-fns'
import { local } from './localStorageGetSet';
import { toDoList } from './todolist';
//todoDefinition
export let toDoEvent = function(task,project){
    let dataID;
    let complete = false;
    let dateAssigned = Date();
    let dateDue;
    let setDue = function(date){
        this.dateDue = parse(date,'yyyy-MM-dd',new Date())
        console.log('date set as:')
        console.log(this.dateDue)
    }
    let addToList = function(destination){
        this.dataID = destination.length
        destination.push(this)
        local.save(toDoList.list,toDoList.projects)
        
    }
    let addNotes = function(string){
        this.notes = string;
    }
    return {dataID,task,project, complete, dateAssigned,setDue,addToList,addNotes}
}