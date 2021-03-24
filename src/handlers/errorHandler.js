exports.notFound = (req, res, next) => {
    res.status = 404;
    res.json({ error: true, message: 'Recurso não encontrado' })
}