const routes = (app) => {
  app.route('/contact')
    .get((req, res) => {

      res.send('GET works')
    }
    )

    .post((req, res) =>
      res.send('POST works')
    )

  app.route('/contact/:contactId')

    .put((req, res) =>
      res.send('PUT works')
    )

    .delete((req, res) =>
      res.send('DELETE works')
    )
}

export default routes