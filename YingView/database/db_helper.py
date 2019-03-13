import pymongo 
import YingView.database.conf as  cf
def getConn():
    conn = pymongo.MongoClient(cf.host,cf.post)
    return  conn.ying

 