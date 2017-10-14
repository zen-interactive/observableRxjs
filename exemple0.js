let Observable = Rx.Observable;

/*
 * Méthode avec Observable
 */
let values = Observable.create((observer) => {
  // synchrone
  observer.next("premier");
  observer.next("second");
  observer.next(2017);
  
  // asynchrone
  setTimeout(() => observer.next("asynchrone"), 3000);
});

/*
 * Méthode avec générateur 
 */
 
function* fruits(){
  yield("pommes");
  yield("poires");
  yield("mangues");
}
 
let iteration = fruits();
 
// objet complet
console.log(iteration.next());
 
// uniquement le nom
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);
  
// undefined
console.log(iteration.next().value);
