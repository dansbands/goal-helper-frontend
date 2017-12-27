let allGoals = []

class Goal {
  constructor(json) {
    this.title = json.title
    this.notes = json.notes
    this.id = json.id
    allGoals.push(this)
  }

  static all() {
    return [...allGoals]
  }

  static createGoals(json) {
    for (var i = 0; i < json.length; i++) {
      let goal = json[i]
      let newGoal = new Goal(goal)
    }
    this.getGoalsFromAll()
  }

  static createGoalInstance(json) {
    let newGoal = new Goal(json)
    console.log(this)

    this.getGoalsFromAll()
  }

  static getGoalsFromAll() {
    document.getElementById('goals').innerHTML=''
    let goals = Goal.all()
    for (var i = 0; i < goals.length; i++) {
      let newGoal = goals[i]
      newGoal.addToGoalList()
    }
  }

  static attachListeners() {
    document.getElementById('new-goal-form').addEventListener('submit', this.createGoal)
  }

  static createGoal(e) {
    e.preventDefault()
    let newTitle = document.getElementById('new-goal').value
    let newNotes = document.getElementById('note-area').value
    let currentUser = document.getElementById('user-select').value
    let data = {
      title: newTitle,
      notes: newNotes,
      user_id: currentUser
    }
    Adapter.createNewGoal(data)
  }

  ///// instance methods

  addToGoalList() {
    let goalList = document.getElementById('goals')
    let panel = document.createElement('div')
    panel.innerHTML = this.render()
    panel.class = "panel-group"
    goalList.appendChild(panel)
    panel.addEventListener('click', this.panelAction)
  }

  panelAction(e) {
    if (e.target.id.includes('delete-goal')) {
      let targetId = parseInt(e.target.id.slice(12))
      Goal.deleteFromAll(targetId)
      Goal.getGoalsFromAll()
      Adapter.deleteGoal(targetId)
      // Adapter.getGoals()
    }
  }



  static deleteFromAll(id) {
    let goals = Goal.all()
    for (var i = 0; i < goals.length; i++) {
      if (goals[i].id === parseInt(id)) {
        allGoals.splice(i,1)
      }
    }
  }



    //delete from goal list




  render () {
    return (
      `<div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title" style="overflow: hidden">
            <input type="checkbox" style="margin-right: 10px">
            <a data-toggle="collapse" href="#collapse${this.id}">${this.title}</a>
            <div value="1" id="delete-goal-${this.id}" class="glyphicon glyphicon-trash pull-right"></div>
          </h4>
        </div>
        <div id="collapse${this.id}" class="panel-collapse collapse">
          <ul id="list-goals-${this.id}" class="list-group">
            <li class="list-group-item"><a href="#">Codecademy: Learn CSS</a></li>
            <li class="list-group-item"><a href="">W3Schools: CSS</a></li>
            <li class="list-group-item"><a href="">Treehouse: Learn CSS</a></li>
          </ul>
          <div class="panel-footer">Notes: ${this.notes}</div>
        </div>
      </div>`
    )
  }
}
