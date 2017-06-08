// src/views/Layout.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    //keystrokes: "",
    view: function(vnode) {
        return m("main.layout", [
            m("header.title", "todos"),
            m("div", [
                m("input", {type: checkbox, onclick: })            
                m("input.input", {
                    placeholder: "What needs to be done?",
                    onkeydown: function(e) {
                        if (e.keyCode == 13 && e.target.value != "") {
                            List.addToList(e.target.value);
                            e.target.value = '';
                            console.log("List.list is now equal to: ", List.list)
                        }
                    }
                }),
                m("ul.dynamicList[id='ulList']", vnode.children),
                // m("ul.dynamicList[id='ulList']", [
                //     List.list.map(function(text) {
                //         return m("li", [
                //             m("div", [
                //                 m("input", { type: "checkbox" }),
                //                 m("div.task", text)
                //             ])
                //         ])
                //     })
                // ]),
                m("nav.menu", [
                    m("div", "" + List.list.length + " item left"),
                    m("a", { href: "/All", oncreate: m.route.link }, "All"),
                    m("a", { href: "/Active", oncreate: m.route.link }, "Active"),
                    m("a", { href: "/Completed", oncreate: m.route.link }, "Completed"),
                    m("button[type=button]", {
                        onclick: function() {
                            // List.list = [];
                            // List.listLen = 0;
                            var complete = List.displayList("Completed");
                            for (var i = 0; i < complete.length; i++) {
                                List.removeFromList(complete[i].id);
                            }
                        }
                    }, "Clear Completed")
                ])
            ])
        ])
    }
}


// m("nav.menu", [
//     m("a[href='#!/list']", {oncreate: m.route.link}, "Users")
// ]),
// m("section", vnode.children)
