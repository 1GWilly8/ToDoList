// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");


module.exports = {
    view: function() {
        var todos = List.displayList("All");
        return todos.map(function(object, index) {
                return m("li", [
                    m("div", [
                        m("input", {
                            type: "checkbox",
                            onclick: function() {
                                var isCheck = m.withAttr("checked");
                                console.log(arguments);
                                console.log(isCheck);
                                if (isCheck) {
                                    List.markCompleted(object.id);
                                }
                                else{
                                	console.log("workingggg");
                                	List.markActive(object.id);
                                }
                            }
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