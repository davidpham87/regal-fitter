goog.provide('app.state_url');
app.state_url.serialize = (function app$state_url$serialize(data){
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write(writer,data);
});
app.state_url.deserialize = (function app$state_url$deserialize(s){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(reader,s);
});
app.state_url.compress = (function app$state_url$compress(string,encoding){
var byte_array = (new TextEncoder()).encode(string);
var cs = (new CompressionStream(encoding));
var writer = cs.writable.getWriter();
writer.write(byte_array);

writer.close();

return (new Response(cs.readable)).arrayBuffer();
});
app.state_url.decompress = (function app$state_url$decompress(byte_array,encoding){
var cs = (new DecompressionStream(encoding));
var writer = cs.writable.getWriter();
writer.write(byte_array);

writer.close();

return (new Response(cs.readable)).arrayBuffer().then((function (array_buffer){
return (new TextDecoder()).decode(array_buffer);
}));
});
app.state_url.array_buffer__GT_base64 = (function app$state_url$array_buffer__GT_base64(ab){
var bytes = (new Uint8Array(ab));
var len = bytes.length;
var arr = (new Array());
var n__5762__auto___26130 = len;
var i_26131 = (0);
while(true){
if((i_26131 < n__5762__auto___26130)){
arr.push(String.fromCharCode((bytes[i_26131])));

var G__26132 = (i_26131 + (1));
i_26131 = G__26132;
continue;
} else {
}
break;
}

return btoa(arr.join(""));
});
app.state_url.base64__GT_array_buffer = (function app$state_url$base64__GT_array_buffer(b64){
var binary_str = atob(b64);
var len = binary_str.length;
var bytes = (new Uint8Array(len));
var n__5762__auto___26133 = len;
var i_26134 = (0);
while(true){
if((i_26134 < n__5762__auto___26133)){
(bytes[i_26134] = binary_str.charCodeAt(i_26134));

var G__26135 = (i_26134 + (1));
i_26134 = G__26135;
continue;
} else {
}
break;
}

return bytes;
});
app.state_url.encode_state = (function app$state_url$encode_state(data){
return app.state_url.compress(app.state_url.serialize(data),"gzip").then(app.state_url.array_buffer__GT_base64);
});
app.state_url.decode_state = (function app$state_url$decode_state(b64){
return app.state_url.decompress(app.state_url.base64__GT_array_buffer(b64),"gzip").then(app.state_url.deserialize);
});

//# sourceMappingURL=app.state_url.js.map
