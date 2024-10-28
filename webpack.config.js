const path = require('path');

module.exports = {
    entry: "src/script.js", // Certifique-se de que o caminho está correto
    output: {
        filename: 'bundle.js', // Nome do arquivo de saída
        path: path.resolve(__dirname, 'dist'), // Diretório de saída
    },
    mode: 'development', // Adicione isso para definir o modo
};
