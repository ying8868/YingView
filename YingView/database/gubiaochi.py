import YingView.database.db_helper as dbh
#import  YingView.database.gubiaochi  as dg
import pandas as pd
import pymongo
def get_gubiaochi(sort='dd_time',xu='-1' ):
    
    db=dbh.getConn()
    #return -1
    if db.gubiaochi.find().count()==0:
        return -1
    #req=db.gubiaochi.find().sort({'jd':'1'})#.sort({_id:-1}) 
    if xu=='1':
        xu=pymongo.ASCENDING
    elif xu=='-1':
        xu=pymongo.DESCENDING
    if sort == 'dd_time':
        req = db.gubiaochi.find().sort([("dd_time",pymongo.ASCENDING), ("ntime",pymongo.ASCENDING), ("yd_mod_count",pymongo.DESCENDING)])

    else:
        req = db.gubiaochi.find().sort(sort, xu)
    df=pd.DataFrame(list(req))[['sc','pice','open','code','name','dd_count','kk_count','hsl','lb','yd_mod_count','yd_count','yl','ylw','nzdf','ntime','jd','close','zhenf','dd_time','yc']]

    df=df.fillna(0)
    json=df.to_json(orient='index')
    print('get_gubiaochi.py')
    return json

def get_c2(sort='jd',xu='-1' ):
    
    db=dbh.getConn()
    #return -1
    if db.gubiaochi.find().count()==0:
        return -1
    #req=db.gubiaochi.find().sort({'jd':'1'})#.sort({_id:-1}) 
    if xu=='1':
        xu=pymongo.ASCENDING
    elif xu=='-1':
        xu=pymongo.DESCENDING
    #db.gubiaochi.find({ yd_y_k_count: { $lt: 1  }  })
    req=db.gubiaochi.find({'yd_y_k_count':{'$lt':1}})    .sort(sort,xu)
    df=pd.DataFrame(list(req)) 
    if len(df)<1:
        print('df  yd_y_k  =============')
        return -1
    
    df=df.fillna(0)
    #indexdf=df['code']
    #df = df.apply(pd.to_numeric, errors='ignore')  
    #df['code']=indexdf 
    #df=df.sort_values(by='jd', ascending=False)
    df.drop('_id',axis=1,inplace=True)
    df.drop('boo',axis=1,inplace=True) 
    json=df.to_json(orient='index')  
    print('get_gubiaochi.py  get_c2')
    #return 'get_gubiaochi.py'

    return json

def get_min_data():
    
    db=dbh.getConn()
    #db.gubiaochi.find({'code','600604'})
    #req=db.gubiaochi.find({'code':'600589'}) 
    req=db.min_quote.find({'code':'600460'})
    df=pd.DataFrame(list(req)) 
    df.drop('_id',axis=1,inplace=True)
    json=df.to_json(orient='index')

    #print(json)
    return  json

    #return  -1


def get_js_data():
    
    db=dbh.getConn()

    #db.gubiaochi.find({'code','600604'})
    #req=db.gubiaochi.find({'code':'600589'}) 
    req=db.js_quote.find() 
    #print(df)
    df=pd.DataFrame(list(req)) 
    df.drop('_id',axis=1,inplace=True)
    json=df.to_json(orient='index')  
    #print(df)  
    return  json

