let allGoals = []

class Goal {
  constructor(json) {
    this.title = json.title
    this.notes = json.notes
    this.id = json.id
    this.userId = parseInt(currentUserId)
    allGoals.push(this)
  }

  static all() {
    return [...allGoals]
  }

  static createGoals(json) {
    allGoals = []
    for (var i = 0; i < json.length; i++) {
      let goal = json[i]
      let newGoal = new Goal(goal)
    }
    this.getGoalsFromAll()
  }

  static createGoalInstance(json) {
    let newGoal = new Goal(json)
    let goalVal = document.getElementById('goal-id')
    goalVal.value = newGoal.id
    this.getGoalsFromAll(newGoal.id)
    Link.getLinksFromAll()
  }

  static getGoalsFromAll(jsonId) {
    document.getElementById('accordion').innerHTML=''
    let goals = Goal.all()
    for (var i = 0; i < goals.length; i++) {
      let newGoal = goals[i]
      newGoal.addToGoalList()
    }
    if (jsonId) {
      let goalDiv = document.getElementById(`collapse${jsonId}`)
      goalDiv.className += " in"
    }
  }

  static attachListeners() {
    let goalForm = document.getElementById('goal-form')
    goalForm.addEventListener('submit', this.goalAction)
    goalForm.addEventListener('keyup', Resource.getSearchValue)
    document.getElementById('new-goal').addEventListener('click', this.newGoal)

  }

  static newGoal() {
    let title = document.getElementById('goal-title')
    let notes = document.getElementById('goal-notes')
    let id = document.getElementById('goal-id')
    title.value = ''
    // title.placeholder
    notes.value = ''
    id.value = 0
    Goal.getGoalsFromAll()
    Link.getLinksFromAll()
  }



  static goalAction(e) {
    e.preventDefault()
    let goalId = document.getElementById('goal-id')
    let instructions = document.getElementById('instructions')
    // Adapter.getResources() //this makes an api call - running out of my daily limit
    Resource.getResourcesFromAll()//this gives me some data without making an api call
    Resource.attachListeners()

    if (goalId.value === "0") {
      Goal.createGoal(e)
    } else {


      // console.log(goalId.value);
      // console.log(this)

      Goal.updateGoal()
    }
  }

  static createGoal(e) {
    let newTitle = document.getElementById('goal-title').value
    let newNotes = document.getElementById('goal-notes').value
    let currentUser = document.getElementById('user-select').value
    let data = {
      title: newTitle,
      notes: newNotes,
      user_id: currentUser
    }
    Adapter.createNewGoal(data)
  }

  static updateGoal() {
    let newTitle = document.getElementById('goal-title').value
    let newNotes = document.getElementById('goal-notes').value
    let goalId = document.getElementById('goal-id').value
    let currentUser = document.getElementById('user-select').value
    let data = {
      title: newTitle,
      notes: newNotes,
      // id: goalId,
      user_id: currentUser
    }
    Adapter.updateGoal(data, goalId)
  }

  static updateGoalInstance(json) {
    let currentGoal = Goal.all().find(obj => obj.id === json.id)
    let goalDiv = document.getElementById(`collapse${json.id}`)
    // console.log(currentGoal);
    // console.log(json);
    // console.log(goalDiv)
    currentGoal.title = json.title
    currentGoal.notes = json.notes
    this.getGoalsFromAll(json.id)
  }

  // submit calls goalAction
  // goalAction calls updateGoal
  // updateGoal calls Adapter.updateGoal
  // Adapter.updateGoal calls Goal.updateGoalInstance
      //Goal.updateGoalInstance refreshes Goals by calling this.getGoalsFromAll()
      // PROBLEM: Current Goal needs to remain open - aria-expanded="true" THIS IS A BOOTSTRAP JS THING - REWRITE
        // <div id="collapse12" class="panel-collapse collapse in" aria-expanded="true" style="">
        //   <ul id="list-goals-12" class="list-group">
        //
        //   </ul>
        //   <div class="panel-footer">Notes: Look at WesBos for Vanilla JS Tutorials Hey Hey !!! Updated!</div>
        // </div>

        // SOLUTION: add className of 'in' to goal with same id as goal-form






  static deleteFromAll(id) {
    let goals = Goal.all()
    for (var i = 0; i < goals.length; i++) {
      if (goals[i].id === parseInt(id)) {
        allGoals.splice(i,1)
      }
    }
  }

  ///// instance methods

  addToGoalList() {
    let goalList = document.getElementById('accordion')
    let panel = document.createElement('div')
    panel.innerHTML = this.render()
    panel.className = "panel panel-default"
    goalList.appendChild(panel)
    panel.addEventListener('click', this.panelAction)
  }

  panelAction(e) {
    if (e.target.id.includes('delete-goal')) {
      e.preventDefault()
      let targetId = parseInt(e.target.id.slice(12))
      Goal.deleteFromAll(targetId)
      Goal.getGoalsFromAll()
      Link.getLinksFromAll()

      Adapter.deleteGoal(targetId)
    } else if (e.target.id.includes('select-goal')){
      e.preventDefault()
      let linkId = parseInt(e.target.id.slice(12))
      let currentGoal = Goal.all().find(obj => obj.id === linkId)

      let goalTitle = document.getElementById('goal-title')
      let goalNotes = document.getElementById('goal-notes')
      let goalId = document.getElementById('goal-id')

      goalTitle.value = currentGoal.title
      goalNotes.value = currentGoal.notes
      goalId.value = currentGoal.id

      // Goal.populateGoalForm()
      // Goal.toggleCollapse()
    }
  }




  render () {
    return (
      `<div class="panel-heading" role="tab" id="heading${this.id}">
          <h4 class="panel-title" style="overflow: hidden">
            <input type="checkbox" style="margin-right: 10px">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse${this.id}" aria-expanded="false" aria-controls="collapse${this.id}" id="select-goal-${this.id}">
              ${this.title}
            </a>
            <div value="1" id="delete-goal-${this.id}" class="glyphicon glyphicon-trash pull-right"></div>
          </h4>
        </div>
        <div id="collapse${this.id}" class="panel-collapse collapse" role="tabpanel" aria-lebelledby="heading${this.id}">

            <ul id="list-goals-${this.id}" class="list-group">

            </ul>
            <div class="panel-footer"><b>Notes:</b><br/> ${this.notes}</div>


      </div>`
    )
  }
}
