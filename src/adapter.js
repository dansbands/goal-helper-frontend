let userId = 0
let count = 5


class Adapter {
  constructor() {

  }

/// I can probably get Users, Goals, and Links in one req

  static getUsers() {
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(json => User.createUsers(json))
    .then(data => User.currentUser())
    .then(beef => Adapter.getGoals())
    .then(chicken => Adapter.getLinks())
  }

  static getGoals() {
    fetch(`http://localhost:3000/api/v1/users/${currentUserId}`)
    .then(resp => resp.json())
    // .then(console.log)
    .then(json => Goal.createGoals(json.goals))
  }

  static getLinks() {
    fetch(`http://localhost:3000/api/v1/users/${currentUserId}`)
    .then(resp => resp.json())
    .then(json => Link.createLinks(json.goals))
  }

  static countRequests() {
    count ++
    console.log('Request Number', count, 'since 645pm 12-29')
  }

  static getResources() {
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDFnFWcK87YDLp4JqaDI1iOlLYFo8qvwZw&cx=012707253764796649748:luz4j2cmipo&q=${newValue}`)
    .then(resp => resp.json())
    // .then(console.log)
    .then(json => Resource.createResources(json.items))
    .then(beef => Adapter.countRequests())
  }

  static createNewGoal(json) {
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }).then(resp => resp.json())
    .then(data => Goal.createGoalInstance(data))
  }

  static updateGoal(json, id) {
    fetch(`http://localhost:3000/api/v1/goals/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }).then(resp => resp.json())
    .then(data => Goal.updateGoalInstance(data))
    .then(beef => Link.getLinksFromAll())
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
