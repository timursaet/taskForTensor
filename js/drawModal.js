const users_container = document.querySelectorAll('.container .user'); 

function render(block) {
        let showModal = `<div class="showModal__main">
                            Была в сети в 
                            <span>${this.online}</span>
                        </div>
                        <div class="showModal__exit">
                            <img src="img/exit.jpg" width="15px" height="15px" title="Закрыть">
                        </div>
                        <div class="showModal__name">${this.name}</div>
                        <div class="showModal__bday">
                            День рождение:  
                            <span class="showModal_data">${this.dateOfBirth}</span>
                        </div>
                        <div class="showModal__phone">
                            Телефон:
                            <span class="showModal_data">${this.phone}</span>
                        </div>
                        <div class="showModal__img">
                            <img src="${this.photoSrc}" width="75px" height="75px"/>
                        </div>
                        <div class="showModal__other">
                            <img src="img/sendMessage.jpg" class="showModal__other_img"  title="Отправить сообщение" 
                            alt="Отправить сообщение"/>
                            <span class="showModal_data">${countFriends} друзей</span>
                        </div>`;
        block.innerHTML = showModal;
};

const showModal = document.querySelectorAll('.container .showModal')[0];

users_container.forEach((item) => {
    item.onmouseover = function() {     
        const { id } = event.currentTarget.dataset;
        setTimeout(() => {
            const user = users.find(user => user.id == id);
            if (user) {
                render.call(user, showModal);
                showModal.style.display = "grid";
            };
        }, 1000);
        event.currentTarget.appendChild(showModal);
    }
    item.onmouseout = function() {
        showModal.style.display = "none";
    }
});