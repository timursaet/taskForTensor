const container = document.querySelector('.container');

class Student {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.education = user.education;
        this.course = user.course;
        this.photoSrc = user.photoSrc;
    }
    render(block) {
        let view = `<div class="user" data-id="${this.id}">
                        <img src="${this.photoSrc}" class="user__img" alt="Ава ${this.name}"/>
                        <div>
                            <p class="user__name" title="${this.name}">${this.name}</p>
                            <span class="user__edu-name" title="${this.education} ${this.course} курс">${this.education} ${this.course} курс</span>
                        </div>
                    </div>`;
            block.innerHTML += view;
    }
}

users.forEach((item) => {
    let student = new Student(item);
    student.render(container);
});