# Redux-Middleware

Middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. They have the oppotunity for logging, crash reporting, talking to an asynchronous API, routing, and more.

#### Redux Cycle -

```
React --> calls action creator --> returns action --> sent to middlewares --> forward action to reducers --> produces new state --> sent back to React for the component to re-render
```

#### Goals of Users List App -
(revolves more around middleware than the React view layer)

- Create an Ajax request to load a list of users and show one badge/profie component per user.
- On each of these user profile, we should have user's name, their company's name and a button that allows to open email client and send email to that particular user.

#### API end-point for fetching the list of users - 
`JSONPlaceholder` which will return static list of users.

Made an axios.get request from [Link](https://jsonplaceholder.typicode.com/users)