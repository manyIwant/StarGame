// ===== 存档 & 读取系统 =====

// 用户登录信息
function loadUser(){try{var d=localStorage.getItem('gdstar_user');if(d){S.user=JSON.parse(d);}}catch(e){}}

// 余额
function loadBalance(){try{var b=localStorage.getItem('gdstar_bal');if(b)S.balance=parseInt(b)||0;}catch(e){}}

// 订单存档/读取
function saveOrders(){try{localStorage.setItem('gdstar_orders',JSON.stringify(S.orders));}catch(e){}}
function loadOrders(){try{var d=localStorage.getItem('gdstar_orders');if(d){var arr=JSON.parse(d);S.orders=arr;for(var i=0;i<S.orders.length;i++){var o=S.orders[i];o.departureTime=Number(o.departureTime);o.arrivalTime=Number(o.arrivalTime);o.createdAt=Number(o.createdAt);}}}catch(e){}}

// 成就存档/读取
function loadAch(){try{var d=localStorage.getItem('gdstar_ach');if(d){var a=JSON.parse(d);for(var k in a){if(ACHIEVEMENTS[k])ACHIEVEMENTS[k].unlocked=a[k];}}}catch(e){}}
function saveAch(){var o={};for(var k in ACHIEVEMENTS){o[k]=ACHIEVEMENTS[k].unlocked;}try{localStorage.setItem('gdstar_ach',JSON.stringify(o));}catch(e){}}

// ===== 星际探索存档 =====
function savePlayer(){try{var d={shipName:S.shipName,energy:S.energy,minerals:S.minerals,dataCrystals:S.dataCrystals,reputation:S.reputation,shipLevel:S.shipLevel,currentLocation:S.currentLocation,currentPlanet:S.currentPlanet};localStorage.setItem('gdstar_player',JSON.stringify(d));}catch(e){}}
function loadPlayer(){try{var d=localStorage.getItem('gdstar_player');if(d){var p=JSON.parse(d);S.shipName=p.shipName||'探索者号';S.energy=p.energy!=null?p.energy:100;S.minerals=p.minerals!=null?p.minerals:50;S.dataCrystals=p.dataCrystals!=null?p.dataCrystals:0;S.reputation=p.reputation!=null?p.reputation:0;S.shipLevel=p.shipLevel||1;S.currentLocation=p.currentLocation||'太阳系';S.currentPlanet=p.currentPlanet||null;}}catch(e){}}
