const element = document.querySelectorAll('.container .user');

let showModal = `<div class="showModal">
                    <div class="showModal__main">
                        Была в сети в 
                        <span></span>
                    </div>
                    <div class="showModal__exit">
                        <img src="img/exit.jpg" width="15px" height="15px" title="Закрыть">
                    </div>
                    <div class="showModal__name"></div>
                    <div class="showModal__bday">
                        День рождение:  
                        <span class="showModal_data"></span>
                    </div>
                    <div class="showModal__phone">
                        Телефон:
                        <span class="showModal_data"></span>
                    </div>
                    <div class="showModal__img">
                        <img src="" width="75px" height="75px"/>
                    </div>
                    <div class="showModal__other">
                        <img src="img/sendMessage.jpg" class="showModal__other_img"  title="Отправить сообщение" 
                        alt="Отправить сообщение"/>
                        <span class="showModal_data"></span>
                    </div>`;
element.forEach((user) => {  
    user.mouseover = function() {
        const { id } = event.currentTarget.dataset;
        console.log(id)
    }
})