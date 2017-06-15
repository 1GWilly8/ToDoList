// src/views/Dashboard.js
var m = require("mithril")
var List = require("../model/List");


module.exports = {
    oninit: function() {
    List.loadList();
    console.log("Dash-oninit", arguments);
    },
    view: function() {
        var todos = List.displayList("All");
        return todos.map(function(object) {
                return m("li.todoLi", [
                    m("div.input-group", [
                        m("span.input-group-addon",
                            m("input", {
                            type: "checkbox",
                            checked: object.checkboxstate,
                            onclick: function() {
                              List.toggleCompleted(object.objectId, object.checkboxstate)
                                List.loadList();
                            }
                        })
                        ),
                        m("div.form-control", object.text),
                        m("span.input-group-btn ",
                            m("button.btn-no-marg", {
                                onclick: function() {
                                    List.removeFromList(object.objectId);
                                }
                            }, m("span.glyphicon glyphicon-remove delete-btn[aria-hidden='true']")))
                    ])
                ])
            })
    }
}
