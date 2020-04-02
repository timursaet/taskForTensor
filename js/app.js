const users = document.querySelectorAll('.container .user');
const showModal = document.querySelectorAll('.container .user__showModal')[0];
const close = document.querySelectorAll('.container .user__showModal .user__showModal_exit')[0];

users.forEach((user) => {
   user.addEventListener('click', () => {
    const { name, phone, photo, bdday, online} = event.currentTarget.dataset;
        showModal.children[0].children[0].children[0].children[0].innerHTML += online;
        showModal.children[0].children[2].innerHTML = name;
        showModal.children[0].children[3].children[1].innerHTML += bdday;    
        showModal.children[0].children[1].src = photo;
        showModal.children[0].children[5].innerHTML += phone;
        showModal.style.display = "block";
   });
});

close.addEventListener('click', function () {
    showModal.style.display = 'none';
});