// src/views/Layout.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    oninit: function() {
        List.loadList();
        // List.addToList("run", false); 
        // List.toggleCompleted("5940431eb092ab176aa43181", false);/*.then(function(){List.list = list});*/
    },
    view: function(vnode) {
        // return
        return m("div.container", [
            m("div.row", [
                m("div.col-md-4"),
                m("div.col-md-4"),
                m("div.col-md-4")
            ]),
            m("div.row", [
                m("div.col-md-3"),
                m("div.col-md-5",
                    m("h1.titleH", "todos"),
                    m("div.jumbotron", [
                        m("div.input-group", [
                            m("span.input-group-addon",
                                (List.list.length > 0) ? [
                                    m("input", {
                                        type: "checkbox",
                                        checked: List.allstatechecked,
                                        onclick: function() {
                                            var setComp = List.displayList("Active");
                                            if (setComp.length == 0) {
                                                List.allstatechecked = false;
                                                var setAct = List.displayList("Completed");
                                                for (var i = 0; i < setAct.length; i++) {
                                                    List.list[setAct[i].id].toggleState(),
                                                        List.list[setAct[i].id].tag = "Active"
                                                }
                                            } else {
                                                List.allstatechecked = true;
                                                for (var i = 0; i < setComp.length; i++) {
                                                    List.list[setComp[i].id].toggleState(),
                                                        List.list[setComp[i].id].tag = "Completed"
                                                }
                                            }
                                        }
                                    }),
                                ] : "", ),
                            m("input.form-control", {
                                type: "text",
                                placeholder: "What needs to be done?",
                                onkeydown: function(e) {
                                    if (e.keyCode == 13 && e.target.value != "") {
                                        List.addToList(e.target.value, false); 
                                        e.target.value = '';
                                        
                                    }
                                }
                            })
                        ]),
                        m("ul", vnode.children),

                    ]),

                    m("nav.nav navbar-default", [
                        m("p.navbar-text", "" + List.list.length + " item left"),
                        m("button.btn btn-default navbar-btn", { href: "/All", oncreate: m.route.link }, "All"),
                        m("button.btn btn-default navbar-btn", { href: "/Active", oncreate: m.route.link }, "Active"),
                        m("button.btn btn-default navbar-btn", { href: "/Completed", oncreate: m.route.link }, "Completed"),
                        m("button.btn btn-link navbar-btn[type=button]", {
                            onclick: function() {
                                var complete = List.displayList("Completed");
                                for (var i = 0; i < complete.length; i++) {
                                    List.removeFromList(complete[i].id);
                                }
                            }
                        }, "Clear Completed")
                    ])

                ),
                m("div.col-md-3")
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
// m("header", "todos"),
// m("div.jumbotron", [
//     m("input", {type: "checkbox", 
//         onclick: function(){
//         var setComp = List.displayList("All");
//                 for (var i = 0; i < setComp.length; i++) {
//                     List.markCompleted(setComp[i].id);
//                 }
//     } }),            
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
