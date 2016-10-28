// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).on('turbolinks:load', function() {
 $(document).on('ajax:success', '.to_form', function(xhr, data, status) {
   $('.form').html(data);
 });
 $(document).on('ajax:success', '.save_post', function(xhr, data, status) {
   $('.posts').html(data);
   $('.form').html('');
   $('#notice').html('You successfully saved post!').delay(1000).fadeOut();;
 });
 $('.close').click(function(){
    $('.form').html('');
 });
 $(document).on('ajax:success', '.delete_post', function(xhr, data, status) {
   $('.posts').html(data);
   $('#alert').html('You successfully deleted post!').delay(1000).fadeOut();
 });
});
