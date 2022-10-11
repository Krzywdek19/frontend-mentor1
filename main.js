const posts = document.querySelectorAll(".posts .post");
const markAllAsRead = document.getElementById("markAllAsRead");
const notificationsCount = document.getElementById("notificationsCount");

let notificationsCountNumber = notificationsCount.innerHTML;

posts.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(el.classList.contains("watched")){
            return;
        }else {
            el.classList.toggle("watched");
            notificationsCountNumber--;
            notificationsCount.innerHTML = `${notificationsCountNumber}`
        }
    })
})

markAllAsRead.addEventListener("click",()=>{
    posts.forEach((el)=>{
        if(el.classList.contains("watched")){
            return;
        }else {
            el.classList.toggle("watched");
            notificationsCountNumber--;
            notificationsCount.innerHTML = `${notificationsCountNumber}`;
        }
    })
})