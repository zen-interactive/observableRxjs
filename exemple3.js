var button = document.querySelector('button');
var label = document.querySelector('h4');

var clickStream = Rx.Observable.fromEvent(button, 'click');
clickStream.subscribe(() => label.textContent = 'OK!');