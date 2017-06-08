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
                        m("input", { type: "checkbox",  onclick: function() {
                                var isCheck = m.withAttr("checked");
                                if (!isCheck) {
                                    List.markActive(object.id);
                                    List.list[object.id].switchState
                                } else {
                                	List.markCompleted(object.id);
                                    List.list[object.id].switchState
                                }
                            },
                             checked: List.list[object.id].checkboxState
                    }),
                        m("div.task", object.text)
                    ])
                ])
            })
        // ]

    }
}
