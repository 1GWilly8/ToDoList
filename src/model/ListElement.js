// src/model/ListElement
var m = require("mithril")

module.exports = function() {
	var Element = {
		id: -1,
		tag: "",
		text: "",
		checkboxState: false,

		add: function(tmpId, tmpTag, tmpText) {
			this.id = tmpId,
			this.tag = tmpTag,
			this.text = tmpText
		},

		toggleState: function() {
			this.checkboxState = !this.checkboxState
		}
	}

	return Element;
}