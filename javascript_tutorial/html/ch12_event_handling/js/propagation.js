/**
 *  Event Propogation
 *
 *  The Event object tells which element received the event. By registering a single event handler you can monitor
 *  every cell in a table by registering the parent element of all the cells.  This is called bubbling.
 *
 *  Step 1: Event Registration  Step 2: Write an event handler      Step 3: Further actions/
 *  1. Identify the element     1. write a handler function         - disable default actions
 *  2. Identify the action      2. passed an event object to it     - prevent 'bubbling'
 *  3. Register a handler       3. analyze the event object         - deregister the event
 *                              4. perform the relevant actions
 */

// find table
var table = document.getElementById("multiplication");  // table element
var tcols = table.getElementsByTagName("col");          // collection of column elements in the table

// delegate event handler
table.addEventListener( "mouseover", TableHandler );
table.addEventListener( "mouseout", TableHandler );

// event handler
function TableHandler(event) {

	var target = event.target;                      // identify target node, a table cell
	if (target.nodeName != "TD") return;            // we only care if the user hovers over a td cell
	
    var cName = ( event.type == "mouseover" ? "active" : "");
	target.parentNode.className = cName;            // style the current node
	tcols[ target.cellIndex ].className = cName;    // style the column
}