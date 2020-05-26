class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

class User extends Person{
  constructor(name, email, password, companies, increase, decrease) {
    super(name, email);

    this.password = password;
    this.companies = companies;
    this.increase = increase;
    this.decrease = decrease;
  }
}

export default User;