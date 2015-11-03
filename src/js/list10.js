console.log('list10 -- start');

var stream1 = Rx.Observable.from([1,2,3,4,5]);
var stream2 = Rx.Observable.from([10, 20, 30]);
Rx.Observable.merge(stream1, stream2).subscribe(function(n){console.log(n);});

console.log('list10 -- end');