const users_container = document.querySelectorAll('.container .user');

function render(h) {
        let showModal = `<div class="showModal">
                        <div class="showModal__main">
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
                            <img src="${this.img}" width="75px" height="75px"/>
                        </div>
                        <div class="showModal__other">
                            <img src="img/sendMessage.jpg" class="showModal__other_img"  title="Отправить сообщение" 
                            alt="Отправить сообщение"/>
                            <span class="showModal_data"></span>
                        </div>`;
        h.innerHtml = showModal;
        event.currentTarget.appendChild(showModal);
};

users_container.forEach((item) => {
    item.addEventListener('click', (event) => {
        const { id } = event.currentTarget.dataset;
        const user = users.find(user => user.id == id);
        if (user) {
            render.call(user, container);
        };
    });
});