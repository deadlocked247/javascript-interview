# Front-End Interview Review

## Javascript Questions

### Redux
Actions – Helper methods that facilitate passing data to the Dispatcher

Dispatcher – Receives actions and broadcasts payloads to registered callbacks

Stores – Containers for application state & logic that have callbacks registered to the dispatcher

Controller Views – React Components that grab the state from Stores and pass it down via props to child components.

Polymorphism - It is the practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones. Polymorphism takes advantage of inheritance in order to make this happen.

A polyfill is a browser fallback, made in javascript, that allows functionality you expect to work in modern browsers to work in older browsers.

### Event loop

Javascript has a process that constantly checks whether the call stack is empty, and whenever it’s empty, it checks if the event queue has any functions waiting to be invoked. If it does, then the first function in the queue gets invoked and moved over into the call stack. If the event queue is empty, then this monitoring process just keeps on running indefinitely - the event loop.

### What happens when you visit a URL

1. browser checks cache; if requested object is in cache and is fresh
1. browser asks OS for server's IP address
1. OS makes a DNS lookup and replies the IP address to the browser
1. browser opens a TCP connection to server (this step is much more complex with HTTPS)
1. browser sends the HTTP request through TCP connection
1. browser receives HTTP response and may close the TCP connection, or reuse it for another request
1. browser checks if the response is a redirect or a conditional response (3xx result status codes),
1. authorization request (401), error (4xx and 5xx), etc.; these are handled differently from normal responses (2xx)
1. if cacheable, response is stored in cache
1. browser decodes response (e.g. if it's gzipped)
1. browser determines what to do with response (e.g. is it a HTML page, is it an image, is it a sound clip?)
1. The browser then uses HTML parser to re-create document structure which is later presented to you on screen.
1. If it finds references to external resources, such as pictures, css files, javascript files, these are is delivered the same way as the HTML document itself.

### React Stuff

`ComponentDidMount`
Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.

`ComponentWillReceiveProps (nextprops)`
Invoked when a component is receiving new props. This method is not called for the initial render.

`ShouldComponentUpdate (next props, next state)`
Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used.

`ComponentWillUpdate (next props, next state)`
Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.

`ComponentDidUpdate (prev props, prev state)`
Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.




`ComponentDidUnmount`
Invoked immediately before a component is unmounted from the DOM.


### `call` and `apply`
`call` lets you bind an arbitrary number of objects to bind to, apply requires an array of values for its second argument

```
func.apply(valueForThis, arrayOfArgs)
func.call(valueForThis, arg1, arg2, ...)
```

### Event Delegation
DOM event delegation is a mechanism of responding to ui-events via a single common parent rather than each child, through the magic of event "bubbling".

```
<ul onclick="alert(event.type + '!')">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

`arguments` is not an array rather an array like object. It has length but doesn't have the methods like forEach, indexOf, etc.

> Get max of an array with apply

```
function getMax(arr){
  return Math.max.apply(null, arr);  
}
```

### `this`
At the time of execution of every function, JavaScript engine sets a property to the function called this which refer to the current execution context.
`this` always refers to an object and depends on how function is called.

### Some rules with `this`
In the global context or inside a function this refers to the window object.
Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined. To pass access window inside IIFE with "use strict", you have to pass this.
While executing a function in the context of an object, the object becomes the value of this
Inside a setTimeout function, the value of this is the window object.
If you use a constructor (by using new keyword) to create an object, the value of this will refer to the newly created object.
You can set the value of this to any arbitrary object by passing the object as the first parameter of bind, call or apply
For the DOM event handler, value of this would be the element that fired the event

### Silly Javascript stuff
```
typeof arguments === ‘Object’
Typeof null === ‘Object’
Typeof [] === ‘Object’

[1,2,3,4].indexOf('3');
 = -1

[{a:1}, {b:2}].indexOf({b:2});
 = -1

```


### Scope, binding example
We want to print out 1 to 5 with timeouts in between.

```
for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
}
```

> Prints 6 five times at 1 second intervals
> Correct solution

```
for(var i = 0; i < 10; i++) {
  setTimeout(console.log.bind(console, i), 10);
}

// or this with let block scoping

