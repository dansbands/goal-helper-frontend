let allResourcesCopy = [{title: "<b>Learn JavaScript</b> | Codecademy", url: "https://www.codecademy.com/learn/learn-javascript", displayLink: "www.codecademy.com", body: "Codecademy is the easiest way to <b>learn</b> how …e, fun, and you <br>↵can do it with your friends.", id: 1}, {title: "<b>JavaScript</b> - <b>Learn</b> web development | MDN", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript", displayLink: "developer.mozilla.org", body: "Dec 14, 2017 <b>...</b> <b>JavaScript</b> is a pro…mated 2D/3D graphics, or scrolling video&nbsp;...", id: 2}, {title: "<b>Learn JavaScript</b> - Free Interactive JavaScript Tutorial", url: "http://www.learn-js.org/", displayLink: "www.learn-js.org", body: "Learn-JS.org is a free interactive JavaScript tuto…ant to <b>learn</b> <br>↵<b>JavaScript</b>, fast.", id: 3}]

// let allResources = [{title: "<b>Learn JavaScript</b> | Codecademy", url: "https://www.codecademy.com/learn/learn-javascript", displayLink: "www.codecademy.com", body: "Codecademy is the easiest way to <b>learn</b> how …e, fun, and you <br>↵can do it with your friends.", id: 1}, {title: "<b>JavaScript</b> - <b>Learn</b> web development | MDN", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript", displayLink: "developer.mozilla.org", body: "Dec 14, 2017 <b>...</b> <b>JavaScript</b> is a pro…mated 2D/3D graphics, or scrolling video&nbsp;...", id: 2}, {title: "<b>Learn JavaScript</b> - Free Interactive JavaScript Tutorial", url: "http://www.learn-js.org/", displayLink: "www.learn-js.org", body: "Learn-JS.org is a free interactive JavaScript tuto…ant to <b>learn</b> <br>↵<b>JavaScript</b>, fast.", id: 3}]

let allResources = []

let id = 1
let newValue = "a"

class Resource {
  constructor(json) {
    this.title = json.htmlTitle
    this.url = json.link
    this.displayLink = json.displayLink
    this.body = json.htmlSnippet
    this.id = id++
    allResources.push(this)
  }

  static all() {
    return [...allResources]
  }

  static createResources(json) {
    allResources = []
    for (var i = 0; i < json.length; i++) {
      let resource = new Resource(json[i])
    }
    this.getResourcesFromAll()
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
      let id = this.id

      // console.log(e.target.className)
      Resource.selectResource(id)
    }
    else if (e.target.className.includes('remove')) {
      this.className += " collapse"

      console.log(this.className);
      console.log(this);

    }
  }

  static selectResource(id) {
    console.log(id)
    let idNumber = parseInt(id.slice(9))
    let resource = Resource.all().find(res => res.id === idNumber)
    let goalId = parseInt(document.getElementById('goal-id').value)
    resource["goal_id"] = goalId
    Adapter.createLink(resource)

    // Link.createLink(resource)
    // console.log('select!')
    // console.log("Resource:", resource);
    // console.log("Goal Id:", goalId);

  }

  static dismissResource() {

  }


  static getResourcesFromAll() {
    let resources = document.getElementById('resources')
    resources.innerHTML = ''
    let res = Resource.all()
    for (var i = 0; i < res.length; i++) {
      let div = document.createElement('div')
      div.id = `resource-${res[i].id}`
      div.className = "panel panel-default resources"
      div.innerHTML = `
        <div class="panel-body">
          <div class="row">

            <div class="col-sm-8">
              <h4><a href=${res[i].url}>${res[i].title}</a></h4>
              <h6><a href=${res[i].url}>${res[i].displayLink}</a></h6>
            </div>

            <div class="col-sm-4">
              <h2>
                <a href="#"></a>
                <span class="glyphicon glyphicon-remove-circle glyphicon-lg pull-right" style="margin-right: 20px; color: darkred" data-toggle="collapse" data-target="resources"></span>
              </h2>
              <h2>
                <span class="glyphicon glyphicon-ok-circle pull-right" style="margin-right: 20px; color: green"></span>
              </h2>
            </div>
          </div>

          <div class="">
            <p>${res[i].body}</p>
          </div>

        </div>`
        resources.appendChild(div)
    }
  }

  static getSearchValue() {
    let searchValue = document.getElementById('goal-title').value
    // searchValue.replace(/ /g,"+");
    newValue = searchValue.split(' ').join('+')
    // console.log(newValue)
    // Adapter.getResources()
  }

  // static newValue() {
  //   return newValue
  // }



}
