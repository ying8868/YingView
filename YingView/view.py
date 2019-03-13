
from django.http import HttpResponse
from django.shortcuts import render 
import  YingView.database.gubiaochi  as dg
def index(request):
     
    #context = {}
    #context['hello'] = 'Hello World!  templates'
    return render(request, 'index.html')
def hello(request):
     
    #context = {}
    #context['hello'] = 'Hello World!  templates'
    return render(request, 'hello.html')
def hellotest(request):
    print ('view hello test')
    #request.encoding='utf-8' 
    return HttpResponse(dg.get_js_data())
    #return HttpResponse(dg.get_c2(sort,sv ))
    #return HttpResponse(dg.get_js_data())


def test(request):
     
    #context = {}
    #context['hello'] = 'Hello World!  templates'
    return render(request, 'test.html')
def  c(request):
     
    #context = {}
    #context['hello'] = 'Hello World!  templates'
    return render(request, 'c2.html')

def  c2(request): 

    request.encoding='utf-8' 
    if 'sort' in request.GET:
        # 排序方式 code zdf hsl lb jd ntime ntimejd pice  yl zhenf     
        sort = request.GET['sort']

        sv = request.GET['sv'] 
     
        #print(sort +  sv)    

    #str = dg.get_gubiaochi()
    #return render(request, 'gubiaochi.json', context)
    return HttpResponse(dg.get_c2(sort,sv ))


def test_json(request):
    request.encoding='utf-8' 
    return HttpResponse(dg.get_min_data())

def gubiaochi(request):
     
    request.encoding='utf-8' 
    if 'sort' in request.GET:
        # 排序方式 code zdf hsl lb jd ntime ntimejd pice  yl zhenf     
        sort = request.GET['sort']

        sv = request.GET['sv'] 
     
        #print(sort +  sv)    

    #str = dg.get_gubiaochi()
    #return render(request, 'gubiaochi.json', context)
    json=dg.get_gubiaochi(sort,sv )
    #print(json)
    return HttpResponse(json)
    
