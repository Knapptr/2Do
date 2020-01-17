import { gui } from "./gui";
import { toDoList } from "./todolist";
////searches an array of objects (spec by location) and returns an array of objects whos 'prop' matches the 'term'
export let lastSearch = [toDoList.list,'task', "all"];

export let search = (location,prop,term)=>{
    
    console.log('location: '+location)
    console.log('prop: '+prop)
    console.log('term: ' +term)
    let results = [];
    results = location.filter(el=> el[prop] === term)
    if(term === "all"){results = toDoList.list}
    console.log(results);
    lastSearch = [toDoList.list, prop, term];
    
    
    
    
    return results;
}