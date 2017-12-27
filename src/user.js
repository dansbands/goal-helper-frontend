let allUsers = []

class User {
  constructor(json) {
    this.name = json.name
    this.id = json.id
    allUsers.push(this)
  }

/////static methods

  static all() {
    return [...allUsers]
  }

  static createUsers(json) {
    for (var i = 0; i < json.length; i++) {
      let user = json[i]
      let newUser = new User(user)
      newUser.addToDropdown()
    }
  }


///////instance methods

  addToDropdown() {
    let dropdown = document.getElementById('user-select')
    dropdown.value = 9
    let option = document.createElement('option')
    option.innerHTML = `${this.name}`
    option.value = `${this.id}`
    dropdown.appendChild(option)
  }



}
