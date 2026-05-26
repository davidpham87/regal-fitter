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
var temp__5823__auto___26709 = cljs.core.deref(app.db.db_connection);
if(cljs.core.truth_(temp__5823__auto___26709)){
var db_26710 = temp__5823__auto___26709;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,db_26710);
} else {
var request_26711 = self.indexedDB.open(app.db.db_name,app.db.version);
(request_26711.onupgradeneeded = (function (event){
var db = event.target.result;
if(cljs.core.truth_(db.objectStoreNames.contains(app.db.store_name))){
return null;
} else {
return db.createObjectStore(app.db.store_name);
}
}));

(request_26711.onsuccess = (function (event){
var db = event.target.result;
cljs.core.reset_BANG_(app.db.db_connection,db);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,db);
}));

(request_26711.onerror = (function (event){
console.error("IndexedDB error:",event.target.error);

return cljs.core.async.close_BANG_(out);
}));
}

return out;
});
app.db.get_cache = (function app$db$get_cache(k){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26508__auto___26712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26509__auto__ = (function (){var switch__26485__auto__ = (function (state_26605){
var state_val_26606 = (state_26605[(1)]);
if((state_val_26606 === (1))){
var inst_26581 = app.db.open_db();
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26605__$1,(2),inst_26581);
} else {
if((state_val_26606 === (2))){
var inst_26585 = (state_26605[(7)]);
var inst_26585__$1 = (state_26605[(2)]);
var state_26605__$1 = (function (){var statearr_26610 = state_26605;
(statearr_26610[(7)] = inst_26585__$1);

return statearr_26610;
})();
if(cljs.core.truth_(inst_26585__$1)){
var statearr_26611_26713 = state_26605__$1;
(statearr_26611_26713[(1)] = (3));

} else {
var statearr_26612_26714 = state_26605__$1;
(statearr_26612_26714[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (3))){
var inst_26585 = (state_26605[(7)]);
var inst_26587 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26588 = [app.db.store_name];
var inst_26589 = (new cljs.core.PersistentVector(null,1,(5),inst_26587,inst_26588,null));
var inst_26590 = cljs.core.clj__GT_js(inst_26589);
var inst_26591 = inst_26585.transaction(inst_26590,"readonly");
var inst_26592 = inst_26591.objectStore(app.db.store_name);
var inst_26593 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
var inst_26594 = inst_26592.get(inst_26593);
var inst_26596 = (function (){var db = inst_26585;
var transaction = inst_26591;
var store = inst_26592;
var request = inst_26594;
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
var inst_26597 = (inst_26594.onsuccess = inst_26596);
var inst_26598 = (function (){var db = inst_26585;
var transaction = inst_26591;
var store = inst_26592;
var request = inst_26594;
return (function (event){
return cljs.core.async.close_BANG_(out);
});
})();
var inst_26599 = (inst_26594.onerror = inst_26598);
var state_26605__$1 = (function (){var statearr_26613 = state_26605;
(statearr_26613[(8)] = inst_26597);

return statearr_26613;
})();
var statearr_26614_26717 = state_26605__$1;
(statearr_26614_26717[(2)] = inst_26599);

(statearr_26614_26717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (4))){
var inst_26601 = cljs.core.async.close_BANG_(out);
var state_26605__$1 = state_26605;
var statearr_26616_26719 = state_26605__$1;
(statearr_26616_26719[(2)] = inst_26601);

(statearr_26616_26719[(1)] = (5));


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
var statearr_26631 = [null,null,null,null,null,null,null,null,null];
(statearr_26631[(0)] = app$db$get_cache_$_state_machine__26486__auto__);

(statearr_26631[(1)] = (1));

return statearr_26631;
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
}catch (e26632){var ex__26489__auto__ = e26632;
var statearr_26634_26744 = state_26605;
(statearr_26634_26744[(2)] = ex__26489__auto__);


if(cljs.core.seq((state_26605[(4)]))){
var statearr_26635_26745 = state_26605;
(statearr_26635_26745[(1)] = cljs.core.first((state_26605[(4)])));

} else {
throw ex__26489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26746 = state_26605;
state_26605 = G__26746;
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
var state__26510__auto__ = (function (){var statearr_26637 = f__26509__auto__();
(statearr_26637[(6)] = c__26508__auto___26712);

return statearr_26637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26510__auto__);
}));


return out;
});
app.db.set_cache = (function app$db$set_cache(k,value){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26508__auto___26748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26509__auto__ = (function (){var switch__26485__auto__ = (function (state_26660){
var state_val_26661 = (state_26660[(1)]);
if((state_val_26661 === (1))){
var inst_26638 = app.db.open_db();
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26660__$1,(2),inst_26638);
} else {
if((state_val_26661 === (2))){
var inst_26640 = (state_26660[(7)]);
var inst_26640__$1 = (state_26660[(2)]);
var state_26660__$1 = (function (){var statearr_26662 = state_26660;
(statearr_26662[(7)] = inst_26640__$1);

return statearr_26662;
})();
if(cljs.core.truth_(inst_26640__$1)){
var statearr_26663_26755 = state_26660__$1;
(statearr_26663_26755[(1)] = (3));

} else {
var statearr_26664_26756 = state_26660__$1;
(statearr_26664_26756[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (3))){
var inst_26640 = (state_26660[(7)]);
var inst_26642 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26643 = [app.db.store_name];
var inst_26644 = (new cljs.core.PersistentVector(null,1,(5),inst_26642,inst_26643,null));
var inst_26645 = cljs.core.clj__GT_js(inst_26644);
var inst_26646 = inst_26640.transaction(inst_26645,"readwrite");
var inst_26647 = inst_26646.objectStore(app.db.store_name);
var inst_26648 = cljs.core.clj__GT_js(value);
var inst_26649 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
var inst_26650 = inst_26647.put(inst_26648,inst_26649);
var inst_26651 = (function (){var db = inst_26640;
var transaction = inst_26646;
var store = inst_26647;
var request = inst_26650;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,true);
});
})();
var inst_26652 = (inst_26650.onsuccess = inst_26651);
var inst_26653 = (function (){var db = inst_26640;
var transaction = inst_26646;
var store = inst_26647;
var request = inst_26650;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,false);
});
})();
var inst_26654 = (inst_26650.onerror = inst_26653);
var state_26660__$1 = (function (){var statearr_26665 = state_26660;
(statearr_26665[(8)] = inst_26652);

return statearr_26665;
})();
var statearr_26666_26758 = state_26660__$1;
(statearr_26666_26758[(2)] = inst_26654);

(statearr_26666_26758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (4))){
var inst_26656 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,false);
var state_26660__$1 = state_26660;
var statearr_26667_26759 = state_26660__$1;
(statearr_26667_26759[(2)] = inst_26656);

(statearr_26667_26759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (5))){
var inst_26658 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26660__$1,inst_26658);
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
var statearr_26668 = [null,null,null,null,null,null,null,null,null];
(statearr_26668[(0)] = app$db$set_cache_$_state_machine__26486__auto__);

(statearr_26668[(1)] = (1));

return statearr_26668;
});
var app$db$set_cache_$_state_machine__26486__auto____1 = (function (state_26660){
while(true){
var ret_value__26487__auto__ = (function (){try{while(true){
var result__26488__auto__ = switch__26485__auto__(state_26660);
if(cljs.core.keyword_identical_QMARK_(result__26488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26488__auto__;
}
break;
}
}catch (e26669){var ex__26489__auto__ = e26669;
var statearr_26670_26768 = state_26660;
(statearr_26670_26768[(2)] = ex__26489__auto__);


if(cljs.core.seq((state_26660[(4)]))){
var statearr_26671_26772 = state_26660;
(statearr_26671_26772[(1)] = cljs.core.first((state_26660[(4)])));

} else {
throw ex__26489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26773 = state_26660;
state_26660 = G__26773;
continue;
} else {
return ret_value__26487__auto__;
}
break;
}
});
app$db$set_cache_$_state_machine__26486__auto__ = function(state_26660){
switch(arguments.length){
case 0:
return app$db$set_cache_$_state_machine__26486__auto____0.call(this);
case 1:
return app$db$set_cache_$_state_machine__26486__auto____1.call(this,state_26660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$set_cache_$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$set_cache_$_state_machine__26486__auto____0;
app$db$set_cache_$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$set_cache_$_state_machine__26486__auto____1;
return app$db$set_cache_$_state_machine__26486__auto__;
})()
})();
var state__26510__auto__ = (function (){var statearr_26672 = f__26509__auto__();
(statearr_26672[(6)] = c__26508__auto___26748);

return statearr_26672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26510__auto__);
}));


return out;
});
app.db.hash_key = (function app$db$hash_key(data){
return cljs.core.hash((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
app.db.clear_cache = (function app$db$clear_cache(){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26508__auto___26774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26509__auto__ = (function (){var switch__26485__auto__ = (function (state_26694){
var state_val_26695 = (state_26694[(1)]);
if((state_val_26695 === (1))){
var inst_26674 = app.db.open_db();
var state_26694__$1 = state_26694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26694__$1,(2),inst_26674);
} else {
if((state_val_26695 === (2))){
var inst_26676 = (state_26694[(7)]);
var inst_26676__$1 = (state_26694[(2)]);
var state_26694__$1 = (function (){var statearr_26697 = state_26694;
(statearr_26697[(7)] = inst_26676__$1);

return statearr_26697;
})();
if(cljs.core.truth_(inst_26676__$1)){
var statearr_26698_26777 = state_26694__$1;
(statearr_26698_26777[(1)] = (3));

} else {
var statearr_26699_26778 = state_26694__$1;
(statearr_26699_26778[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (3))){
var inst_26676 = (state_26694[(7)]);
var inst_26678 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26679 = [app.db.store_name];
var inst_26680 = (new cljs.core.PersistentVector(null,1,(5),inst_26678,inst_26679,null));
var inst_26681 = cljs.core.clj__GT_js(inst_26680);
var inst_26682 = inst_26676.transaction(inst_26681,"readwrite");
var inst_26683 = inst_26682.objectStore(app.db.store_name);
var inst_26684 = inst_26683.clear();
var inst_26685 = (function (){var db = inst_26676;
var transaction = inst_26682;
var store = inst_26683;
var request = inst_26684;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,true);
});
})();
var inst_26686 = (inst_26684.onsuccess = inst_26685);
var inst_26687 = (function (){var db = inst_26676;
var transaction = inst_26682;
var store = inst_26683;
var request = inst_26684;
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,false);
});
})();
var inst_26688 = (inst_26684.onerror = inst_26687);
var state_26694__$1 = (function (){var statearr_26700 = state_26694;
(statearr_26700[(8)] = inst_26686);

return statearr_26700;
})();
var statearr_26701_26779 = state_26694__$1;
(statearr_26701_26779[(2)] = inst_26688);

(statearr_26701_26779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (4))){
var inst_26690 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,false);
var state_26694__$1 = state_26694;
var statearr_26703_26783 = state_26694__$1;
(statearr_26703_26783[(2)] = inst_26690);

(statearr_26703_26783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (5))){
var inst_26692 = (state_26694[(2)]);
var state_26694__$1 = state_26694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26694__$1,inst_26692);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$db$clear_cache_$_state_machine__26486__auto__ = null;
var app$db$clear_cache_$_state_machine__26486__auto____0 = (function (){
var statearr_26704 = [null,null,null,null,null,null,null,null,null];
(statearr_26704[(0)] = app$db$clear_cache_$_state_machine__26486__auto__);

(statearr_26704[(1)] = (1));

return statearr_26704;
});
var app$db$clear_cache_$_state_machine__26486__auto____1 = (function (state_26694){
while(true){
var ret_value__26487__auto__ = (function (){try{while(true){
var result__26488__auto__ = switch__26485__auto__(state_26694);
if(cljs.core.keyword_identical_QMARK_(result__26488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26488__auto__;
}
break;
}
}catch (e26705){var ex__26489__auto__ = e26705;
var statearr_26706_26786 = state_26694;
(statearr_26706_26786[(2)] = ex__26489__auto__);


if(cljs.core.seq((state_26694[(4)]))){
var statearr_26707_26787 = state_26694;
(statearr_26707_26787[(1)] = cljs.core.first((state_26694[(4)])));

} else {
throw ex__26489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26791 = state_26694;
state_26694 = G__26791;
continue;
} else {
return ret_value__26487__auto__;
}
break;
}
});
app$db$clear_cache_$_state_machine__26486__auto__ = function(state_26694){
switch(arguments.length){
case 0:
return app$db$clear_cache_$_state_machine__26486__auto____0.call(this);
case 1:
return app$db$clear_cache_$_state_machine__26486__auto____1.call(this,state_26694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$db$clear_cache_$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$0 = app$db$clear_cache_$_state_machine__26486__auto____0;
app$db$clear_cache_$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$1 = app$db$clear_cache_$_state_machine__26486__auto____1;
return app$db$clear_cache_$_state_machine__26486__auto__;
})()
})();
var state__26510__auto__ = (function (){var statearr_26708 = f__26509__auto__();
(statearr_26708[(6)] = c__26508__auto___26774);

return statearr_26708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26510__auto__);
}));


return out;
});

//# sourceMappingURL=app.db.js.map
