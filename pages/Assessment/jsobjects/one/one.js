export default {
	myVar1: [],
	QuestionTextjson: {},
	QuestionDeveloperName:{},



	myFun1 () {
		get_DFTOS.run();
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
	fetchElementDetails () {
		get_DFTOS.run();
		for (let i = 0; i < get_DFTOS.data.elements.length; i++) {
			if(get_DFTOS.data.elements[i].type === "Step"){
				var stepElement = get_DFTOS.data.elements[i].name;
				this.QuestionTextjson[stepElement] = {};
				for (let j = 0; j < get_DFTOS.data.elements[i].elements.length; j++) {		
					var currentElement = get_DFTOS.data.elements[i].elements[j];
					var Questiontext  = currentElement.customTypeDetails.discoveryFramework.questionText.toString();
					var QuestionDev  = currentElement.customTypeDetails.discoveryFramework.questionDeveloperName.toString();
					if(currentElement.data.elements.length === 0)
					{
						this.QuestionTextjson[stepElement][Questiontext] = "";
					}
					else{
						this.QuestionTextjson[stepElement][Questiontext] = {};
						for (let k = 0; k < currentElement.data.elements[i].elements.length; k++) {		
							var childElement = currentElement.data.elements[i].elements[j];
							var childQuestiontext  = childElement.customTypeDetails.discoveryFramework.questionText.toString();
							var childQuestionDev  = childElement.customTypeDetails.discoveryFramework.questionDeveloperName.toString();
							this.QuestionTextjson[stepElement][Questiontext][childQuestiontext] = "";
					  }
				}
				console.log(this.QuestionDeveloperName);
			}
			
			return this.QuestionTextjson;
		}
	}
}