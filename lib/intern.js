const Employee = require("./employee");
class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool;
    }
    getRole() {
        return "intern";
    }

    internSchool() {
        return this.internSchool;
    }
}

module.exports = Intern;