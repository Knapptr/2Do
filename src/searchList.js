////searches an array of objects (spec by location) and returns an array of objects whos 'prop' matches the 'term'

export let search = (location,prop,term)=>{
    console.log('location: '+location)
    console.log('prop: '+prop)
    console.log('term: ' +term)
    let results = [];
    results = location.filter(el=> el[prop] === term)
    console.log(results);
    return results;
}