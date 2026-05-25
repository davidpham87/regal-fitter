goog.provide('app.db');
app.db.db_name = "SimulationCache";
app.db.store_name = "results";
app.db.version = (1);
if((typeof app !== 'undefined') && (typeof app.db !== 'undefined') && (typeof app.db.db_connection !== 'undefined')){
} else {
app.db.db_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.db.open_db = (function app$db$open_db(){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var temp__5823__auto___26654 = cljs.core.deref(app.db.db_connection);
if(cljs.core.truth_(temp__5823__auto___26654)){
var db_26655 = temp__5823__auto___26654;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,db_26655);
} else {
var request_26656 = self.indexedDB.open(app.db.db_name,app.db.version);
(request_26656.onupgradeneeded = (function (event){
var db = event.target.result;
if(cljs.core.truth_(db.objectStoreNames.contains(app.db.store_name))){
return null;
} else {
return db.createObjectStore(app.db.store_name);
}
}));

(request_26656.onsuccess = (function (event){
var db = event.target.result;
cljs.core.reset_BANG_(app.db.db_connection,db);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,db);
}));

(request_26656.onerror = (function (event){
console.error("IndexedDB error:",event.target.error);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,null);
}));
}

return out;
});
app.db.get_cache = (function app$db$get_cache(k){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26504__auto___26657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26505__auto__ = (function (){var switch__26481__auto__ = (function (state_26602){
var state_val_26603 = (state_26602[(1)]);
if((state_val_26603 === (1))){
var inst_26581 = app.db.open_db();
var state_26602__$1 = state_26602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26602__$1,(2),inst_26581);
} else {
if((state_val_26603 === (2))){
var inst_26583 = (state_26602[(7)]);
var inst_26583__$1 = (state_26602[(2)]);
var state_26602__$1 = (function (){var statearr_26604 = state_26602;
(statearr_26604[(7)] = inst_26583__$1);

return statearr_26604;
})();
if(cljs.core.truth_(inst_26583__$1)){
var statearr_26605_26658 = state_26602__$1;
(statearr_26605_26658[(1)] = (3));

} else {
var statearr_26606_26659 = state_26602__$1;
(statearr_26606_26659[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (3))){
var inst_26583 = (state_26602[(7)]);
var inst_26585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26586 = [app.db.store_name];
var inst_26587 = (new cljs.core.PersistentVector(null,1,(5),inst_26585,inst_26586,null));
var inst_26588 = cljs.core.clj__GT_js(inst_26587);
var inst_26589 = inst_26583.transaction(inst_26588,"readonly");
var inst_26590 = inst_26589.objectStore(app.db.store_name);
var inst_26591 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
var inst_26592 = inst_26590.get(inst_26591);
var inst_26593 = (function (){var db = inst_26583;
var transaction = inst_26589;
var store = inst_26590;
var request = inst_26592;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event.target.result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_26594 = (inst_26592.onsuccess = inst_26593);
var inst_26595 = (function (){var db = inst_26583;
var transaction = inst_26589;
var store = inst_26590;
var request = inst_26592;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,null);
});
})();
var inst_26596 = (inst_26592.onerror = inst_26595);
var state_26602__$1 = (function (){var statearr_26607 = state_26602;
(statearr_26607[(8)] = inst_26594);

return statearr_26607;
})();
var statearr_26608_26661 = state_26602__$1;
(statearr_26608_26661[(2)] = inst_26596);

(statearr_26608_26661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (4))){
var inst_26598 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,null);
var state_26602__$1 = state_26602;
var statearr_26609_26662 = state_26602__$1;
(statearr_26609_26662[(2)] = inst_26598);

(statearr_26609_26662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26603 === (5))){
var inst_26600 = (state_26602[(2)]);
var state_26602__$1 = state_26602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26602__$1,inst_26600);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$get_cache_$_state_machine__26482__auto__ = null;
var app$db$get_cache_$_state_machine__26482__auto____0 = (function (){
var statearr_26611 = [null,null,null,null,null,null,null,null,null];
(statearr_26611[(0)] = app$db$get_cache_$_state_machine__26482__auto__);

(statearr_26611[(1)] = (1));

return statearr_26611;
});
var app$db$get_cache_$_state_machine__26482__auto____1 = (function (state_26602){
while(true){
var ret_value__26483__auto__ = (function (){try{while(true){
var result__26484__auto__ = switch__26481__auto__(state_26602);
if(cljs.core.keyword_identical_QMARK_(result__26484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26484__auto__;
}
break;
}
}catch (e26612){var ex__26485__auto__ = e26612;
var statearr_26613_26663 = state_26602;
(statearr_26613_26663[(2)] = ex__26485__auto__);


if(cljs.core.seq((state_26602[(4)]))){
var statearr_26614_26664 = state_26602;
(statearr_26614_26664[(1)] = cljs.core.first((state_26602[(4)])));

} else {
throw ex__26485__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26665 = state_26602;
state_26602 = G__26665;
continue;
} else {
return ret_value__26483__auto__;
}
break;
}
});
app$db$get_cache_$_state_machine__26482__auto__ = function(state_26602){
switch(arguments.length){
case 0:
return app$db$get_cache_$_state_machine__26482__auto____0.call(this);
case 1:
return app$db$get_cache_$_state_machine__26482__auto____1.call(this,state_26602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$get_cache_$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$get_cache_$_state_machine__26482__auto____0;
app$db$get_cache_$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$get_cache_$_state_machine__26482__auto____1;
return app$db$get_cache_$_state_machine__26482__auto__;
})()
})();
var state__26506__auto__ = (function (){var statearr_26615 = f__26505__auto__();
(statearr_26615[(6)] = c__26504__auto___26657);

return statearr_26615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26506__auto__);
}));


return out;
});
app.db.set_cache = (function app$db$set_cache(k,value){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26504__auto___26666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26505__auto__ = (function (){var switch__26481__auto__ = (function (state_26640){
var state_val_26641 = (state_26640[(1)]);
if((state_val_26641 === (1))){
var inst_26618 = app.db.open_db();
var state_26640__$1 = state_26640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26640__$1,(2),inst_26618);
} else {
if((state_val_26641 === (2))){
var inst_26620 = (state_26640[(7)]);
var inst_26620__$1 = (state_26640[(2)]);
var state_26640__$1 = (function (){var statearr_26642 = state_26640;
(statearr_26642[(7)] = inst_26620__$1);

return statearr_26642;
})();
if(cljs.core.truth_(inst_26620__$1)){
var statearr_26643_26667 = state_26640__$1;
(statearr_26643_26667[(1)] = (3));

} else {
var statearr_26644_26668 = state_26640__$1;
(statearr_26644_26668[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (3))){
var inst_26620 = (state_26640[(7)]);
var inst_26622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26623 = [app.db.store_name];
var inst_26624 = (new cljs.core.PersistentVector(null,1,(5),inst_26622,inst_26623,null));
var inst_26625 = cljs.core.clj__GT_js(inst_26624);
var inst_26626 = inst_26620.transaction(inst_26625,"readwrite");
var inst_26627 = inst_26626.objectStore(app.db.store_name);
var inst_26628 = cljs.core.clj__GT_js(value);
var inst_26629 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
var inst_26630 = inst_26627.put(inst_26628,inst_26629);
var inst_26631 = (function (){var db = inst_26620;
var transaction = inst_26626;
var store = inst_26627;
var request = inst_26630;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,true);
});
})();
var inst_26632 = (inst_26630.onsuccess = inst_26631);
var inst_26633 = (function (){var db = inst_26620;
var transaction = inst_26626;
var store = inst_26627;
var request = inst_26630;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,false);
});
})();
var inst_26634 = (inst_26630.onerror = inst_26633);
var state_26640__$1 = (function (){var statearr_26646 = state_26640;
(statearr_26646[(8)] = inst_26632);

return statearr_26646;
})();
var statearr_26647_26675 = state_26640__$1;
(statearr_26647_26675[(2)] = inst_26634);

(statearr_26647_26675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (4))){
var inst_26636 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,false);
var state_26640__$1 = state_26640;
var statearr_26648_26676 = state_26640__$1;
(statearr_26648_26676[(2)] = inst_26636);

(statearr_26648_26676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (5))){
var inst_26638 = (state_26640[(2)]);
var state_26640__$1 = state_26640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26640__$1,inst_26638);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$set_cache_$_state_machine__26482__auto__ = null;
var app$db$set_cache_$_state_machine__26482__auto____0 = (function (){
var statearr_26649 = [null,null,null,null,null,null,null,null,null];
(statearr_26649[(0)] = app$db$set_cache_$_state_machine__26482__auto__);

(statearr_26649[(1)] = (1));

return statearr_26649;
});
var app$db$set_cache_$_state_machine__26482__auto____1 = (function (state_26640){
while(true){
var ret_value__26483__auto__ = (function (){try{while(true){
var result__26484__auto__ = switch__26481__auto__(state_26640);
if(cljs.core.keyword_identical_QMARK_(result__26484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26484__auto__;
}
break;
}
}catch (e26650){var ex__26485__auto__ = e26650;
var statearr_26651_26683 = state_26640;
(statearr_26651_26683[(2)] = ex__26485__auto__);


if(cljs.core.seq((state_26640[(4)]))){
var statearr_26652_26689 = state_26640;
(statearr_26652_26689[(1)] = cljs.core.first((state_26640[(4)])));

} else {
throw ex__26485__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26691 = state_26640;
state_26640 = G__26691;
continue;
} else {
return ret_value__26483__auto__;
}
break;
}
});
app$db$set_cache_$_state_machine__26482__auto__ = function(state_26640){
switch(arguments.length){
case 0:
return app$db$set_cache_$_state_machine__26482__auto____0.call(this);
case 1:
return app$db$set_cache_$_state_machine__26482__auto____1.call(this,state_26640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$set_cache_$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$set_cache_$_state_machine__26482__auto____0;
app$db$set_cache_$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$set_cache_$_state_machine__26482__auto____1;
return app$db$set_cache_$_state_machine__26482__auto__;
})()
})();
var state__26506__auto__ = (function (){var statearr_26653 = f__26505__auto__();
(statearr_26653[(6)] = c__26504__auto___26666);

return statearr_26653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26506__auto__);
}));


return out;
});
app.db.hash_key = (function app$db$hash_key(data){
return cljs.core.hash((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});

//# sourceMappingURL=app.db.js.map
