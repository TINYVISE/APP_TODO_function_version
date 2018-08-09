
var doc             = document,
    newTaskForm     = doc.getElementById( 'newTaskForm' ),
    inputTask       = doc.getElementById( 'inputTask' ),
    theList         = doc.getElementById( 'theList' ),
    clearAll        = doc.getElementById( 'clearAll' );

applyEvents();

function applyEvents() {

    newTaskForm.addEventListener( 'submit', newTaskFormFunc );
    theList.addEventListener( 'click', removeItem );
    clearAll.addEventListener( 'click', clearAllFunc );
}

function newTaskFormFunc( e ) {

    e.preventDefault();

    if( inputTask.value === '' ) {

        alert( 'u sure bro?' );
    }

    let li = doc.createElement( 'li' );
    let liTxt = doc.createTextNode( inputTask.value );
    let x = doc.createElement( 'i' );

    x.innerHTML = 'X';

    li.appendChild( liTxt );

    li.appendChild( x );

    theList.appendChild( li );

    inputTask.value = '';
}

function removeItem( e ) {

    if( e.target.innerHTML === 'X' ) {

        if( confirm( 'you sure bro?' ) ) {

            e.target.parentElement.style.backgroundColor = 'red';
        }
    }
}

function clearAllFunc( e ) {

    e.preventDefault();

    while( theList.firstChild ) {

        theList.removeChild( theList.firstChild );
    }
}