for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
}
```


### `bind`
`bind` creates a new function that will have `this` set to the first parameter passed to `bind()`.

### Client vs server side rendering

Pros of server side
* Your content is visible to search engines like Google.
* The page loads faster. There's no "white page" while the browser downloads the rendering code and data and runs the code.
* It maintains the idea that pages are documents, and if you ask a server for a document by URL, you get back the text of the document rather than a program that generates that text using a complicated API.

Pros of client side
* Update the screen instantly when the user clicks, rather than waiting a few hundred milliseconds at least while the server is contacted to ask what to display.


**Best is to render the initial state of the page on the server, interactive widgets and all, and then re-render the parts that need to be updated on the client.**

### Closure
The local variable for a function — kept alive after the function has returned,
a stack-frame which is not deallocated when the function returns (as if a 'stack-frame' were malloc'ed instead of being on the stack!).

### `eval`
Evaluate/Execute JavaScript code/expressions

```
var adder = new Function('a', 'b', 'return a + b');
adder(2, 6); // logs 8

```

### `delete`

```
// Logs 20.99
var myObject = {
    price: 20.99,
    get_price : function() {
        return this.price;
    }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;

delete customObject.price;
console.log(customObject.get_price()); // undefined
```

### Pass by reference or value?

Primitive type (string, number, etc.) are passed by value and objects are passed by reference.

### Currying

Currying is partial invocation of a function. Currying means first few arguments of a function is pre-processed and a function is returned. The returning function can add more arguments to the curried function. It's like if you have given one or two spice to the curry and cooked little bit, still you can add further spice to it.

```
function addBase(base){
  return function(num){
    return base + num;
  }
}

var addTen = addBase(10);
addTen(5); //15
addTen(80); //90
addTen(-5); //5
```

### Async
Async is about the *gap* between now and later.
But parallel is about things being able to occur simultaneously.

### Public and private

```
var Module = (function(){
    var privateProperty = 'foo';

    function privateMethod(args){
        // do something
    }

    return {

        publicProperty: '',

        publicMethod: function(args){
            // do something
        },

        privilegedMethod: function(args){
            return privateMethod(args);
        }
    };
})();

```

### `indexOf`

```
// Start searching from an index
[1,2,3,4,5,4,3,2,1].indexOf(3, 4)
= 6
```

### `slice` and `splice`

slice returns the sliced array but doesn't change the original array
splice changes the original array

```
[1,2,3, 4].some(function(elem, index, arr){
    return elem >3;
  });
  = true;

[1,2,3, 4].every(function(elem, index, arr){
    return elem >0;
  });
  = true;

[1, 2, 3, 4].reduce(function(sum, el, idx, arr){
  return sum + el;
})
 = 10

[1, 2, 3, 4].reduce(function(sum, el, idx, arr){
  return sum + el;
}, 100)
 = 110
```

### `Object.create()`

```
var anotherObject = {
    a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );

myObject.a; // 2


var anotherObject = {
    a: 2
};

var myObject = Object.create( anotherObject );

anotherObject.a; // 2
myObject.a; // 2

anotherObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "a" ); // false

myObject.a++; // oops, implicit shadowing!

anotherObject.a; // 2
myObject.a; // 3

myObject.hasOwnProperty( "a" ); // true

```

### Prototypes

Difference between `__proto__` and `prototype`

`__proto__` is the actual object that is used in the lookup chain to resolve methods, etc.
`prototype` is the object that is used to build `__proto__` when you create an object with new:

```
( new Foo ).__proto__ === Foo.prototype
( new Foo ).prototype === undefined
```

```
function Foo() { /* .. */ }
Foo.prototype = { /* .. */ }; // create a new prototype object

var a1 = new Foo();
a1.constructor === Foo; // false!
a1.constructor === Object; // true!


// pre-ES6
// throws away default existing `Bar.prototype`
Bar.prototype = Object.create( Foo.prototype );

// ES6+
// modifies existing `Bar.prototype`
Object.setPrototypeOf( Bar.prototype, Foo.prototype );

//
Foo.prototype.isPrototypeOf( a ); // true
Object.getPrototypeOf( a ) === Foo.prototype; // true
a.__proto__ === Foo.prototype; // true

```

### The DOM
The DOM specifies how XML and HTML documents are represented as objects, so that they may be used in object oriented programs.

The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.


### More closure examples

```

function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
    };

    //tuce is *not* visible out here
};

function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
    };

    //nish *is* visible out here
};

function foo() {
    var a = 2;

    function bar() {
        console.log( a );
    }

    return bar;
}

var baz = foo();

baz();
// bar still has a reference to a, that is closure

