console.log('list4 -- start');
Rx.Observable.from([1,2,3]).subscribe(
    function(n){console.log(n)},
    function(error){console.log('error')},
    function(){console.log('completed')}
);
console.log('list4 -- end');