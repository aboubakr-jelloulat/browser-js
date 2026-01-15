

let Student = {
    firstName : "ajelloul",
    lastName : "borz",

    // fullName : `${this.firstName} ${this.lastName}` // this acces to window var

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value)
    {
        [this.firstName, this.lastName] = value.split(" ");

    }
    
};

console.log(Student.fullName);

Student.fullName = "hei foo";

console.log(Student.fullName);

