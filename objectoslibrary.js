

function Library(){  // classe Library  
    // this.books =[ ]; //array books 
    // this.index = 0;
    this.books = new Queue();
    this.viewdbook = new Queue();
    this.actualbook = null;
   
    this.addBooks = function(book){ 
        // this.books.push(book) //estou a empurrar book para o array books
        this.books.enqueue(book);
    }
    this.nextBook = function(){
        this.actualbook = this.books.dequeue();
        this.actualbook.render();
        this.viewdbook.enqueue(this.actualbook); 
    }    
    // this.nextBook = function(){  
    //     if(this.index < this.books.length){      
    //         var book = this.books[this.index];
    //         book.render(); //instancia do book
    //         this.index++;
    //     }else{
    //        $("#mainPage").hide();
    //        $("#endPage").show();
    //        //completarTabela();
    //     }
    // }

    this.like = function(){
        this.actualbook.likes++;
        this.nextBook();
    }

//     this.counterLikes=function(){
//         var counterLikes = 0;
//         var b = this.viewdbook.dequeue();

//         while(b!=null){
//             counterLikes = counterLikes + b.like;
//             b=this.viewdbook.dequeue();

//             return counterLikes;
       
//             }
//         }
// };        

    // this.completarTabela = function(){
    //      for(i=0; i<this.books.length; i++){
    //           $("title").append(books[i].title);
                  
              
            //   var table = `<tr>
            //       <td>`
            //              +this.title+
            //                  `</td>  
            //              <td>`
            //              //+this.opinion+
            //                  `</td>
            //              <td>`
            //              + showSug +`
            //                  </td> 
            //              </tr>`   
                     //$("#table tbody").append(table);   
            //         };
            // };


function Book(image, title, descricao, links){
    this.image = image;
    this.title = title;
    this.descricao = descricao;
    this.likes = 0;
    this.disLikes = 0;
    //this.links = links;
  
    this.render = function(){
        $("#image").attr("src",this.image);
        $("#title").html(this.title);
        $("#descricao").html(this.descricao);
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

var book1 = new Book ("Aim-foi-Auschwitz.jpg","Assim foi Auschwitz", "Um livro que celebra os 70 anos do fim da Segunda Guerra Mundial","A-Amiga-Genial.jpg");

var book2 = new Book ("PRINCIPE-NABO-O.jpg","O Príncipe Nabo","Ilse Losa (Autor) Manuela Bacelar (Ilustração) em Português","O-Mundo-Em-Que-Vivi.jpg");

var book3 = new Book ("1507-1.jpg","If Not Now, When?","Primo Levi (Autor) Lançado em junho de 2017 Edição em Inglês","1507-1-1.jpg");

var book4 = new Book ("Historia-do-Novo-Nome.jpg","História do Novo Nome","A Amiga Genial Vol 2 Elena Ferrante (Autor) Lançado em julho de 2015 Edição em Português","1507-1-2.jpg");

var library = new Library();

library.addBooks(book1);
library.addBooks(book2);
library.addBooks(book3);
library.addBooks(book4);

library.nextBook();

$("#buttonStart").click(function(){
    $("#startPage").hide();
    $("#mainPage").show();
    
});

$("#buttonLike").click(function(){  
    library.like();
}); 

// var librarys = [book1, book2, book3, book4];

// function preencher(){

//     var insertHTML = `
//         <div class = "book col-md-4-offset-2 col-sm-8-offset-2 col-sm-offset-2">
//         <img>
//         <h1></h1>
//         <p></p>
//         <a></a>
//         </div>           
//         `

//     $.each(library,function(index,book){
//         $("#bookContainer").append(insertHTML);
//         $ultimoInserido=$(".book:last-child");
//         $("img", $ultimoInserido).attr("src", book.image);
//         $("h1", $ultimoInserido).text(book.title);
//         $("p", $ultimoInserido).text(book.descricao);
//         $("a", $ultimoInserido).attr("href", book.links);
//     });        
// };
// preencher();

// $(".book:first-child").addClass("active")
    
//    $("#buttonLike").click(function(){

//    //     $currentBook = $(".book.active");
//    //     $nextBook = $currentBook.next(".book");

//    //     var index = $(".book").index($currentBook);
//    //     library[index].opinion = $(this).attr('data-Opinion')    
    
//          if(library.index < library.books.length){
//              library.books[library.index].likes++;
//              library.nextBook();
//    // //         $currentBook.removeClass("active");
//    // //         $nextBook.addClass("active");  
//        }else{
//            library.books[library.index].likes++;
//            $("#mainPage").hide();
//            $("#endPage").show();
//            completarTabela();
//            // count();
//          }
//      });

// function completarTabela(){
//     $.each(library,function(index, book){   
//         var showSug = 0;   
//         if(book.opinion=="dislike"){
//             showSug = `<img src="`+book.sugestoes+`">`
//             }else{
//             showSug = "-";   
//             }   
//         var table = `<tr>
//                         <td>`
//                             +this.title+
//                         `</td>  
//                         <td>`
//                             +this.opinion+
//                         `</td>
//                         <td>`
//                             + showSug +`
//                         </td> 
//                     </tr>`   
//         $("#table tbody").append(table);   
// })};

    // function count(){   
    //     var likes = 0;
    //     var dislikes = 0;   
    //         $.each(library, function(index, book){   
    //         if(book.opinion=="like"){
    //             likes++;
    //         }
    //         else{
    //             dislikes++;
    //         }
     
    //         $("#um").text(likes);
    //         $("#dois").text(dislikes);
    // }};
