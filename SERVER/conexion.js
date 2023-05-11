const sql = require('mssql');

// Configura la cadena de conexión
const connectionString = 'server=DESKTOP-2VMTS8V\\SQLEXPRESS;Database=ReporteElectrico;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';

function conexion(){
    
    // Establece la conexión utilizando la cadena de conexión
    sql.connect(connectionString)
      .then(pool => {
        console.log('Conexión exitosa a la base de datos.');
    
        // Aquí puedes realizar operaciones en la base de datos
    
        // Cierra la conexión al finalizar
        sql.close();
      })
      .catch(error => {
        console.error('Error al conectar a la base de datos: ', error);
      });
}

module.exports = conexion;