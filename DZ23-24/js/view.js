
define (
		'view' ,
		['model', 'tmpl'],
    function (model) {
        return {
       
           init() {

                var wrapper = tmpl($('#wrapper-template').html());
                $('body').append(wrapper);

                this.elements = {
                    input: $('.item-value'),
                    addBtn: $('.item-add'),
                    listContainer: $('.list')
                };

                this.renderList(model.data);
            },

							renderList(data) {
                var list = tmpl($('#list-template').html(), {data: data});
                this.elements.listContainer.html(list);
            },

            checkStates () {
                var inputs = $('li > input');
                if (inputs.length)
                    this.renderList(model.data);
            },

            changeState (item) {
              this.checkStates();
                var $elem = $('li').filter(function() {
                    return ($.trim($(this).text()) === item);
                });
                $elem.replaceWith('<li class=" list__item--edit"><input class="newInput" type="text" value="' + item + '"><span class="apply"></span></li>');

                this.elements.editInput = $('.newInput');
                this.elements.editInput.focus();
            }
 
        };
    });