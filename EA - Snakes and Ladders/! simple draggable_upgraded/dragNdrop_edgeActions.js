/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // make an array of the draggable symbol names
         draggableEl = ['fruit1','fruit2','fruit3','fruit4','fruit5','fruit6'];
         // make an array of the droppable element names
         droppableEl = ['basket1','basket2','basket3','basket4','basket5','basket6'];
         // have only the first element be draggable
         
         
         
         // set up the droppable to accept each draggables
         for (i=0;i<droppableEl.length;i++){
         	sym.$(draggableEl[i]).addClass('C'+i);
         	sym.$('.C'+i).draggable({
         	revert: 'invalid'		
         });
         	sym.$(droppableEl[i]).droppable({
         		accept:'.C'+i,   // use class for accept
         		drop: handleDropEvent
         	});
         
         }
         
         k=0;
         
         function handleDropEvent(event, ui){		
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             // place draggable where needed. could be left, top
            // ui.draggable.position( { of: $(this), my: 'left', at: 'top' } );
             ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
             ui.draggable.draggable( 'option', 'revert', false );
             k++;
             if (k==6){
             	sym.getSymbol('fruit1').play();
             	// play animation here.
             }
         
         
         }
         
         
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'fruit1'
   (function(symbolName) {   
   
   })("fruit1");
   //Edge symbol end:'fruit1'

   //=========================================================
   
   //Edge symbol: 'fruit2'
   (function(symbolName) {   
   
   })("fruit2");
   //Edge symbol end:'fruit2'

   //=========================================================
   
   //Edge symbol: 'fruit3'
   (function(symbolName) {   
   
   })("fruit3");
   //Edge symbol end:'fruit3'

   //=========================================================
   
   //Edge symbol: 'fruit4'
   (function(symbolName) {   
   
   })("fruit4");
   //Edge symbol end:'fruit4'

   //=========================================================
   
   //Edge symbol: 'fruit5'
   (function(symbolName) {   
   
   })("fruit5");
   //Edge symbol end:'fruit5'

   //=========================================================
   
   //Edge symbol: 'fruit6'
   (function(symbolName) {   
   
   })("fruit6");
   //Edge symbol end:'fruit6'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-988312621");