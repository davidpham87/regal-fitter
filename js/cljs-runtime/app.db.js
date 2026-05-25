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
var temp__5823__auto___26655 = cljs.core.deref(app.db.db_connection);
if(cljs.core.truth_(temp__5823__auto___26655)){
var db_26656 = temp__5823__auto___26655;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,db_26656);
} else {
var request_26657 = self.indexedDB.open(app.db.db_name,app.db.version);
(request_26657.onupgradeneeded = (function (event){
var db = event.target.result;
if(cljs.core.truth_(db.objectStoreNames.contains(app.db.store_name))){
return null;
} else {
return db.createObjectStore(app.db.store_name);
}
}));

(request_26657.onsuccess = (function (event){
var db = event.target.result;
cljs.core.reset_BANG_(app.db.db_connection,db);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,db);
}));

(request_26657.onerror = (function (event){
console.error("IndexedDB error:",event.target.error);

return cljs.core.async.close_BANG_(out);
}));
}

return out;
});
app.db.get_cache = (function app$db$get_cache(k){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26508__auto___26658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26509__auto__ = (function (){var switch__26485__auto__ = (function (state_26605){
var state_val_26606 = (state_26605[(1)]);
if((state_val_26606 === (1))){
var inst_26582 = app.db.open_db();
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26605__$1,(2),inst_26582);
} else {
if((state_val_26606 === (2))){
var inst_26584 = (state_26605[(7)]);
var inst_26584__$1 = (state_26605[(2)]);
var state_26605__$1 = (function (){var statearr_26607 = state_26605;
(statearr_26607[(7)] = inst_26584__$1);

return statearr_26607;
})();
if(cljs.core.truth_(inst_26584__$1)){
var statearr_26608_26659 = state_26605__$1;
(statearr_26608_26659[(1)] = (3));

} else {
var statearr_26609_26660 = state_26605__$1;
(statearr_26609_26660[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (3))){
var inst_26584 = (state_26605[(7)]);
var inst_26586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26587 = [app.db.store_name];
var inst_26588 = (new cljs.core.PersistentVector(null,1,(5),inst_26586,inst_26587,null));
var inst_26589 = cljs.core.clj__GT_js(inst_26588);
var inst_26590 = inst_26584.transaction(inst_26589,"readonly");
var inst_26591 = inst_26590.objectStore(app.db.store_name);
var inst_26592 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
var inst_26593 = inst_26591.get(inst_26592);
var inst_26594 = (function (){var db = inst_26584;
var transaction = inst_26590;
var store = inst_26591;
var request = inst_26593;
return (function (event){
var temp__5823__auto__ = event.target.result;
if(cljs.core.truth_(temp__5823__auto__)){
var res = temp__5823__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return cljs.core.async.close_BANG_(out);
}
});
})();
var inst_26595 = (inst_26593.onsuccess = inst_26594);
var inst_26596 = (function (){var db = inst_26584;
var transaction = inst_26590;
var store = inst_26591;
var request = inst_26593;
return (function (event){
return cljs.core.async.close_BANG_(out);
});
})();
var inst_26597 = (inst_26593.onerror = inst_26596);
var state_26605__$1 = (function (){var statearr_26611 = state_26605;
(statearr_26611[(8)] = inst_26595);

return statearr_26611;
})();
var statearr_26612_26661 = state_26605__$1;
(statearr_26612_26661[(2)] = inst_26597);

(statearr_26612_26661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (4))){
var inst_26601 = cljs.core.async.close_BANG_(out);
var state_26605__$1 = state_26605;
var statearr_26613_26662 = state_26605__$1;
(statearr_26613_26662[(2)] = inst_26601);

(statearr_26613_26662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (5))){
var inst_26603 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26605__$1,inst_26603);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$get_cache_$_state_machine__26486__auto__ = null;
var app$db$get_cache_$_state_machine__26486__auto____0 = (function (){
var statearr_26614 = [null,null,null,null,null,null,null,null,null];
(statearr_26614[(0)] = app$db$get_cache_$_state_machine__26486__auto__);

(statearr_26614[(1)] = (1));

return statearr_26614;
});
var app$db$get_cache_$_state_machine__26486__auto____1 = (function (state_26605){
while(true){
var ret_value__26487__auto__ = (function (){try{while(true){
var result__26488__auto__ = switch__26485__auto__(state_26605);
if(cljs.core.keyword_identical_QMARK_(result__26488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26488__auto__;
}
break;
}
}catch (e26615){var ex__26489__auto__ = e26615;
var statearr_26616_26663 = state_26605;
(statearr_26616_26663[(2)] = ex__26489__auto__);


if(cljs.core.seq((state_26605[(4)]))){
var statearr_26617_26664 = state_26605;
(statearr_26617_26664[(1)] = cljs.core.first((state_26605[(4)])));

} else {
throw ex__26489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26665 = state_26605;
state_26605 = G__26665;
continue;
} else {
return ret_value__26487__auto__;
}
break;
}
});
app$db$get_cache_$_state_machine__26486__auto__ = function(state_26605){
switch(arguments.length){
case 0:
return app$db$get_cache_$_state_machine__26486__auto____0.call(this);
case 1:
return app$db$get_cache_$_state_machine__26486__auto____1.call(this,state_26605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$get_cache_$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$get_cache_$_state_machine__26486__auto____0;
app$db$get_cache_$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$get_cache_$_state_machine__26486__auto____1;
return app$db$get_cache_$_state_machine__26486__auto__;
})()
})();
var state__26510__auto__ = (function (){var statearr_26618 = f__26509__auto__();
(statearr_26618[(6)] = c__26508__auto___26658);

return statearr_26618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26510__auto__);
}));


return out;
});
app.db.set_cache = (function app$db$set_cache(k,value){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26508__auto___26666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26509__auto__ = (function (){var switch__26485__auto__ = (function (state_26642){
var state_val_26643 = (state_26642[(1)]);
if((state_val_26643 === (1))){
var inst_26619 = app.db.open_db();
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26642__$1,(2),inst_26619);
} else {
if((state_val_26643 === (2))){
var inst_26621 = (state_26642[(7)]);
var inst_26621__$1 = (state_26642[(2)]);
var state_26642__$1 = (function (){var statearr_26644 = state_26642;
(statearr_26644[(7)] = inst_26621__$1);

return statearr_26644;
})();
if(cljs.core.truth_(inst_26621__$1)){
var statearr_26645_26667 = state_26642__$1;
(statearr_26645_26667[(1)] = (3));

} else {
var statearr_26646_26668 = state_26642__$1;
(statearr_26646_26668[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (3))){
var inst_26621 = (state_26642[(7)]);
var inst_26624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26625 = [app.db.store_name];
var inst_26626 = (new cljs.core.PersistentVector(null,1,(5),inst_26624,inst_26625,null));
var inst_26627 = cljs.core.clj__GT_js(inst_26626);
var inst_26628 = inst_26621.transaction(inst_26627,"readwrite");
var inst_26629 = inst_26628.objectStore(app.db.store_name);
var inst_26630 = cljs.core.clj__GT_js(value);
var inst_26631 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
var inst_26632 = inst_26629.put(inst_26630,inst_26631);
var inst_26633 = (function (){var db = inst_26621;
var transaction = inst_26628;
var store = inst_26629;
var request = inst_26632;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,true);
});
})();
var inst_26634 = (inst_26632.onsuccess = inst_26633);
var inst_26635 = (function (){var db = inst_26621;
var transaction = inst_26628;
var store = inst_26629;
var request = inst_26632;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,false);
});
})();
var inst_26636 = (inst_26632.onerror = inst_26635);
var state_26642__$1 = (function (){var statearr_26647 = state_26642;
(statearr_26647[(8)] = inst_26634);

return statearr_26647;
})();
var statearr_26648_26669 = state_26642__$1;
(statearr_26648_26669[(2)] = inst_26636);

(statearr_26648_26669[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (4))){
var inst_26638 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,false);
var state_26642__$1 = state_26642;
var statearr_26649_26670 = state_26642__$1;
(statearr_26649_26670[(2)] = inst_26638);

(statearr_26649_26670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (5))){
var inst_26640 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26642__$1,inst_26640);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$set_cache_$_state_machine__26486__auto__ = null;
var app$db$set_cache_$_state_machine__26486__auto____0 = (function (){
var statearr_26650 = [null,null,null,null,null,null,null,null,null];
(statearr_26650[(0)] = app$db$set_cache_$_state_machine__26486__auto__);

(statearr_26650[(1)] = (1));

return statearr_26650;
});
var app$db$set_cache_$_state_machine__26486__auto____1 = (function (state_26642){
while(true){
var ret_value__26487__auto__ = (function (){try{while(true){
var result__26488__auto__ = switch__26485__auto__(state_26642);
if(cljs.core.keyword_identical_QMARK_(result__26488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26488__auto__;
}
break;
}
}catch (e26651){var ex__26489__auto__ = e26651;
var statearr_26652_26671 = state_26642;
(statearr_26652_26671[(2)] = ex__26489__auto__);


if(cljs.core.seq((state_26642[(4)]))){
var statearr_26653_26672 = state_26642;
(statearr_26653_26672[(1)] = cljs.core.first((state_26642[(4)])));

} else {
throw ex__26489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26673 = state_26642;
state_26642 = G__26673;
continue;
} else {
return ret_value__26487__auto__;
}
break;
}
});
app$db$set_cache_$_state_machine__26486__auto__ = function(state_26642){
switch(arguments.length){
case 0:
return app$db$set_cache_$_state_machine__26486__auto____0.call(this);
case 1:
return app$db$set_cache_$_state_machine__26486__auto____1.call(this,state_26642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$set_cache_$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$set_cache_$_state_machine__26486__auto____0;
app$db$set_cache_$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$set_cache_$_state_machine__26486__auto____1;
return app$db$set_cache_$_state_machine__26486__auto__;
})()
})();
var state__26510__auto__ = (function (){var statearr_26654 = f__26509__auto__();
(statearr_26654[(6)] = c__26508__auto___26666);

return statearr_26654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26510__auto__);
}));


return out;
});
app.db.hash_key = (function app$db$hash_key(data){
return cljs.core.hash((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});

//# sourceMappingURL=app.db.js.map
