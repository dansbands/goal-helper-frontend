class Adapter {
  constructor() {

  }

  static getUsers() {
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(json => User.createUsers(json))
    // .then(Adapter.getGoals())
  }

  static getGoals() {
    // let userId = document.getElementById('user-select')
    let userId = 1

    fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(resp => resp.json())
    .then(json => Goal.createGoals(json.goals))

  }
}
