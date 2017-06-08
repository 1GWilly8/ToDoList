// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    view: function() {
        var todos = List.displayList("Completed");
            return todos.map(function(object, index) {
                return m("li", [
                    m("div", [
                        m("input", { type: "checkbox", oninit: List.checkboxOnOff(true),  checked: List.checkboxState
                    }),
                        m("div", object.text),

                        m("button", {
                            onclick: function() {
                                List.removeFromList(index);
                            }
                        }, "delete")
                    ])
                ])
            })
        // ]

    }
}
