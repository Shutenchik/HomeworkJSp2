var testPage = {
    numQuestions: 3,
    numAnswers: 3,
    questions: [],
    answers: [],

    createAnswersList: function () {
        for (var i = 0; i < this.numQuestions; i++) {
            this.answers[i] = [];
        }
            return "Created answers list";
    },

    createQuestionList: function () {
    	for (var i = 0; i < this.numQuestions; i++) {
    		this.questions[i] = [];
    	}

    	return 'Created Question List';
    },

    addQuestion: function () {
    	this.questions[0] =  {"question": "Основные инструменты для фронтенд разработки"};
    	this.questions[1] = {"question": "Свойство для изменения размера шрифта"};
    	this.questions[2] = {"question": "Кто являеться создателем JavaScript?"};

		this.answers[0][0] = { "answer": "Html, PHP, JavaScript" };    	
		this.answers[0][1] = { "answer": "Java, CSS, Html"};
		this.answers[0][2] = { "answer": "Html, CSS, JavaScript" };

		this.answers[1][0] = { "answer": "Font-wieght" };
		this.answers[1][1] = { "answer": "Font-size" };
		this.answers[1][2] = { "answer": "Font-family" };

		this.answers[2][0] = { "answer": "Брендад Эйх" };
		this.answers[2][1] = { "answer": "Ларри Уолл" };
		this.answers[2][2] = { "answer": "Билл Гейтс" };

		return 'added question and answers';

    },

    generate: function () {
    	this.numQuestions();
    	this.numAnswers();

    	return 'Test created!';
    }
}

try {
	module.exports = testPage;
} catch (e){
	console.log('unit testing is successful!');
}
