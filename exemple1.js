var source = Rx.Observable.interval(400).take(2)
    .map(i => ['3', '2', 9, 'foo', 5, 'bar', 8, '13'][i]);
var result = source;
result.subscribe(x => console.log(x));