

// gettinga dom element
var titleElement = document.getElementById('title');
//console.log(titleElement.innerHTML);

// styling a dom element
titleElement.style.color = '#0033ff';
// adding event listeners to a dom element
titleElement.addEventListener('click', function(){
	title.style.color = '#FFAAAA';
});
// click 

// mouse over
var titleElement = document.getElementById('subtitle');
subtitle.addEventListener('mouseover', function(){
	subtitle.style.backgroundColor = '#ffa1a1';
})
// mouseout
var titleElement = document.getElementById('subtitle');
subtitle.addEventListener('mouseout', function(){
	subtitle.style.backgroundColor = 'inherit';
})
// hide
var starstuff = document.getElementsByClassName('sub_nav')[0];
starstuff.querySelectorAll('ul')[0].style.display = 'none';
starstuff.addEventListener('mouseover', function(){
	starstuff.querySelectorAll('ul')[0].style.display = 'block';
}) //show
starstuff.addEventListener('mouseout', function(){
	starstuff.querySelectorAll('ul')[0].style.display = 'none';
})

// add
//
// select the parent element to add to
var parentNavList = document.querySelector('nav ul');
//parentNavList.style.backgroundColor = red;

// create a new element

// var loginChild = document.createElement('li');
// loginChild.innerHTML = 'login';

// //add the new element to the parent element
// parentNavList.appendChild(loginChild);

// every time you click on some element
// add a new '<li>cat</li'>

// parentNavList.addEventListener('click', function(){
// 	var catChild = document.createElement('li');
// 	catChild.innerHTML = 'cat';
// parentNavList.appendChild(catChild);
// });




















