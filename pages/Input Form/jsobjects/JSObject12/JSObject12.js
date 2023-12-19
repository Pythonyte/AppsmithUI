export default {
	myVar1: [],
	QuestionTextjson: {},
	QuestionDeveloperName:{},
	QuestionDevAndText: {},

	myFun2 () {
		for (let i = 0; i < get_DFTOS.data.elements.length; i++) {
			for (let j = 0; j < get_DFTOS.data.elements[i].elements.length; j++) {				
				var QuestionDev  = get_DFTOS.data.elements[i].elements[j].customTypeDetails.discoveryFramework.questionDeveloperName.toString();
				var Questiontext  = get_DFTOS.data.elements[i].elements[j].customTypeDetails.discoveryFramework.questionText.toString();
				console.log(QuestionDev);
				this.QuestionDeveloperName[QuestionDev] = Questiontext;
				this.QuestionDevAndText[Questiontext] = QuestionDev
				QuestionDev = "";
			}
		}

		var temp =JSONForm1.formData;
		for (var key in JSONForm1.formData) {
			console.log(key + "KEY");
			console.log("VALUE: "+JSONForm1.formData[key]);
			temp[key]= this.QuestionDevAndText[key];

		}

		return temp;
	},
}