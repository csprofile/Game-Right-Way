var levelTranslator = new Array();
var level = new Array();

levelTranslator['d'] = {type:'disabled', passOver:0};
levelTranslator['s'] = {type:'start', passOver:1};
levelTranslator['n'] = {type:'normal', passOver:1};
levelTranslator['1'] = {type:'pass', passOver:2};
levelTranslator['2'] = {type:'pass', passOver:3};
levelTranslator['0'] = {type:'disabled', passOver:0};


//TUTORIAL
level.push({
    blocks:[
         ['d','s','n',1,2]
    ]
    ,id:0
    ,timer:null
});

//TUTORIAL
level.push({
    blocks:[
         ['s','n','n',1,'n']
        ,['d','n','n','n','d']
    ]
    ,id:1
    ,timer:null
});

level.push({
    blocks:[
         ['n','s','n',1,1]
        ,[1,'n','n',1,1]
        ,['n','n','n',1,1]
    ]
    ,id:1
    ,timer:null
});

level.push({
    blocks:[
         ['n','s','n',1,1]
        ,['n',1,'n','d',1]
        ,[1,1,'n','n',1]
		,['n','n','n',1,1]
    ]
    ,id:2
    ,timer:null
});


level.push({
    blocks:[
         ['d','s',1,1,2]
        ,['n',1,'n','d',1]
    ]
    ,id:3
    ,timer:30
});

level.push({
    blocks:[
         ['d','s',1,1,2]
        ,[2  ,1,'n','d',1]
		,[1,'d','d',1,2]
		,['n',2,'n','n',1]
		,['d',1,'d','s',1]
    ]
    ,id:4
    ,timer:null
});

level.push({
    blocks:[
         ['d','s','n','d','n']
        ,[2  ,1,'n','n',1]
		,[2,'d','d','s','n']
		,[1,2,'n','n',1]
		,['d','n','d','s',1]
    ]
    ,id:4
    ,timer:40
});
