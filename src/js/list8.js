console.log('list8 -- start');

Rx.Observable.from(['search！']).flatMap(function(param){
    var url = 'https://cors-test.appspot.com/test';
    var promise = $.ajax(url);
    return Rx.Observable.fromPromise(promise);
}).subscribe(function(res){console.log(res)});

console.log('list8 -- end');