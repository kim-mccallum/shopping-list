////////////// Handler function definitions //////////////

// 1. Add items to the list
function handleAdditions() {
    $("#js-shopping-list-form > button").click(event => {
        event.preventDefault(); 
        // Get the text input        
        let userTextElement = $('#shopping-list-entry').val();
        console.log(userTextElement)
        // Insert a new element into the ul class="shopping-list"
        // Use a template literal to build out the HTML
        // sub in the userTextElement in there!!! YAY!!!

        $("ul").append(`<li>
            <span class="shopping-item">${userTextElement}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>`);
    });
};

// 2. Remove items from the list
function handleRemovals() {
    $(".shopping-item-delete").click(event => {
        $(event.currentTarget).closest('li').remove();
    });
}

// 3. Check item on the list 

function handleCheckItems() {
    // listen for click on 'check'
    $(".shopping-item-toggle").click(event => {
        // callback fn should find closest label (list item) toggle class
        $(event.currentTarget).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
}
//////////////// Run the handlerFunctions ////////////////
handleAdditions();
handleRemovals();
handleCheckItems();




