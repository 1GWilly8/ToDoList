// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    view: function() {
        var todos = List.displayList("All");
        // console.log('List object:', List)
        // var elem = document.getElementById("ulList");
        // console.log(todos);
        // elem = [
            return todos.map(function(text) {
                return m("li", [
                    m("div", [
                        m("input", { type: "checkbox" }),
                        m("div.task", text)
                    ])
                ])
            })
        // ]

    }
}