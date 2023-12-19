export default {
	myVar1: [],
	QuestionTextjson: {},
	QuestionDeveloperName:{},
	QuestionDevAndText: {},
	QuestionTextAndDev: {},
	finalpost:{},



	myFun1 () {
		get_DFTOS.run();
		for (let i = 0; i < get_DFTOS.data.elements.length; i++) {
			for (let j = 0; j < get_DFTOS.data.elements[i].elements.length; j++) {				
				var Questiontext  = get_DFTOS.data.elements[i].elements[j].customTypeDetails.discoveryFramework.questionText.toString();
				var QuestionDev  = get_DFTOS.data.elements[i].elements[j].customTypeDetails.discoveryFramework.questionDeveloperName.toString();
				this.QuestionDevAndText[QuestionDev] = Questiontext;
				this.QuestionTextAndDev[Questiontext] = QuestionDev;
			}

			for (var key in JSONForm1.formData) {
				this.finalpost[this.QuestionTextAndDev[key]] = JSONForm1.formData[key];
				this.QuestionDevAndText[key] = JSONForm1.formData[key];

			}
			return this.finalpost;
		}
	},
}