$(function(){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        $('button').click(function(){
            const taskName = $('#shopping-list-entry').val();
            
            if (taskName){
                $('.shopping-list').append(`<li><span class="shopping-item">${taskName}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
                $('#shopping-list-entry').val('');
            }
        });
    });  

    $('ul').on('click', '.shopping-item-toggle span', function(event) {
        $(this).parent().parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    });

    
    $('ul').on('click', '.shopping-item-delete span', function(event) {
        $(this).parents('li').remove();
    });
});













{/* <li>
    <span class="shopping-item">apples</span>
    <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
    </div>
</li> */}