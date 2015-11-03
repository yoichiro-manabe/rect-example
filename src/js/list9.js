console.log('list9 -- start');

Rx.Observable.fromEvent(document, 'click').throttle(250)
    .subscribe(function(n){console.log(n);});

console.log('list9 -- end');