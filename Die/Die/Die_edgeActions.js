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
      
      
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("One");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Roll}", "click", function(sym, e) {
         
         // Change the text in an element
         sym.$("Roll").html("ROLLING");
         
         
         sym.play("one");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stop}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.stop();
         
         // Change the text in an element
         sym.$("Roll").html("ROLL");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 575, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6039913");