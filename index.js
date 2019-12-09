////////////// Handler function definitions //////////////
// Requirements: DOM manipulation, traversal dynamic HTML, use of the THIS keyword and EVENT DELEGATION
// Hints: .submit(), preventDefault(), toggleClass() and closest()

// Questions for Casey - How can I use the debugger to 'grope' my way through, finding what objects I have selected, and what kind of data they are, etc. 


// 1. Add items to the list
function handleAdditions() {
    $("#js-shopping-list-form > button").click(event => {
        event.preventDefault();
        // Get the text input
        debugger;
        const userTextElement = $('#shopping-list-entry').val();

        // Insert a new element into the ul class="shopping-list"
        // Use a template literal to build out the HTML
        // sub in the userTextElement in there!!! YAY!!! 
        $("ul").append("li")

    });

};

// 2. Remove items from the list
function handleRemovals() {
    $(".shopping-item-delete").click(event => {
        $(event.currentTarget).closest('li').remove();
    });
}

// 3. Check item on the list - SHOULD THIS BE ONE FUNCTION WITH .toggleClass()?

function handleCheckItems() {
    // listen for click on 'check'
    $(".shopping-item-toggle").click(event => {
        // callback fn should find closest label (list item) toggle class
        $(event.currentTarget).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
}
//Function Calls
handleRemovals();
handleCheckItems();
handleAdditions();



//////////////// Run the handlerFunctions ////////////////