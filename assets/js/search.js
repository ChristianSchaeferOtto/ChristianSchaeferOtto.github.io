$( document ).ready(function() {
    console.log( "ready!" );
});

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
