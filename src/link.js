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

  static attachListeners() {
    let res = document.getElementsByClassName('resources')
    for (let i = 0; i < res.length; i++) {
      res[i].addEventListener('click', this.panelAction)
    }
    // console.log(res)
  }

  static panelAction(e) {

    if (e.target.className.includes('ok')) {
      console.log(e.target.className)

    }
    else if (e.target.className.includes('remove')) {
      this.className += " collapse"

      console.log(this.className);

      // if (!this.style.height) {
      //   this.style.height = "139px"
      //   console.log(this);
      //   console.log('no margin');
      //   console.log(this.style.height);
      //
      // } else {
      // }
      //
      // let thing = this
      // let margin = 0
      //
      //
      // function fadeOut() {
      //   margin -= 100
      //   thing.style.height = `${margin}px`
      //   if (thing.style.opacity < .1) {
      //     // thing.style.display = 'none'
      //   }
      // }
      //
      // setInterval(fadeOut, 10)

      // let beef = 1
      // this.style.opacity = beef
      // let chicken = this.style.opacity
      //
      // if (!this.style.display) {
      //   // this.style.display = "none"
      //   // console.log(this.style)
      // }

    }
  }

  static dismissResource() {

  }



  // render() {
  //   return(
  //     `<li class="list-group-item" id="goal-link-${link.id}"><a href="${link.url}" target="_blank">${link.title}</a></li>`
  //   )
  // }
}
