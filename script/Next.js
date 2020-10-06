let next = document.querySelector('.next');

next.addEventListener("mouseover",function(){
    next.style.color='red';
    next.style.cursor='pointer';
});

next.addEventListener("mouseout",function(){
    next.style.color='black';
});

next.addEventListener("click",function(){
    //location.reload();
    level_count++;
    Q_count=0;
    user_len=-1;
    Clear();
    coreInit();
    console.log(true);
    console.log(level_count);
});