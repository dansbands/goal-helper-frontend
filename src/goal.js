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
      newGoal.addToGoalList()
    }
  }


  ///// instance methods

  addToGoalList() {
    let goalList = document.getElementById('goals')
    let panel = document.createElement('div')
    panel.innerHTML = this.render()
    panel.class = "panel-group"
    goalList.appendChild(panel)
    console.log(this)
  }

  render () {
    return (
      `<div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <input type="checkbox" value="" style="margin-right: 10px">
            <a data-toggle="collapse" href="#collapse${this.id}">${this.title}</a>
          </h4>
        </div>
        <div id="collapse${this.id}" class="panel-collapse collapse">
          <ul class="list-group">
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
