//Verifica se os dados dos livros foram preenchidos:
function validaForm(){
    var titulo  = document.getElementById('titulo');
    var autor   = document.getElementById('autor');
    var paginas = document.getElementById('paginas')

    if(titulo.value == '' || autor.value == '' || paginas.value == ''){
        alert('Para incluir livros nenhuma das informacoes podem estar vazias!')
    }
}

//Audios do auxiliar audivel
var audio1 = document.getElementById('infoTutorial')
function infoTutorial(){
    audio1.play();
}
function tutorial(){
    var audio = document.getElementById('tutorial')
    audio.play();
    audio1.pause();
    
}

//Cria elementos para alteração dos livros no formLivro.php
function alterar(){
    var alerta = document.getElementById('alerta');
    alerta.style.color = 'yellow';
    alerta.innerHTML = 'Verifique as informações do livro antes de alterar.'
    var codigo = document.getElementById('codigo')
    var titulo = document.getElementById('titulo')
    titulo.innerHTML = (`Alterar livros`)
    var opcao = document.getElementById('opcao');
    opcao.innerHTML = ('<input type="submit" value="Alterar" class="btn btn-warning" >')
    
    }

//Cria elementos para exclusão dos livros no formLivro.php
function excluir(){
    var alerta = document.getElementById('alerta');
    alerta.style.color = 'red';
    alerta.innerHTML = 'Verifique as informações do livro antes de excluir.'
    var inputCodigo = document.getElementById('inputCodigo')
    inputCodigo.value = `${iExcluir}`
    var titulo = document.getElementById('titulo')
    titulo.innerHTML = (`Excluir livros`)
    var opcao = document.getElementById('opcao');
    opcao.innerHTML = ('<input type="submit" value="Excluir" class="btn btn-danger">')
}

//Cria elementos para incluir livros no formLivro.php
function inserir(){
    document.getElementById('inputCodigo').style.display = 'none';
    var titulo = document.getElementById('titulo')
    titulo.innerHTML = ('Incluir livros')
    var opcao = document.getElementById('opcao');
    var titulo1 = document.getElementById('titulo1');
    titulo1.value = "";
    opcao.innerHTML = ('<input type="submit" onclick="validaForm();" value="Cadastrar" class="btn btn-success">')
    clearInterval(valVerfica);
    var infos = document.getElementById('infos');
    infos.innerHTML = "Complete as informações abaixo:"

}


var urlAtual = window.location.href;
var iExcluir = 0;
var iAlterar = 0;

function verifica(){
    ++iAlterar
    ++iExcluir
    if (urlAtual == "http://localhost/biblioteca/formLivro.php?acao=i&cod=null"){
        inserir();
        var autor = document.getElementById('autor');
        autor.value = "";
        
        clearInterval(valVerifica);
    }else if(urlAtual == `http://localhost/biblioteca/formLivro.php?acao=e&cod=${iExcluir}`){
        excluir();
        document.getElementById("titulo1").disabled = true;
        document.getElementById("autor").disabled = true;
        document.getElementById('inputCodigo').style.display = 'none';
        document.getElementById("numPaginas").disabled = true;
        clearInterval(valVerifica);
    }else if(urlAtual == `http://localhost/biblioteca/formLivro.php?acao=a&cod=${iAlterar}`){
        alterar();
        document.getElementById('inputCodigo').style.display = 'none';
        clearInterval(valVerifica);
    }
}

function verificaDados(){

    if(verificaTitulo == ''){
        infos.style.color = 'yellow';
        infos.innerHTML = 'Nenhum dos campos pode estar vazios!';
    }
}


var valVerfica = setInterval(verifica, alterar, 1);

