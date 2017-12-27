let userId = 0
// let currentUser = User.all()

class Adapter {
  constructor() {

  }


  // static getCurrentUser() {
  //   userId = document.getElementById('user-select').value
  //   if (userId) {
  //     console.log(userId)
  //
  //   } else {
  //     currentUser = User
  //     console.log(currentUser);
  //   }
  // }

  static getUsers() {
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(json => User.createUsers(json))
    .then(data => User.currentUser())
    .then(beef => Adapter.getGoals())
  }

  static getGoals() {
    console.log('Adapter:', currentUserId)
    // let userId = document.getElementById('user-select')
    let userId = 1

    fetch(`http://localhost:3000/api/v1/users/${currentUserId}`)
    .then(resp => resp.json())
    // .then(json => console.log(json.goals))
    .then(json => Goal.createGoals(json.goals))
  }

  static getLinks() {

  }

  static createNewGoal(json) {
    // console.log(json);
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }).then(resp => resp.json())
    // .then(console.log)
    .then(data => Goal.createGoalInstance(data))
    //this should really update from store, not refresh from API
  }

  static deleteGoal(id) {
    fetch(`http://localhost:3000/api/v1/goals/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }




}
