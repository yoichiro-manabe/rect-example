console.log('list5 -- start');
Rx.Observable.from([1,2,3]).map(
    function(n){return n * 2;}
).subscribe(function(n){console.log(n);});
console.log('list5 -- end');