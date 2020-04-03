const users = document.querySelectorAll('.container .user');
const showModal = document.querySelectorAll('.container .showModal')[0];
const close = document.querySelectorAll('.container .showModal .showModal__exit')[0];
const element = showModal.querySelectorAll("div, div>img, div>span"); 

users.forEach((user) => {
   user.addEventListener('click', () => {
    const { name, phone, photo, bdday, online} = event.currentTarget.dataset;
        element[0].innerHTML += online;
        element[3].innerHTML = name;
        element[5].innerHTML += bdday;
        element[7].innerHTML += phone;
        element[9].src = photo;
        showModal.style.display = "grid";
   });
});

close.addEventListener('click', () => {
     showModal.style.display = 'none';
});