const testHandlerGet = (req, res) => {
    res.send('hello world')
}

const testHandlerParam = (req, res) => {
    res.send(req.params)
}

const testHandlerPost = (req, res) => {
    const data = req.body
    res.send(data)
}

export {
    testHandlerGet,
    testHandlerParam,
    testHandlerPost
}