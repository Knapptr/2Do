import{format, formatDistanceToNow, parse, parseISO} from 'date-fns'

export let taskCard ={
     cardContent: function (el){
    let content = document.createElement('li')
    content.classList.add('taskListNode')
    content.innerHTML = `<div class="taskCard" data-index=${el.dataID}>

    <div class="remainingTimeCard">
        ${el.dateDue?formatDistanceToNow(el.dateDue):""}
    </div>

    <div class="projectInfo cardText">
        ${el.project}
    </div>
    <div class="taskName cardText">
        ${el.task}
    </div>
    <div class="completeState cardText ${el.complete===false? 'incomplete':'completed'}" data-index='${el.index}'>
        ${(el.complete===false)?"Not yet Done" + "<span class='markComplete' data-index="+el.dataID+"><i class='far fa-check-circle finishedCheck'></i></span>":"Finished"}
        
    </div>
    <div class="dueDate cardText">
        ${el.dateDue?" Due Date: " + format(el.dateDue,'EEEE, d MMM yyyy'): ""}
    </div>
    <div class="dateAssigned cardText">
    </div>
    
    <div class= 'deleteBtn'><button data-index=${el.dataID}>Delete Task</button></div>
    <footer class='smallText pushRight'>double click to edit</footer>`
    
    return content;
}
}