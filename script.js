/* Estilos generales para el cuerpo del documento */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilo para el encabezado */
.header {
    background-color: #333;
    padding: 10px;
    color: #fff;
}

.header__menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logoAlura {
    width: 150px;
}

/* Estilo para el área de presentación en desktop 1.html */
.presentacion {
    display: flex;
    justify-content: space-between;
    padding: 15px;
}

.presentacion__contenido {
    flex: 1;
    margin-right: 20px;
}

.presentacion__contenido__titulo {
    font-size: 24px;
    margin: 10px 0;
}

.titulo-destaque {
    color: #007BFF;
}

.presentacion__contenido__texto {
    margin: 10px 0;
}

.presentacion__enlaces__subtitulo {
    font-size: 18px;
    margin: 10px 0;
}

/* Estilo para los botones */
.Botones {
    margin: 20px 0;
}

.Boton_Encriptar, .Boton_Desencriptar, .Boton_Copiar, .Boton_Volver {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: #007BFF;
    text-decoration: none;
    border-radius: 5px;
    margin-right: 10px;
}

.Boton_Encriptar:hover, .Boton_Desencriptar:hover, .Boton_Copiar:hover, .Boton_Volver:hover {
    background-color: #0056b3;
}

.mensaje-validacion {
    color: red;
    font-size: 14px;
}

/* Estilo para la sección de resultados en codigo.html */
.presentacion_derecha {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.BuscarTexto {
    width: 200px;
}

#mensajeTextoVacio {
    display: none;
    color: red;
    font-size: 14px;
    margin-top: 10px;
}

/* Estilo para el pie de página */
.footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Estilo para los botones de copiar y volver en codigo.html */
.boton-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.boton-group .Boton_Copiar, .boton-group .Boton_Volver {
    margin: 0 10px;
}

/* Estilo para el resultado */
.resultado {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 100%;
    box-sizing: border-box;
    overflow: auto;
    background-color: #f9f9f9;
    word-break: break-word; /* Ajusta el texto para que no se desborde */
}

/* Estilo para el resultado */
.resultado {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 100%; /* Asegura que el ancho no exceda el contenedor */
    box-sizing: border-box;
    overflow: auto; /* Muestra una barra de desplazamiento si es necesario */
    background-color: #f9f9f9;
    word-break: break-word; /* Ajusta el texto para que no se desborde */
    max-height: 300px; /* Limita la altura máxima para evitar el crecimiento desproporcionado */
}

/* Estilo para el contenedor principal que envuelve los elementos */
.presentacion {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    box-sizing: border-box;
}

/* Ajuste del espacio en la parte inferior del contenedor de resultados */
.presentacion_derecha {
    margin-top: 20px; /* Asegura que haya un margen entre los resultados y los botones */
}

/* Estilo para los botones de copiar y volver */
.boton-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px; /* Espacio entre los botones */
}

