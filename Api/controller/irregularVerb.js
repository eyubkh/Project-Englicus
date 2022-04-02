const irregularVerbRoute = require('express').Router()
const verbs = require('../data/verbs.json')

irregularVerbRoute.get('/fill/basic', (request, response) => {
  const basic = verbs.filter(verb => verb.level === 'basic')
  response.status(200).send(basic)
})

module.exports = irregularVerbRoute
