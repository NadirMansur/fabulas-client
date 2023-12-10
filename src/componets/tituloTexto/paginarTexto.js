

const paginarTexto = (texto, caracteresPorPagina) => {
    const palabras = texto.split(" ");
    const paginas = [];
    let paginaActual = "";
  
    palabras.forEach((palabra) => {
      if (paginaActual.length + palabra.length + 1 <= caracteresPorPagina) {
        if (paginaActual !== "") {
          paginaActual += " ";
        }
        paginaActual += palabra;
      } else {
        paginas.push(paginaActual);
        paginaActual = palabra;
      }
    });
  
    if (paginaActual !== "") {
      paginas.push(paginaActual);
    }
  
    return paginas;
  }
  
  export default paginarTexto;