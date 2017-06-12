// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");


module.exports = {
    view: function() {
        var todos = List.displayList("All");
        return todos.map(function(object, index) {
                return m("li.todoLi", [
                    m("div.input-group", [
                        m("span.input-group-addon",
                            m("input", {
                                type: "checkbox",
                                checked: List.list[object.id].checkboxState,
                                onclick: function() {
                                    object.toggleState()
                                    if (List.list[object.id].checkboxState == false) {
                                        List.list[object.id].tag = "Active"
                                    } else {
                                        List.list[object.id].tag = "Completed"
                                    }
                                }
                            })
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
