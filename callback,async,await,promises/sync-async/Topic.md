what is promise ?

what is then and catch ()?
then is calls when resolve got success,

how promise works ?
promise like an new object so we need to add the new keyword infront of the Promise, promise accepts a callback function, that call back function accepts the 2 params (resolve,reject).
before that value should be in states:-
pending state.
fullfill state
reject state

resolve() → success -> then: function(){} (success handler),
reject() → failure -> catch: function(){} (error handler),

whenever you store the promise variable then it is treated as the promise variable only.
promise object in-built methods :

then: function(){},
catch: function(){},
finally: function(){},
state: 'pending'
