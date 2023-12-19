export default {
	myVar1: [],
	QuestionTextjson: {},
	QuestionDeveloperName:{},

	myFun1 () {
		for (let i = 0; i < get_DFTOS.data.elements.length; i++) {
			for (let j = 0; j < get_DFTOS.data.elements[i].elements.length; j++) {				
				var Questiontext  = get_DFTOS.data.elements[i].elements[j].customTypeDetails.discoveryFramework.questionText.toString();
				var QuestionDev  = get_DFTOS.data.elements[i].elements[j].customTypeDetails.discoveryFramework.questionDeveloperName.toString();
				this.QuestionTextjson[Questiontext] = "";
			}
			console.log(this.QuestionDeveloperName);
			return this.QuestionTextjson;
		}
	},
}