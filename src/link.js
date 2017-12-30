let allLinks = []

class Link {
  constructor(json, goalId) {
    this.id = json.id
    this.title = json.title
    this.url = json.url
    this.goalId = goalId
    allLinks.push(this)
  }

  static all() {
    return [...allLinks]
  }

  static createLinks(json) {
    json.forEach(goal => {
      goal.links.forEach(link => {
        let newLink = new Link(link, goal.id)
      })
    })
    this.getLinksFromAll()
  }

  static createLink(resource) {
    let goalId = document.getElementById('goal-id').value
    let newLink = new Link(resource, goalId)
    Link.getLinksFromAll()
  }

  static getLinksFromAll() {
    this.all().forEach(link => {
      let div = document.getElementById(`list-goals-${link.goalId}`)
      let li = document.createElement('li')
      li.className = "list-group-item"
      li.id = `goal-link-${link.id}`
      li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`
      div.appendChild(li)
    })
  }





  // render() {
  //   return(
  //     `<li class="list-group-item" id="goal-link-${link.id}"><a href="${link.url}" target="_blank">${link.title}</a></li>`
  //   )
  // }
}
