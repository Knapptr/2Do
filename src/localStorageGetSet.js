import { toDoList } from "./todolist";
import { parseISO } from "date-fns";

export let local = {
    localParser(arrayOfTasks){
        arrayOfTasks.forEach(el=>{
           if(el.dateDue){
               el.dateDue = parseISO(el.dateDue)
           }
           
        })
    },
    init(){
        if(!Array.isArray(JSON.parse(localStorage.getItem('list')))){
            localStorage.setItem('list','[]');
        } else{console.log('File in storage')}
        let parsedList = JSON.parse(localStorage.getItem('list'))
        this.localParser(parsedList);
        toDoList.list = parsedList;
        /////////////project list
        toDoList.initProjects();
        localStorage.setItem('projects',JSON.stringify(toDoList.projects))
        /////creates first list of projects
        
    
    },
    save(source, projectsource){
         let stringListArray = JSON.stringify(source);
         localStorage.setItem('list',stringListArray)
         
         let stringProjectArray = JSON.stringify(projectsource)
         localStorage.setItem('projects',stringProjectArray)
    },
    list: JSON.parse(localStorage.getItem('list')),
    


    
}