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
    json.forEach(item => {
      console.log("Goal", item.id, item.links)
      let div = document.getElementById(`list-goals-${item.id}`)
      item.links.forEach(link => {
        let li = document.createElement('li')
        li.className = "list-group-item"
        li.id = `goal-link-${link.id}`
        li.innerHTML = `<a href="${link.url}">${link.title}</a>`
        div.appendChild(li)
      })
    })
    // for (var i = 0; i < json.length; i++) {
    //   let link = json[i]
    //   let newLink = new Link(link)
    //   newLink.addToGoalLinks()
    // }
  }

////This needs to be finished

  addToGoalLinks() {
    // console.log(this)
  }

  render() {
    return(
      `<li class="list-group-item" id="goal-link-${link.id}"><a href="${link.url}">${link.title}</a></li>`
    )
  }
}
