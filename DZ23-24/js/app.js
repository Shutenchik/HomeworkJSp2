requirejs.config({
  path: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
    'tmpl': 'tmpl'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
});

require(
    ['model', 'view', 'controller', 'jquery', 'tmpl'],


    function (model, view, controller, tmpl, $) {
         var firstToDoList = ['Learn Javascript', 'Learn Gulp', 'Learn Grunt', 'Learn English', 'Learn Less'];
        model.init(firstToDoList);
        view.init();
        controller.init(view);

        console.log(controller);
    });
