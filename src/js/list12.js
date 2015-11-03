console.log('list12-20 -- start');

var inputStream =
    Rx.Observable.fromEvent($('#query'), 'input')
        .map(function (e) {
            return e.target.value;
        });

inputStream.subscribe(function(e){console.log("bbbbb" + e);});

var queryStream = inputStream
    .throttle(300)
    .filter(function(text){return text.length > 0;})
    .distinctUntilChanged()
    .map(function(text){
        console.log("text:" + text);
        return 'https://api.github.com/search/repositories?&q=' + text;
    });

var executingStream = new Rx.Subject();

var repositoriesStream = queryStream
    .flatMap(function(query){
        executingStream.onNext(true);
        return Rx.observable.fromPromise($.ajax({url:query}))
            .finally(function(){executingStream.onNext(false)});
    })
    .map(function(res){
        return res.items;
    });

executingStream.subscribe(function(executing){
   if(executingStream){
       $('#result').prepend('loading...');
   }
});

repositoriesStream.subscribe(function(repos){
    console.log(repos);
});

console.log('list12-20 -- end');