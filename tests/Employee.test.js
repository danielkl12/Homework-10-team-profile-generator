const Employee = require("../lib/employee");
const employee = require("../lib/employee");
test("employee", () => {
    const employeeName = new employee();
    expect(typeof(employeeName)).toBe("object");
});