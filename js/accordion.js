function CreateAccording(options){
    this.createItem(options);
}
CreateAccording.prototype.createItem = function(options){
    var headBox = options.requiredElements.box;
    var headTagName = options.requiredElements.headings;
    var detailTagName = options.requiredElements.details;

    for(var i = 0; i < options.headings.length; i++){
        var headingBox = $('<'+ headBox +' class="item">' + '<'+ headTagName +'>' + options.headings[i] + '</'+ headTagName +'>' + '<'+ detailTagName +'>' + options.details[i] +'</'+ detailTagName +'>' + '</'+ headBox +'>');
        options.$location.append(headingBox);
    }
    this.createAccordion(headTagName, detailTagName);
};
CreateAccording.prototype.createAccordion = function(headTagName, detailTagName){
    var item = $('.item');
    item.find(detailTagName).slideUp();
    item.first().find(detailTagName).slideDown();

    item.on('click', function(){
        item.find(detailTagName).slideUp();
        $(this).find(headTagName).next(detailTagName).slideDown();
    });
};

