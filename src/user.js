let allUsers = []
let currentUserId

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

  static currentUser() {
    userId = document.getElementById('user-select').value
      if (userId) {
        return currentUserId = userId
        // console.log('New User', userId)
      } else {
        currentUserId = this.all()[0].id
        // console.log('Current User:', currentUserId);
        return currentUserId
      }
      // Adapter.getGoals()
    }

    static attachListeners() {
      document.getElementById('user-select').addEventListener('change', this.changeUser)
    }


    static changeUser(e) {
      currentUserId = e.target.value
      // console.log(currentUserId);
      allGoals = []
      Adapter.getGoals()
      // User.currentUser()
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
