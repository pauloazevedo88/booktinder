function Library(){  // classe Library  
    this.books = new Queue();
    this.viewdbook = new Queue();
    this.actualbook = null; //null -> atributo vazio
   
    this.addBooks = function(book){ 
        // this.books.push(book) //estou a empurrar book para o array books
        this.books.enqueue(book);
    }
    this.nextBook = function(){
        this.actualbook = this.books.dequeue();
        if(this.actualbook != null){ 
        this.actualbook.render();
        this.viewdbook.enqueue(this.actualbook);
        }else{
            $("#mainPage").hide();
            $("#endPage").show();
            this.counterLikes();
        }
    }    
    this.like = function(){
        this.actualbook.likes++;
        this.nextBook();
    }         
    this.counterLikes=function(){
        var contadorLikes=0;
        var livroActual = this.viewdbook.dequeue();

        while(livroActual!=null){
            contadorLikes = contadorLikes + livroActual.likes;
            livroActual = this.viewdbook.dequeue();
        }
    $("#likes").html(contadorLikes);
    };
};

function Book(image, title, description){
    this.image = image;
    this.title = title;
    this.description = description;
    this.likes = 0;
    this.disLikes = 0;
    //this.links = links;
  
    this.render = function(){
        $("#image").attr("src",this.image);
        $("#title").html(this.title);
        $("#descricao").html(this.description);
    }
};

function Queue(){ //definicao de estrutura de dados
    this.data = [];
     
    this.enqueue = function(element){
        this.data.push(element);
    }
    this.dequeue = function(){
        var result = this.data[0];
        this.data.shift(); //tira ultimo
        return result;
    }
};  

function init(paramPesquisa){
    $.get("https://www.googleapis.com/books/v1/volumes?q="+encodeURI(paramPesquisa)) //get ajax; encodeURI é para contemplar espaços ou acentos
    .done(function(data){
        for(i=0; i<data.items.length; i++){
            var livrosGoogle = data.items[i];
            
            var title = livrosGoogle.volumeInfo.title;           
            var image = livrosGoogle.volumeInfo.imageLinks.thumbnail;
            var description = livrosGoogle.volumeInfo.description;
            //console.log(livrosGoogle);
            livrosGoogle = new Book (image, title, description);
            library.addBooks(livrosGoogle);           
        }
      library.nextBook();  
    })
    .fail(function(data){
        // for(i=0; i<data.items.length; i++){
        //     var livrosGoogle = data.items[i];
        //     var title = livrosGoogle["volumeInfo"]["title"];
        //     var description = livrosGoogle["volumeInfo"]["description"];
        //     var image = livrosGoogle["volumeInfo"]["image"]
            console.log(livrosGoogle);
        }
    )
};

init("ola");


// var book2 = new Book ("PRINCIPE-NABO-O.jpg","O Príncipe Nabo","Ilse Losa (Autor) Manuela Bacelar (Ilustração) em Português","O-Mundo-Em-Que-Vivi.jpg");

// var book3 = new Book ("1507-1.jpg","If Not Now, When?","Primo Levi (Autor) Lançado em junho de 2017 Edição em Inglês","1507-1-1.jpg");

// var book4 = new Book ("Historia-do-Novo-Nome.jpg","História do Novo Nome","A Amiga Genial Vol 2 Elena Ferrante (Autor) Lançado em julho de 2015 Edição em Português","1507-1-2.jpg");

var library = new Library();

// library.addBooks(book1);
// library.addBooks(book2);
// library.addBooks(book3);
// library.addBooks(book4);

$("#buttonStart").click(function(){
    $("#startPage").hide();
    $("#mainPage").show();
    
});

$("#buttonLike").click(function(){  
    library.like();
}); 
