
(function(queryString){
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get('product_id');
  document.write("produkt id: "+product_id);
  const product = urlParams.get('article_id');
  document.write("artikel id: "+article_id);
  const product = urlParams.get('variant_id');
  document.write("varianten id: "+variant_id);
  const product = urlParams.get('sku');
  document.write("sku: "+sku);
  const product = urlParams.get('ean');
  document.write("ean: "+ean);
}(window.location.search));
