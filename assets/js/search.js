$( document ).ready(function() {
    console.log( "ready!" );
    testSearch("1088020240")
});

function testSearch(id) {
/*
  const base_url = "https://search.live.opal.cloud.otto.de/opal-search/products?onlineRelevance.value=in(ACTIVE,INACTIVE)&";
  $.get({
    url: base_url + "_id=" + id,
    success: testSearchSuccess,
    dataType: 'jsonp'
  });
*/
  $.get( base_url + "_id=" + id, function( data ) {
    $( ".result_raw" ).html( data );
    alert( "Load was performed." );
  });
}

function testSearchSuccess(result) {
  $("p.result_raw").first().text(result);
}


/*
if(window.location.search) {
(function(queryString){
  const urlParams = new URLSearchParams(queryString);
  const product_id = urlParams.get('product_id');
  document.write("produkt id: "+product_id);
  const article_id = urlParams.get('article_id');
  document.write("artikel id: "+article_id);
  const variant_id = urlParams.get('variant_id');
  document.write("varianten id: "+variant_id);
  const sku = urlParams.get('sku');
  document.write("sku: "+sku);
  const ean = urlParams.get('ean');
  document.write("ean: "+ean);
}(window.location.search));
}
*/
