$(function () {

	// first part

	var $input = $('.searchInput');
	var $button = $('.searchButton');
	var $content = $('.content');

	function appendResultToPage(page, image) {
			$content.append('<div class="pixabay-box"><a href="'+ page +'" target="_blank"><img src="' + image + '"></a></div>');
	};
	
	function cantFoundResult() {
			$content.append('<div class="pixabay-box"><p>Image not found</p></div>');
	}

	function deleteResultRequestFromHtml() {
		
		$('.pixabay-box').remove();
	}

function getDataSearchRequest() {

		deleteResultRequestFromHtml();
		
	$.ajax({
		url: 'https://pixabay.com/api/?key=3044055-26f05a0ce42eac2412c64079c&q=' + encodeURIComponent($input.val()),
		dataType: 'jsonp',

		success:	function (data) {

			if ( $input.val() === '') {
				 return false;
				} else 

			if ( parseInt(data.totalHits) > 0 ) 
				$.each( data.hits, function(URL, hit) {

					appendResultToPage ( hit.pageURL, hit.previewURL );

				});
			
			else {
				 cantFoundResult ();
				}
		}
	});
};

	$input.keydown(function(event) {
		if ( event.keyCode == 13) {
			getDataSearchRequest();
		}
	});

$button.on('click', getDataSearchRequest ); 


	// second part
 var Human = function (info){
 		this.name = info.name;
 		this.age = info.age;
 		this.sex = info.sex;
 		this.height = info.height;
 		this.weight = info.weight;
 };


 function Worker(info) {
 	Human.apply(this, [info]);
 	this.job = info.job; 
 	this.salary = info.salary;

}; 

function Student (info) {
	Human.apply(this, [info]),
	this.study = info.study;
	this.scholarships = info.scholarships;
	
};

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.toWork = function () {
	
	console.log(this.name + ' is working');
}


Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.toWatch = function () {
	console.log (this.name + ' is watching TVShow');
}


var Tom = {
	name: 'Tom',
	age: 23,
	sex: 'male',
	height: 185,
	weight: 93,
	job: ' system analyst',
	salary: 10000,
	study: 'KPI',
	scholarships: 1000

};

var Jack = {
	name: 'Jack',
	age: 25,
	sex: 'male',
	height: 176,
	weight: 72,
	job: 'programmer',
	salary: 12000,
	study: 'Garvard',
	scholarships: 2000

};

var Aria = {
	name: 'Aria',
	age: 16,
	sex: 'female', 
	height: 165,
	weight: 56,
	job: 'killer', 
	salary: 13000,
	study: 'temple faceless',
	scholarships: 500
};

var Harry = {
	name: 'Harry',
	age: 17,
	sex: 'male',
	height: 175,
	weight: 65,
	job: 'Student',
	salary: 0,
	study: 'Hogwarts Academy',
	scholarships: ' 100 galleons'
}

var newWorker = new Worker (Tom);
var newStudent = new Student (Jack);
var HarryPotter = new Student(Harry);
var Aria = new Worker (Aria);

console.log(newWorker);
console.log(newStudent);
console.log(HarryPotter);
console.log(Aria);
newWorker.toWork();
newStudent.toWatch();

});
