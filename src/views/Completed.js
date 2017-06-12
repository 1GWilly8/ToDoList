// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");


module.exports = {
    view: function() {
        var todos = List.displayList("Completed");
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
                                        List.allstatechecked = false,
                                            List.list[object.id].tag = "Active"
                                    } else {
                                        List.list[object.id].tag = "Completed"
                                    }
                                    List.checkAllComp();
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
