


const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');
const $identifierBeDone = $('#tasks-bedone').text(localStorage.length);
const $identifierSoone = $('#tasks-sone');
const $identifierDone = $('#tasks-done');
const $dellTask = $('#dellTask');


$formAddTask.on('submit', function(event) {
	event.preventDefault();

	let task = {
		id: new Date().getTime(),
		title: $('[name="title"]', this).val(),
		status: 1 // 1 - todo, 2 - in progress, 3 - done
	};

	addTask(task.id, task);
	

	localStorage.setItem(task.id, JSON.stringify(task));

	$modalAddTask.modal('hide');

	this.reset();
	addIdentifierBeDone();
});

for (let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) continue;

	const task = JSON.parse(localStorage[key]);

	addTask(task.id, task);
}

$dellTask.on('click',function(event){
console.log(this)


$('.list-group').empty();

localStorage.clear();
addIdentifierBeDone();
	
})



console.log(localStorage.length)



function addIdentifierBeDone(){
	$identifierBeDone.text(localStorage.length);
}
