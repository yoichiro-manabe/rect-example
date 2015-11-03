console.log('list3 -- start');
var stream = Rx.Observable.create(function(subscriber){
    subscriber.onNext(42);
    subscriber.onCompleted();
});

stream.subscribe(function(n){console.log(n);});
console.log('list3 -- end');