This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Redux thoughts and learning outcomes:

1. Actions -> Reducers -> Stores
2. Reducers take current state and an action, and pop out a new state
3. You can access Stores through mapStateToProps in a connected component
4. State in store MUST be immutable
5. Redux-thunk is middleware that lets your action creators return functions, this is powerful in a lot of ways the main one i'm seeing right now is that you can handle all of the logic for async actions within the action creator itself instead of in component logic
6. Flux standard actions are cool and all, but it seems like it doesn't really handler errors and pending states in a 'promise-like' function, which is kind of like how an action might need to be have if making a fetch to an API.

Random tidbits I picked up
- store.subscribe is a low-level API that you should avoid calling. `connect` from react-redux should handle that subscription logic for you
- It's kind of a pain to copy over nested objects and arrays to keep state immutable (syntax can get really nasty) so try to keep state as flat as possible. Recommendation is to store each object once, keyed by ID and other objects that need references to other objects should only store the ID rather than a copy of the entire object. Consider using a library to help keep your data normalized
- Redux is purely a state management library, you can use it with any view library or vanilla JS if you want, but you'll have to do more of the grunt work because you won't have react-redux bindings set up for you. 
- For functional components, the first parameter passed in is your props. If there are a bunch of props is there a good way of condensing those down? Code could get ugly
- FSA payloads and metadata field are a good idea, otherwise we can get the wild west in Action properties
- MapDispatchToProps needs to be defined outside of a functional component because the connect HOF needs it as a parameter (easy careless mistake)


Stuff I don't know:
- How the heck does middleware work under the hood
- I threw the logger middleware in there for fun, but don't know how to configure it for prod. Should probably be well documented somewhere though