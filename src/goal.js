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
    for (var i = 0; i < json.length; i++) {
      let goal = json[i]
      let newGoal = new Goal(goal)
    }
    this.getGoalsFromAll()
  }

  static createGoalInstance(json) {
    let newGoal = new Goal(json)
    this.getGoalsFromAll()
  }

  static getGoalsFromAll(id) {
    document.getElementById('goals').innerHTML=''
    let goals = Goal.all()
    for (var i = 0; i < goals.length; i++) {
      let newGoal = goals[i]
      newGoal.addToGoalList()
    }
    if (id) {
      let goalDiv = document.getElementById(`collapse${id}`)
      goalDiv.className += " in"

      // console.log()

    }
  }

  static attachListeners() {
    let goalForm = document.getElementById('goal-form')
    goalForm.addEventListener('submit', this.goalAction)
    goalForm.addEventListener('keyup', Resource.getSearchValue)

  }




  static goalAction(e) {
    e.preventDefault()
    let goalId = document.getElementById('goal-id')
    let instructions = document.getElementById('instructions')
    // Adapter.getResources()
    Resource.getResourcesFromAll()//this gives me some data without making an api call
    Resource.attachListeners()

    if (goalId.value === "0") {
      // console.log(goalId.value);
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
    console.log(currentGoal);
    console.log(json);
    console.log(goalDiv)
    currentGoal.title = json.title
    currentGoal.notes = json.notes
    // currentGoal.title = json.links //do I need this, or will I update it in links?

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

  static populateGoalForm() {
    console.log('click')
  }

  // static toggleCollapse() {
  //   let elements = document.getElementsByClassName('collapse')
  //   for (let i = 0; i < elements.length; i++) {
  //     if (!elements[i].style.display) {
  //       elements[i].style.display = "block"
  //     }
  //     if (elements[i].style.display === "none") {
  //       elements[i].style.display = "block"
  //     } else if (elements[i].style.display === "block"){
  //       elements[i].style.display = "none"
  //     }
  //
  //   }
  //
  //   // elements.forEach(el => console.log(el))
  // }
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
      e.preventDefault()
      let targetId = parseInt(e.target.id.slice(12))
      Goal.deleteFromAll(targetId)
      Goal.getGoalsFromAll()
      Adapter.deleteGoal(targetId)
    } else if (e.target.id.includes('select-goal')){
      e.preventDefault()

      console.log(this);
      let linkId = parseInt(e.target.id.slice(12))
      let currentGoal = Goal.all().find(obj => obj.id === linkId)

      let goalTitle = document.getElementById('goal-title')
      let goalNotes = document.getElementById('goal-notes')
      let goalId = document.getElementById('goal-id')

      goalTitle.value = currentGoal.title
      goalNotes.value = currentGoal.notes
      goalId.value = currentGoal.id

      Goal.populateGoalForm()
      // Goal.toggleCollapse()
    }
  }




  render () {
    return (
      `<div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title" style="overflow: hidden">
            <input type="checkbox" style="margin-right: 10px">
            <a data-toggle="collapse" href="#collapse${this.id}" id="select-goal-${this.id}">${this.title}</a>
            <div value="1" id="delete-goal-${this.id}" class="glyphicon glyphicon-trash pull-right"></div>
          </h4>
        </div>
        <div id="collapse${this.id}" class="panel-collapse collapse">
          <ul id="list-goals-${this.id}" class="list-group">

          </ul>
          <div class="panel-footer">Notes: ${this.notes}</div>
        </div>
      </div>`
    )
  }
}
