import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { formBuilderControls } from './components/formControlControlData/formbuilderControls';
import Pdfviewer from './pdfviewer'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      controlsList: [],
      designData: [],
    }
  }

  componentWillMount() {
    this.state.controlsList = formBuilderControls;
    console.log('componentWillMount')

  }

  componentDidMount() {
    console.log('componentDidMount')

  }

  allowDrop = (ev) => {
    ev.preventDefault();
  }

  dragStart = (ev) => {

    ev.dataTransfer.setData("ctrlcode", ev.target.getAttribute('ctrlcode'));
    var id = ev.target.getAttribute('id');
    // if (id != null) {
      ev.dataTransfer.setData("id", id);
    // }

  }

  dropElement = (ev) => {

    ev.preventDefault();
    var id = ev.dataTransfer.getData("id");

    // if (id == null || id == "") {

      var ctrlcode = ev.dataTransfer.getData("ctrlcode");
      if(ctrlcode == 'null'){
        ctrlcode ='WC007'
        var vert = document.getElementById(id)
        vert.remove()
      }
      var element = this.state.controlsList.filter(x => x.ctrlcode == ctrlcode)[0];
      // if (element != undefined) {
        this.addDesignData(ev, ctrlcode, element.content);
      // }

    // }
    // else {
    //   if (ev.target.id == "canvas") {
    //     alert("Control cannot be placed");
    //   } else {
    //     ev.target.appendChild(document.getElementById(id));
    //   }
    // }
  }

  getMax = (arr, prop) => {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (max < parseInt(arr[i][prop])) { max = arr[i][prop]; }
    }
    return max + 1;
  }

  addDesignData = (ev, ctrlcode, content) => {
    
    var ctrlID = this.getMax(this.state.designData, "crntID");
    var holderID = "H" + ctrlID;

    var holder = document.createElement('span');
    holder.classList.add("mb-2");
    var ctrlName = "";

    holder.id = holderID;
    holder.attributes.ctrlcode = ctrlcode
    holder.style.position = 'absolute'
    holder.style.left = ev.screenX -400 + 'px'
    holder.style.top = ev.screenY   -300 + 'px'
    holder.style.color = 'red'
    
    holder.draggable = true;
    holder.ondragstart = this.dragStart;
    holder.onclick = this.loadPropertyWindow;
    ev.target.appendChild(holder);
    var json = {};
    json.crntID = ctrlID;
    json.prntID = ev.target.id == "" ? ev.target.parentElement.id : ev.target.id;;

    this.state.designData.push(json);

    ReactDOM.render(React.createElement(content), document.getElementById(holder.id));


  }




  handlePreview = (evt) => {
    var datainner = document.getElementById("canvas").innerHTML
    datainner = datainner.replaceAll('border', '')
    document.getElementById("modal-body").innerHTML = '<div class="container-fluid "><div class="row ">' + datainner + '</div></div>'

  }

  render() {

    return (
      <div>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-2 p-2 bg-light">

              <h3 className="m-1 mt-0 mb-2">Docusign</h3>

              <ul className="list-group">
                {this.state.controlsList.map((control, key) => {
                  return (
                    <li className="list-group-item" key={key}>
                      <div className="tac-list-item" draggable="true" ctrlcode={control.ctrlcode} onDragStart={(e) => this.dragStart(e)}>
                        <div className="tac-list-icon">
                          <i className={control.icon}></i>
                        </div>
                        <div className="tac-list-text">
                          {control.label}
                        </div>
                      </div>
                    </li>
                  )
                })
                }


              </ul>

              <br />

              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.handlePreview}>Preview</button>

            </div>

            <div id="canvas" className="bg-white col-10 mt-6 p-3 border" >
            <Pdfviewer onDrop={(e) => this.dropElement(e)} onDragOver={(e) => this.allowDrop(e)}/>
            </div>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Form Builder</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" id="modal-body">

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    );
  }
}

export default Home

