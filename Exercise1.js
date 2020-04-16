/*Exercise 1
Use jQuery to do the following things with the https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises API.

Create buttons that do each of the tasks below
Render the results to the page in html elements.
Hide the results from the previous actions
1.Get all posts
2.Get post with id of 10
3.Get the comments from post with id of 12 
note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12
4.Get all the posts from user with id of 2
5.Create a new post and log the id generated for it by the server
6.Replace the post with id of 12 and render the responseJSON
7.Update the title of post with id of 12 and render responseJSON
8.Delete the post with id of 12 and render a success message
9.Display a list of posts.
10.When the user clicks on a post, display all the comments from that post
11.Display a link back to all posts*/


$(".btn1").click(function(){// this gets tells the button on click run this function
   $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(argument){// when I click on this button I want to get the info from this site with .get(get has 2 arguments) run the next function to tell wht you want to do when I click ( will return an array from the site)
           /* for (var i = 0; i < argument.length; i++){//will start at position 0 and keep iterating until we meet the length of the array            
            console.log(argument[i]);*/
            $('.results').text(JSON.stringify(argument))
        
         
        })})


$(".btn2").click(function(){
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=10", function(argument){// asking the question ? where is the id=10
        $('.results').text(JSON.stringify(argument))
        });})

 $(".btn3").click(function(){
     $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12", function(argument){// asking the question ? where is the id=10
    $('.results').text(JSON.stringify(argument))
     });})

     $(".btn4").click(function(){
        $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",{userid:2}, function(argument){// asking the question ? where is the id=10
       $('.results').text(JSON.stringify(argument))
        });})
   



        
