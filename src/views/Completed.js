// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    view: function() {
        var todos = List.displayList("Completed");
        // console.log('List object:', List)
        // var elem = document.getElementById("ulList");
        // console.log(todos);
        // elem = [
            return todos.map(function(object) {
                return m("li", [
                    m("div", [
                        m("input", { type: "checkbox", oninit: List.checkboxOnOff(true),  checked: List.checkboxState
                    }),
                        m("div.task", object.text)
                    ])
                ])
            })
        // ]

    }
}
