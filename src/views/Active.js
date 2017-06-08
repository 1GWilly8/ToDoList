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
        return todos.map(function(object, id) {
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
                                    m.withAttr("checked", function() {
                                        console.log("test");
                                        return false;
                                    })
                                }
                            }
                        }),
                        m("div.task", object.text)
                    ])
                ])
            })
            // ]

    }
}
