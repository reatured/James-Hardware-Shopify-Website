function filterData (data) {    
    var currentHeader = $(".page-header");
    var dataHeader = $(data).find(".page-header");
    if (currentHeader.find("h1").text() != dataHeader.find("h1").text()) {      
    	currentHeader.find("h1").text(dataHeader.find("h1").text());      	
      if (currentHeader.find(".rte").length) {
         if (dataHeader.find(".rte").length) {
             currentHeader.find(".rte").replaceWith(dataHeader.find(".rte"));
         } else {
             currentHeader.find(".rte").hide();
         }
      } else {
          if (dataHeader.find(".rte").length) {
             currentHeader.find("h1").after(dataHeader.find(".rte"));
          }
      }
    }
  
  	var currentList = $("#products-list");            
    var dataList = $(data).find("#products-list");               
    currentList.replaceWith(dataList);
  	
  	//replace refined
	$(".filter-header").replaceWith($(data).find(".filter-header"));
  	$(".filter-block").replaceWith($(data).find(".filter-block"));
  
  	//replace paging
    if ($(".pagination-section").length > 0) {
        $(".pagination-section").replaceWith($(data).find(".pagination-section"));
    } else {
        $(".content-center").append($(data).find(".pagination-section"));
    }
  	
};
function filterClick() {
  $('.sidebar-tag a:not(".clear"), .sidebar-tag label').click(function(e) {
       var currentTags = [];
       if (Shopify.queryParams.constraint) {
          currentTags = Shopify.queryParams.constraint.split('+');
       }
       //one selection or multi selection
       if (!window.enable_sidebar_multiple_choice && !$(this).prev().is(":checked")) {
          //remove other selection first
           var otherTag = $(this).parents('.sidebar-tag').find("input:checked");
          if (otherTag.length > 0) {
              var tagName = otherTag.val();
              if (tagName) {
                   var tagPos = currentTags.indexOf(tagName);
                  if (tagPos >= 0) {
                      //remove tag
                      currentTags.splice(tagPos, 1);
                  }
              }
          }
       }
       var tagName = $(this).prev().val();
       if (tagName) {
           var tagPos = currentTags.indexOf(tagName);
           if (tagPos >= 0) {
               //tag already existed, remove tag
               currentTags.splice(tagPos, 1);
           } else {
               //tag not existed
               currentTags.push(tagName);
           }
       }
       if (currentTags.length) {
           Shopify.queryParams.constraint = currentTags.join('+');
       } else {
           delete Shopify.queryParams.constraint;
       }
     	filterAjaxClick();    	
     	e.preventDefault();
    });
}
function filterCreateUrl(baseLink) {
    var newQuery = $.param(Shopify.queryParams).replace(/%2B/g, '+');
    if (baseLink) {
        //location.href = baseLink + "?" + newQuery;
        if (newQuery != "")
            return baseLink + "?" + newQuery;
        else
            return baseLink;
    }
    return location.pathname + "?" + newQuery;
};
function filterAjaxClick(baseLink) {
    delete Shopify.queryParams.page;
    var newurl = filterCreateUrl(baseLink);
    isFilterAjaxClick = true;
    History.pushState({
       param: Shopify.queryParams
    }, newurl, newurl);
    filterGetData(newurl);
}
function filterGetData(newurl) {  	
    $.ajax({
		type: 'get',
        url: newurl,
        beforeSend: function() {
        	showLoading();
    	},
        success: function(data) {   
          	filterData(data);
            filterClick();            
            filterClear();
            filterClearAll();
            hideLoading();
            initQuickview();
            initAddToCart();     
          	viewAs();
          	initAddToWishlist();
        },
        error: function(xhr, text) {
            hideLoading();
            $('.loading-modal').hide();
            $('.ajax-error-message').text($.parseJSON(xhr.responseText).description);
            showModal('.ajax-error-modal');
        }
   });
}
function filterClearAll() {
    //clear all selection
    $('.refined-widgets a.clear-all').click(function(e) {
        delete Shopify.queryParams.constraint;
    	delete Shopify.queryParams.q;
        filterAjaxClick();
            e.preventDefault();
    });
}
function filterClear() {
   $(".sidebar-tag").each(function() {
      var sidebarTag = $(this);
      if (sidebarTag.find("input:checked").length > 0) {
          //has active tag
          sidebarTag.find(".clear").show().click(function(e) {
          	console.log("im clicked");
          	var currentTags = [];
            if (Shopify.queryParams.constraint) {
                currentTags = Shopify.queryParams.constraint.split('+');
            }
            sidebarTag.find("input:checked").each(function() {
                var selectedTag = $(this);
                var tagName = selectedTag.val();
                if (tagName) {
                    var tagPos = currentTags.indexOf(tagName);
                    if (tagPos >= 0) {
                        //remove tag
                        currentTags.splice(tagPos, 1);
                    }
                }
            });
            if (currentTags.length) {
                Shopify.queryParams.constraint = currentTags.join('+');
            } else {
                delete Shopify.queryParams.constraint;
            }
		  	filterAjaxClick();
          	e.preventDefault();
       	});
       }
    });
}
jQuery(function ($) {  	 
     
});
$(document).ready(function() {
  	Shopify.queryParams = {};
  	History.Adapter.bind(window, 'statechange', function() {
        var State = History.getState();
        if (!isFilterAjaxClick) {
            Shopify.queryParams = {};
            var newurl = filterCreateUrl();
            filterGetData(newurl);           
        }
        isFilterAjaxClick = false;
    });
  	filterClick();	
}); 