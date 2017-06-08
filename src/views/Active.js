// src/views/Active.js
var m = require("mithril")
var List = require("../model/List");


// module.exports = {
//     view: function() {
//         var todos = List.displayList("Active");
//         // console.log('List object:', List)
//         // var elem = document.getElementById("ulList");
//         // console.log(todos);
//         // elem = [
//             return todos.map(function(object) {
//                 return m("li", [
//                     m("div", [
//                         m("input", { type: "checkbox" }),
//                         m("div.task", object.text)
//                     ])
//                 ])
//             })
//         // ]

//     }
// }




module.exports = {
    view: function() {
        var todos = List.displayList("Active");
        // console.log('List object:', List)
        // var elem = document.getElementById("ulList");
        // console.log(todos);
        // elem = [
        return todos.map(function(object, index) {
                return m("li", [
                    m("div", [
                        m("input", {
                            type: "checkbox",
                            oninit: List.checkboxOnOff(false),
                            onclick: function() {
                                var isCheck = m.withAttr("checked");
                                if (isCheck) {
                                    List.markCompleted(object.id);
                                    List.checkboxOnOff(false);
                                }
                            },
                            checked: List.checkboxState

                        }),
                        m("div.task", object.text),

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
