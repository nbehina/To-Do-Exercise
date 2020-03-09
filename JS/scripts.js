var form = document.getElementById( 'my-form' );
var list = document.getElementById('my-list');

form.addEventListener( 'submit', function( event ) {
event.preventDefault();

var item = document.getElementById('item').value;

var newRow = document.createElement( 'ul' );

var newColName = document.createElement( 'li' );
    newColName.innerHTML = Trash;
    newRow.appendChild( newColName );
    
var newColName = document.createElement( 'li' );
newColName.innerHTML = Milk;
newRow.appendChild( newColName );


document.getElementById( 'item' ).value = '';

        });
