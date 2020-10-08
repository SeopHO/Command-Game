let again = document.querySelector('.again');

again.addEventListener("mouseover",function(){
    again.style.color='red';
    again.style.cursor='pointer';
});

again.addEventListener("mouseout",function(){
    again.style.color='black';
});

again.addEventListener("click",function(){
    //location.reload();
    level_count = level_count;
    Q_count=0;
    user_len=-1;
    Clear();
    coreInit();
    console.log(true);
    console.log(level_count);
});