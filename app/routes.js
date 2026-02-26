module.exports = function (router) {

  router.post('/name-answer', function (req, res) {
    res.redirect('/email')
  })

  router.post('/email-answer', function (req, res) {
    res.redirect('/over-18')
  })

  router.post('/over-18-answer', function (req, res) {
    var answer = req.session.data['over-18']
    if (answer === 'yes') {
      res.redirect('/devices')
    } else {
      res.redirect('/ineligible')
    }
  })

  router.post('/devices-answer', function (req, res) {
    res.redirect('/check-answers')
  })

  router.post('/submit', function (req, res) {
    res.redirect('/confirmation')
  })

}
