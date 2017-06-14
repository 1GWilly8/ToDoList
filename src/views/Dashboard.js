// src/views/Dashboard.js
var m = require("mithril")
var List = require("../model/List");


module.exports = {
    oninit: function() {
      List.loadList();
    },
    view: function() {
        var todos = List.displayList(false);
        return todos.map(function(object) {
                return m("li.todoLi", [
                    m("div.input-group", [
                        m("span.input-group-addon",
                            m("input", {
<<<<<<< HEAD
                                type: "checkbox",
                                checked: object.checkboxstate,
                                onclick: function() {
                                    isChecked = m.withAttrs("checked")
                                    if (isChecked == true) {
                                        List.toggleCompleted(object._id, true)
                                    } else {
                                        List.toggleCompleted(object._id, false)
                                    }
                                }
                            })
=======
                            type: "checkbox",
                            checked: object.checkboxState,
                            onclick: function() {
                              console.log("FFFF"),
                                List.toggleCompleted(object._id, object.checkboxstate)
                                if (object.checkboxState == false) {
                                    List.allstatechecked = false
                                }
                                List.toggleAllComp();
                                List.loadList();
                            }
                        })
>>>>>>> 5c0c4d901b107c614946e5a795275b89e972f716
                        ),
                        m("div.form-control", object.text),
                        m("span.input-group-btn ",
                            m("button.btn-no-marg", {
                                onclick: function() {
                                    List.removeFromList(index);
                                }
                            }, m("span.glyphicon glyphicon-remove delete-btn[aria-hidden='true']")))
                    ])
                ])
            })
            // ]

    }
}


// m("div.checkboxFour",[
//                               m("input.checkbox[id='checkboxFourInput']", {
//                                  type: "checkbox",
//                                  onclick: function() {
//                                      var setComp = List.displayList("All");
//                                      for (var i = 0; i < setComp.length; i++) {

//                                      List.list[setComp[i].id].toggleState()
//                                      if (List.list[setComp[i].id].checkboxState == false) {
//                                          List.list[setComp[i].id].tag = "Active"
//                                      } else {
//                                          List.list[setComp[i].id].tag = "Completed"
//                                      }
//                                      }
//                                  }
//                              }),
//                              m("label[for='checkboxFourInput']")
//                               ])
