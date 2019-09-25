export default store => next => action => {
  const { callAPI, payload } = action

  if (!callAPI) return next(action)

  let options = {};
  if (payload) {
    options.method = 'POST'
    options.body = JSON.stringify(payload)
    options.headers = {
      'Content-Type': 'application/json'
    }
  }

  fetch(callAPI, options)
    .then(res => res.json())
    .then(response => next({
        ...action, response
    }))
}
