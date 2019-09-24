This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Redux initial thoughts and learning outcomes:

1. Actions -> Reducers -> Stores
2. Reducers take current state and an action, and pop out a new state
3. You can access Stores through mapStateToProps in a connected component
4. State in store MUST be immutable

Random tidbits I picked up
- store.subscribe is a low-level API that you should avoid calling. `connect` from react-redux should handle that subscription logic for you
- It's kind of a pain to copy over nested objects and arrays to keep state immutable (syntax can get really nasty) so try to keep state as flat as possible. Recommendation is to store each object once, keyed by ID and other objects that need references to other objects should only store the ID rather than a copy of the entire object. Consider using a library to help keep your data normalized
- Redux is purely a state management library, you can use it with any view library or vanilla JS if you want, but you'll have to do more of the grunt work because you won't have react-redux bindings set up for you. 


