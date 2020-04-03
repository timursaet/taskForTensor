const users = document.querySelectorAll('.container .user');
const showModal = document.querySelectorAll('.container .showModal')[0];
const close = document.querySelectorAll('.container .showModal .showModal__exit')[0];
const element = showModal.querySelectorAll("div, div>img, div>span"); 

let countFriend = 0;

users.forEach((user) => {
    countFriend++;
    user.addEventListener('click', (event) => {
        event.stopPropagation();
        const { name, phone, photo, bdday, online } = event.currentTarget.dataset;
            element[1].innerHTML = online;
            element[4].innerHTML = name;
            element[6].innerHTML = bdday;
            element[8].innerHTML = phone;
            element[10].src = photo;
            element[13].innerHTML = `${countFriend} друзей`;
            event.currentTarget.appendChild(showModal);
            showModal.style.display = "grid";
   });
});

document.addEventListener('click', () => {
    showModal.style.display = "none";
    document.removeEventListener('click',() => {
        console.log('Обработчик удален!')
    });
});

close.addEventListener('click', () => {
     showModal.style.display = "none";
     document.removeEventListener('click',() => {
        console.log('Обработчик удален!')
    });
});