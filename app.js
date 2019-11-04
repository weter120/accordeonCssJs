// console.log(document.getElementsByClassName('sec'));


let sections = document.querySelectorAll('h1');

console.log(sections);

sections.forEach((section)=>{
    section.addEventListener('click', tap)
});


function tap(e){
    e.preventDefault();
    // let isInvisible = e.target.parentElement.children[1].className
    // console.log(isInvisible);
    if(e.target.parentElement.children[1].className == 'invisible'){
        console.log('y')
        e.target.parentElement.children[1].className = '';
    }else{
        console.log('n')
        e.target.parentElement.children[1].className = 'invisible';
    }
    // e.targer.parentElement.children[1].className = 'invisible'
}