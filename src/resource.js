let allResources = []
let id = 1

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
    for (var i = 0; i < json.length; i++) {
      let resource = new Resource(json[i])
    }
    this.getResourcesFromAll()
  }

  static getResourcesFromAll() {
    let res = Resource.all()
    for (var i = 0; i < res.length; i++) {
      let resources = document.getElementById('resources')
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





}
