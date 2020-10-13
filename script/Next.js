let next = document.querySelector('.next');

next.addEventListener("mouseover",function(){
    next.style.color='red';
    next.style.cursor='pointer';
});

next.addEventListener("mouseout",function(){
    next.style.color='black';
});

next.addEventListener("click",function(){
    level_count++;
    Clear();
    coreInit();
    console.log(true);
    console.log(level_count);
});