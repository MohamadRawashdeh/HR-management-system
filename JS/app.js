'use strict'

const allEmployee = [];
function Employee (EmployeeID, FullName, Department, Level, ImageURL, netSalary ) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.salary = this.salary();
    //this.netSalary = netSalary;
    console.log(this)
    allEmployee.push(this)
  }

Employee.prototype.salary = function () {
    if (this.Level === "Senior"){
         return (Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500);
    }
    else if (this.Level ===  "Mid-Senior") {
      return (Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000);
}
   else  {  
      return Math.floor(Math.random() * (1000 - 500 + 1) ) + 500;
}
  }

Employee.prototype.netSalary = function () {
    this.netSalary = math.floor (this.salary - (this.salary * 0.075))
    allEmployee.push(this.netsalary);
  }
Employee.prototype.employeeinfo = function() {
document.write(`<p> <br> Full name : ${this.FullName} <br> salary : ${this.salary} JD  </p>`)

//<br> TAX : ${this.netsalary} JD
  }

const Ghazi = new Employee (1000,"Ghazi Samer","Administration","Senior", "")
const Lana  = new Employee (1001,"Lana Ali","Finance","Senior", "")
const Tamara  = new Employee (1002,"Tamara Ayoub","Marketing","Senior", "")
const Safi  = new Employee (1003,"Safi Walid","Administration","Mid-Senior", "")
const Omar  = new Employee (1004,"Omar Zaid","Development","Senior", "")
const Rana  = new Employee (1005,"Rana Saleh","Development","Junior", "")
const Hadi  = new Employee (1006,"Hadi Ahmad","Finance","Mid-Senior" ,"")

console.log(allEmployee);
for ( let i = 0 ; i <= allEmployee.length ; i++){
    if (typeof allEmployee !== "number" ){
//console.log(i, allEmployee[i]);
//allEmployee[i].Salary();
//allEmployee[i].netsalary();
allEmployee[i].employeeinfo();
   }
}
