class API {
    async obtenerDatos() {
        //obtener datos desde la api
        const datos = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

        //retonar datos como json
        const respuestaJSON = await datos.json();

        return {
            respuestaJSON
        }
    }
}