"use strict";
const container = document.querySelector('.container');

class Student {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.education = user.education;
        this.course = user.course;
        this.photoSrc = user.photoSrc;
        this.dateOfBirth = user.dateOfBirth;
    }
    get age() {
        let number = this.dateOfBirth.split('.');
        return Math.floor((new Date()-new Date(number[2], number[1], number[0])) / (60*60*24*1000*365)) + ' года';
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

let countFriends = 0;

users.forEach((item) => {
    countFriends++;
    let student = new Student(item);
    student.render(container);
});