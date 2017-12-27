let allLinks = []

class Link {
  constructor(json) {
    this.id = json.id
    this.title = json.title
    this.url = json.url
    this.goalId = json.goal.id
    allLinks.push(this)
  }

  static all() {
    return [...allLinks]
  }

  static createLinks(json) {
    for (var i = 0; i < json.length; i++) {
      let link = json[i]
      let newLink = new Link(link)
      newLink.addToGoalLinks()
    }
  }

////This needs to be finished

  addToGoalLinks() {
    console.log(this)
  }
}
