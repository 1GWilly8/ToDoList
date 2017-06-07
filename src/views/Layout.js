// src/views/Layout.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    //keystrokes: "",
    view: function(vnode) {
        return m("main.layout", [
            m("header.title", "todos"),
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
                m("div", "" + List.listLen + " item left"),
                m("a", { href: "/All", oncreate: m.route.link }, "All"),
                m("a", { href: "/Active", oncreate: m.route.link }, "Active"),
                m("a", { href: "/Completed", oncreate: m.route.link }, "Completed"),
                m("a", {
                    oninput: function() {

                    }
                }, "Clear Completed")
            ])
        ])
    }
}


// m("nav.menu", [
//     m("a[href='#!/list']", {oncreate: m.route.link}, "Users")
// ]),
// m("section", vnode.children)
