//function fun(){
  //  var search = document.getElementById("input1").value
    //console.log(search)

   // $.ajax({
     //   url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
       // dataType:'json',
        //success: function(data){
          //  for(var i = 0;i < data.items.length; i++){
            //    document.body.innerHTML +="<p>" + data.items[i].volumeInfo.title + "</p>"
            //}
        //},
        //type:'GET'
    //})


//}

//document.getElementById("btn").addEventListener("click",fun)


$("button").click(function(){

var request = $.ajax("https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse")

request.done(
  function(data){
    console.log(data)

  }
  )

})
