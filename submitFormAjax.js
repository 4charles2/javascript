$(document).on('submit', formSelecter, function( e ) {
        e.preventDefault();
    $.ajax( {
        url: $(this).attr('action'),
        type: 'POST',
        data: new FormData( this ),
        processData: false,
        contentType: false
    }).done(function( data ) {
        //do stuff with the data you got back.
    });

});