```

Closure lets the function continue to access the lexical scope it was defined in at author-time.


### Cross origin requests
A resource makes a cross-origin HTTP request when it requests a resource from
a different domain than the one which the first resource itself serves.

### Thread safety
Code is not thread safe when it performs an operation that relies on the
underlying state not being changed by another thread without guaranteeing
that the state cannot be changed by another thread.

The simplest means of making something thread safe is to only access the state from a single thread.
Since the stack, and thus all local variables, are within the scope of a single thread,
code that doesn't access object fields (either directly or indirectly) and only accesses local variables,
is inherently thread safe.

The next simplest means of making something thread safe is to make it immutable.
When no thread is able to change the state of a field or object, the state is inherently thread safe.


### Concurrency
Concurrency means that an application is making progress on more than one task at the same time (concurrently).

### Threads
> Do threads have its own stack and heap memory

All threads share a common heap.

Each thread has a private stack, which it can quickly add and remove items from.
This makes stack based memory fast, but if you use too much stack memory,
as occurs in infinite recursion, you will get a stack overflow.

Since all threads share the same heap, access to the allocator/deallocator must
be synchronized. There are various methods and libraries for avoiding allocator
contention.

### SSH
Secure Socket Shell is a network protocol that lets you
secure way to access a remote computer.

SSH also refers to the suite of utilities that implement the protocol


## Algorithms

## Graphs

### Depth-first Search

`O(|E|)`
Algorithm to traverse a tree. Start at the root and explore as far as possible before backtracking.
Uses a stack.

```
1  procedure DFS-iterative(G,v):
2      let S be a stack
3      S.push(v)
4      while S is not empty
5            v = S.pop()
6            if v is not labeled as discovered and not in stack:
7                label v as discovered
8                for all edges from v to w in G.adjacentEdges(v) do
9                    if w is not labeled as discovered : S.push(w)
```

### Breadth-first Search

`O(|E|)`
Algorithm to traverse a tree. Start at the root and visits all neighbors before moving to next level;
Uses Queue.

```
Breadth-First-Search(Graph, root):
 2
 3     for each node n in Graph:            
 4         n.distance = INFINITY        
 5         n.parent = NIL
 6
 7     create empty queue Q      
 8
 9     root.distance = 0
10     Q.enqueue(root)                      
11
12     while Q is not empty:        
13     
14         current = Q.dequeue()
15     
16         for each node n that is adjacent to current:
17             if n.distance == INFINITY:
18                 n.distance = current.distance + 1
19                 n.parent = current
20                 Q.enqueue(n)
```

### Prim's

A greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.
`O(|V|^2)`

### Kruskal's

A minimum-spanning-tree algorithm which finds an edge of the least possible weight that connects any two trees in the forest.
`O(logV)`

### Bellman-Ford

An algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers
`O(|V||E|)`

### Floyd–Warshall

An algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles).
`O(|V|^3)`

### Dijkstra's
An algorithm for finding the shortest paths between nodes in a graph.
`O(|E| + |V|log|V|)`

## Maximum Flow
This involves finding a feasible flow through a single-source, single-sink flow network that is the maximum. The maximum value of an s-t flow (i.e., flow from source s to sink t) is equal to the minimum capacity of an s-t cut (i.e., cut severing s from t) in the network

## Ford–Fulkerson
A greedy algorithm that computes the maximum flow in a flow network
`O(Ef)` where f is the maximum flow of the graph

## Data Strutures

### Array
<!-- language: lang-js -->
```
var array = ["a", "b", "c"];
// array = [a, b, c]

array[0] = "z";
// array = [z, b, c]

array.splice(0, 1);
// array = [b, c]
```

* Access by index `O(1)`
* Search by value `O(n)`
* Insert `O(n)`
* Delete `O(n)`

### Trees
* A *tree* is an undirected, connected, acyclic graph
* A *forest* has multiple distinct trees
* An *n-ary* tree has atm ost n children per node

### Binary Tree
* A *binary tree* has nodes with at most 2 children (designated left & right)
* **Full**: every node has 0 or 2 children
* **Complete**: every level, except possibly the last, is filled, and the last level's nodes are as far left as possible
	* *Number of internal nodes: floor(n/2)*
* Traversals
	* **Pre-order**: open current, visit left subtree, visit right subtree
	* **In-order**: visit left subtree, open current, visit right subtree (returns sorted list)
	* **Post-order**: visit left subtree, visit right subtree, open current
	* **Level-order**: breadth-first traversal, level by level

## Concepts
## Dynamic Programming
* A general method for solving a problem with optimal substructure by breaking it down into overlapping subproblems

* **Top-down**: memoize (store) solutions to subproblems and solve problem recursively

* **Bottom-up**: build up subproblems from base case up and avoid recursive overhead
	* Order subproblems by topologically sorting DAG of dependencies

* Knapsack problem, longest common subsequence, coin change, edit distance, minimum number of jumps, longest palindrome substring, balanced partition
