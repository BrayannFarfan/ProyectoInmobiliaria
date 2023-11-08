export const handleNotFound = ( req, res, next ) => {
    res.status( 404 ).json({
        msg: 'Ruta no encontrada'
    })
}