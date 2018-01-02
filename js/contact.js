$( document ).ready(function() {

       $('form').submit(function(event) {
           event.preventDefault();

           $.ajax({
               url: "http://formspree.io/fzk_1995@yahoo.com", 
               method: "POST",
               data: {
                   email: $('#js-email').val(),
                   message: $('#js-message').val()
               },
               dataType: "json"
           }).error(function(jqXHR, status, error){
               alert('Uh oh, something went wrong. Please try again.');
           }). success(function(data, status, jqXHR) {
               alert('Thank you for your message. Will get back to you soon.');
               $('form').find('#js-email, #js-message').val('');
           });
       });

   });
