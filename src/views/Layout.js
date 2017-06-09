// src/views/Layout.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    //keystrokes: "",
    view: function(vnode) {
        return m("div.container", [
            m("div.row", [
                m("div.col-md-4"),
                m("div.col-md-4"),
                m("div.col-md-4")
            ]),
            m("div.row", [
                m("div.col-md-4"),
                m("div.col-md-4",
                    m("main", [
                        m("header", "todos"),
                        m("div.jumbotron", [
                            m("input", {
                                type: "checkbox",
                                onclick: function() {
                                    var setComp = List.displayList("All");
                                    for (var i = 0; i < setComp.length; i++) {
                                        //List.markCompleted(setComp[i].id);
                                
                                        List.list[setComp[i].id].toggleState()
                                        if (List.list[setComp[i].id].checkboxState == false) {
                                            List.list[setComp[i].id].tag = "Active"
                                        } else {
                                            List.list[setComp[i].id].tag = "Completed"
                                        }
                                    }
                                }
                            }),
                            m("input", {
                                placeholder: "What needs to be done?",
                                onkeydown: function(e) {
                                    if (e.keyCode == 13 && e.target.value != "") {
                                        List.addToList(e.target.value);
                                        e.target.value = '';
                                    }
                                }
                            }),
                            m("ul", vnode.children),

                            m("nav", [
                                m("div", "" + List.list.length + " item left"),
                                m("a", { href: "/All", oncreate: m.route.link }, "All"),
                                m("a", { href: "/Active", oncreate: m.route.link }, "Active"),
                                m("a", { href: "/Completed", oncreate: m.route.link }, "Completed"),
                                m("button[type=button]", {
                                    onclick: function() {
                                        var complete = List.displayList("Completed");
                                        console.log("Complete:", complete)
                                        for (var i = 0; i < complete.length; i++) {
                                            List.removeFromList(complete[i].id);
                                        }
                                    }
                                }, "Clear Completed")
                            ])
                        ])
                    ])
                ),
                m("div.col-md-4")
            ]),
            m("div.row", [
                m("div.col-md-4"),
                m("div.col-md-4"),
                m("div.col-md-4")
            ]),
            m("div.row", [
                m("div.col-md-4"),
                m("div.col-md-4"),
                m("div.col-md-4")
            ])
        ])

    }
}

// m("main", [
//     m("header", "todos"),
//     m("div.jumbotron", [
//         m("input", {type: "checkbox", onclick: function(){
//             var setComp = List.displayList("All");
//                     for (var i = 0; i < setComp.length; i++) {
//                         List.markCompleted(setComp[i].id);
//                     }
//         } }),            
//         m("input", {
//             placeholder: "What needs to be done?",
//             onkeydown: function(e) {
//                 if (e.keyCode == 13 && e.target.value != "") {
//                     List.addToList(e.target.value);
//                     e.target.value = '';
//                     console.log("List.list is now equal to: ", List.list)
//                 }
//             }
//         }),
//         m("ul", vnode.children),

//         m("nav", [
//             m("div", "" + List.list.length + " item left"),
//             m("a", { href: "/All", oncreate: m.route.link }, "All"),
//             m("a", { href: "/Active", oncreate: m.route.link }, "Active"),
//             m("a", { href: "/Completed", oncreate: m.route.link }, "Completed"),
//             m("button[type=button]", {
//                 onclick: function() {
//                     // List.list = [];
//                     // List.listLen = 0;
//                     var complete = List.displayList("Completed");
//                     for (var i = 0; i < complete.length; i++) {
//                         List.removeFromList(complete[i].id);
//                     }
//                 }
//             }, "Clear Completed")
//         ])
//     ])
// ])
