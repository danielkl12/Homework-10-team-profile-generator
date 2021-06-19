class Employee {
    constructor(name, title, id, email) {
        this.name = name;
        this.title = title;
        this.id = id;
        this.email = email;
}

getName() {
    return this.name;
}

getTitle() {
    return this.title;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email
}


}

module.exports = Employee;