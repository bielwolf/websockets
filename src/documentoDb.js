import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

function adicionarDocumento(nome) {
    const resultado = documentosColecao.insertOne({
        nome,
        texto: "",
    });

    return resultado;
};

function encontrarDocumento(nome) {
    const documento = documentosColecao.findOne({
        nome
    });

    return documento;
}

function excluirDocumento(nome) {
    const resultado = documentosColecao.deleteOne({
        nome
        });

    return resultado;
}

function atualizaDocumento(nome, texto) {
    const atualizacao = documentosColecao.updateOne({
        nome
        }, {
            $set: {
                texto
        }
    });

    return atualizacao;
}

export { encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento, excluirDocumento };  