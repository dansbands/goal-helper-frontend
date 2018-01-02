let allLinks = []

class Link {
  constructor(json, goalId) {
    this.id = json.id
    this.title = json.title
    this.url = json.url
    //conditional
    if (goalId) {
      this.goalId = goalId
    } else {
      this.goalId = json.goal_id
    }

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

// this is breaking...
  static createLink(json) {
    // let goalId = parseInt(document.getElementById('goal-id').value)
    let newLink = new Link(json)
    console.log(newLink)
    Link.getLinksFromAll()
    // Adapter.updateLink(resource, goalId)
  }

  static getLinksFromAll() {
    this.all().forEach(item => {
      let div = document.getElementById(`list-goals-${item.goalId}`)
      if (div) {
        div.innerHTML = ''
      }
    })

    this.all().forEach(link => {
      let div = document.getElementById(`list-goals-${link.goalId}`)
      if (div) {        
        let li = document.createElement('li')
        li.className = "list-group-item"
        li.id = `goal-link-${link.id}`
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`
        div.appendChild(li)
      }
    })
  }





  // render() {
  //   return(
  //     `<li class="list-group-item" id="goal-link-${link.id}"><a href="${link.url}" target="_blank">${link.title}</a></li>`
  //   )
  // }
}
