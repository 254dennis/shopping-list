$(function(){
    $("#js-shopping-list-form").submit(function(event) {
      event.preventDefault();
    const listItem = $("#shopping-list-entry")();
    $("#shopping-list-entry").val(" ");
    $(".shopping-list").append(
        `<li>
          <span class="shopping-item">${listItem}</span>
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
  
  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    $(this).closest("li").find(".shopping-item").toggle);
  });
  
  function(append.listItem) 
    $(this).closest("li").remove();
  
  
  