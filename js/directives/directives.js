app.directive('myDir', function() {

    return {
        restrict:'A',
        template:'<a href="">Zoomy View</a>',
        link:function(scope,el,attrs) {
            
            // TOGGLE CLASS
            el.bind('click', function() {

                el.hasClass('shit') ? el.removeClass('shit') : el.addClass('shit');
                var ori = el.text();
                var txSet = false;

                /*
                if(txSet) {
                    el.text() = ori;
                    console.log('true it');
                } else {
                    el.text('This is the new content');
                    txSet = true;
                }
                */



            });

        }
    }

});