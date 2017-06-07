// src/model/ListElement
var m = require("mithril")

module.exports = function() {
	var Element = {
		id: -1,
		tag: "",
		text: "",

		add: function(tmpId, tmpTag, tmpText) {
			this.id = tmpId,
			this.tag = tmpTag,
			this.text = tmpText
		},

		displayId: function() {

		},

		displayTag: function() {

		},

		displayText: function() {
			return this.text
		}		
	}

	return Element;
}