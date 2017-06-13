// src/views/Completed.js
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
                                checked: object.checkboxState,
                                onclick: function() {
                                    object.toggleState()
                                    if (List.list[object.id].checkboxState == false) {
                                        List.allstatechecked = false
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
