// src/model/List
var m = require("mithril")
var Element = require("./ListElement")

    var ToDoList = {
        list: [],
        addToList: function(text) {
            element = new Element;
            element.add(this.list.length, "Active", text);
            this.list[this.list.length] = element;
            console.log(this.list[this.list.length - 1].text);
            console.log(this.list);
        },

        displayList: function(state) {
            var displayList = [];
        	if (state == "All"){
        		return this.list
        	}
                for (var i = this.list.length - 1; i >= 0; i--) {
                    console.log(i, this.list[i])
                    if (this.list[i].tag == state) {
                        displayList.push(this.list[i])
                    }
                }
            return displayList;
        },

        markCompleted: function(id) {
            this.list[id].tag = "Completed";
            console.log(this.list)
        },

         markActive: function(id) {
            this.list[id].tag = "Active";
            console.log(this.list)
        },

        removeFromList: function(id) {
            this.list.splice(id, 1);
            console.log(id)
            console.log(this.list)
        }
    }

module.exports = ToDoList;
