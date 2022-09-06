const { getProduCart, addProduCart, newCart, deleteCart, DeleteProdu } = require('./model');


module.exports = {
    async newCart(req, res) {
        await newCart({ Fecha: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}` })
    },
    async deleteCart(req, res) {
        const id = req.params.id;
        await deleteCart(id);
    },
    async getCartProd(req, res) {
        const id = req.params.id;
        await getProduCart(id)

    },
    async addProduct(req, res) {
        //Comentar sobre inconcistencia con la tarea
        const id = req.params.id;
        const producto = {
            Nombre: req.body.Nombre,
            Descripcion: "",
            Codigo: req.body.Codigo,
            Foto: req.body.URLimg,
            Precio: req.body.Precio,
            Stock: req.body.Stock,
            Fecha: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
        }
        await addProduCart(id, producto)
    },
    async deleteCartProd(req, res) {
        const id= req.params.id;
        const idProdu= req.params.id_prod;
        await  DeleteProdu(id, idProdu)
    }

}