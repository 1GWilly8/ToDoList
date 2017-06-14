// src/views/Layout.js
var m = require("mithril")
var List = require("../model/List");

module.exports = {
    oninit: function() {
        List.loadList();
        var actList = List.displayList("Active");
        console.log("---", List.allstatechecked);
          if (actList.length == 0) {
            console.log("t"),
            List.allstatechecked = true
          } else {
            console.log("f"),
            List.allstatechecked = false
          }
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
                                                List.toggleAllComp(false);
                                                List.allstatechecked = false;
                                                // List.allstatechecked = false;
                                                // var setAct = List.displayList("Completed");
                                                // for (var i = 0; i < setAct.length; i++) {
                                                //     List.list[setAct[i].id].toggleState()
                                                // }
                                            } else {
                                                List.toggleAllComp(true);
                                                List.allstatechecked = true;
                                                // List.allstatechecked = true;
                                                // for (var i = 0; i < setComp.length; i++) {
                                                //     List.toggleCompleted(setComp[i]._id, 
                                                //         setComp[i].checkboxstate)
                                                // }
                                            }
                                            List.loadList();
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
                                        List.loadList();
                                        m.redraw();
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
                                    List.removeFromList(complete[i]._id);
                                }
                                m.redraw();
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
