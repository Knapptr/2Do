
import { local } from "./localStorageGetSet";
import { display } from "./display";
import { gui } from "./gui";

const initProjectArray = ['all']

export let toDoList = {
    list: [],
    
    projects:['all'],
    clearAll(){
        toDoList.list = [];
        toDoList.projects = initProjectArray.slice();
        console.log(toDoList.projects)
        local.save(toDoList.list,toDoList.projects)
        display.clearDisplay(gui.window.list);
        
        
        
        
    },
    removeItem(index){
    toDoList.list.splice(index,1);
    if(toDoList.list !== []){toDoList.list.forEach(el =>{
        el.dataID = toDoList.list.indexOf(el)
    })}
    console.log(toDoList.projects)
    toDoList.projects = initProjectArray.slice()
    toDoList.initProjects();
    local.save(toDoList.list,toDoList.projects)
    display.clearDisplay(gui.window.list)
    display.renderList(toDoList.list,gui.window.list)
    gui.initialize();

    },
    markItemComplete(index){
        toDoList.list[index].complete = true;
    },
    
    addProject(pjInput){
        if(pjInput!=="" && pjInput !== " "){
        if(toDoList.projects.some(el=>el===pjInput)){
            console.log('pjExists')
        } else{
            toDoList.projects.push(pjInput);
            
        }
    }
    },
    initProjects(){
        
        console.log('INIT PROJECTS FUNCTION')
        console.log(toDoList.initProject);
        
            // toDoList.projects = toDoList.initProject
    
        
        toDoList.list.forEach(el=>{
            if(toDoList.projects.some(proj=> proj === el.project)){
                console.log('Project found in registry')
            }else{
                toDoList.projects.push(el.project);
                
            }
        })
        }
    
}
