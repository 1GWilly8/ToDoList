// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    view: function() {
        var todos = List.displayList("Active");
        return todos.map(function(object) {
                return m("li", [
                    m("div", [
                        m("input", {
                            type: "checkbox",
                            checked: false,
                            onclick: function() {
                                object.toggleState()
                                if (List.list[object.id].checkboxState == false) {
                                    List.list[object.id].tag = "Active"
                                } else {
                                    List.list[object.id].tag = "Completed"
                                }
                            }
                        }),
                        m("div.task", object.text),
                        m("button", "delete")
                    ])
                ])
            }
        )

    }
}
