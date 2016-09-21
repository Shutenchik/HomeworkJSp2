var testPage = require('../app.js');


describe("testPage ", function() {
  it("createAnswersList", function() {
  	var result;
  	result = testPage.createAnswersList();
    expect(result).toBe('Created answers list');
  });

  it('createQuestionList', function () {
  	var result;
  	result = testPage.createQuestionList();
  	expect(result).toBe('Created Question List');
  });

  it('addQuestion', function () {
  	var result;
  	result = testPage.addQuestion();
  	expect(result).toBe('added question and answers');
  });

  it('Question array check', function () {
  	expect(testPage.numQuestions).toBeDefined();
  	
  });

  it('Answer array check', function () {
  	expect(testPage.numAnswers).toBeDefined();
  });

  it('Answers quantity', function () {
  	expect(testPage.numAnswers).toBe(3);
  })



});
