const express = require('express')
const app = express()
const port = 3000
const cheerio = require('cheerio');
const axios  =require('axios');



async function getproduct(url){
var produit = {site:"",Nom_produit:"", Prix:"", image:"",lien:"",Etat:""};
        const {data}= await axios.get(url);
        const $ = cheerio.load(data);
        //console.log(data)
        var x=$('.ajax_block_product').first()
        // produit.site=x.find('a').attr('href').split('w.').pop().split('.tn')[0];
         produit.image=x.find('img').attr('src');
         produit.lien=x.find('a').attr('href');
         produit.Nom_produit=x.find('a').attr('title');
         produit.Prix=x.find('span.price').text();
         produit.Etat=x.find('span.available-now').text();
       
   
return produit
}


async function getproductt(url){
    var produit = {site:"",Nom_produit:"", Prix:"", image:"",lien:"",Etat:""};
            const {data}= await axios.get(url);
            const $ = cheerio.load(data);
            //console.log(data)
            var x=$('.ajax_block_product').first()
            // produit.site=x.find('a').attr('href').split('w.').pop().split('.tn')[0];
             produit.image=x.find('img').attr('src');
             produit.lien=x.find('a').attr('href');
             produit.Nom_produit=x.find('a.product-name').text();
             produit.Prix=x.find('span.price').text();
             produit.Etat=x.find('span.available-now').text();
           
       
    return produit
    }

    
app.get('/:mots',async (req, result) =>{ 
    mots=req.params.mots
    url1=("https://www.wiki.tn/recherche?controller=search&orderby=position&orderway=desc&search_query="+mots+"&submit_search="),
    url2=("https://www.mytek.tn/recherche?controller=search&orderby=position&orderway=desc&search_query="+mots+"&submit_search="), 
    url3=("https://www.tunisianet.com.tn/recherche?controller=search&orderby=price&orderway=asc&s="+mots+"&submit_search="),
    url4=("https://www.zoom.com.tn/module/spsearchpro/catesearch?fc=module&module=spsearchpro&controller=catesearch&orderby=name&orderway=ASC&cat_id=2%2C899%2C719%2C901%2C759%2C900%2C902%2C912%2C913%2C992%2C1065%2C1061%2C1066%2C1062%2C1063%2C903%2C1064%2C695%2C711%2C914%2C1023%2C915%2C712%2C917%2C1024%2C918%2C717%2C716%2C1071%2C981%2C982%2C983%2C984%2C916%2C851%2C696%2C920%2C921%2C990%2C715%2C923%2C924%2C925%2C699%2C763%2C776%2C1040%2C926%2C773%2C1068%2C774%2C775%2C764%2C883%2C927%2C1069%2C777%2C1095%2C1094%2C770%2C771%2C766%2C784%2C785%2C786%2C767%2C1072%2C768%2C769%2C765%2C884%2C779%2C780%2C885%2C782%2C783%2C701%2C792%2C1067%2C793%2C795%2C796%2C798%2C794%2C904%2C799%2C889%2C803%2C802%2C886%2C709%2C846%2C1017%2C1018%2C1019%2C1020%2C1021%2C847%2C1050%2C989%2C857%2C854%2C855%2C856%2C988%2C852%2C976%2C977%2C978%2C979%2C848%2C1025%2C1026%2C1027%2C1028%2C1029%2C849%2C1105%2C1106%2C1107%2C1108%2C1109%2C853%2C704%2C812%2C813%2C815%2C816%2C817%2C819%2C1102%2C810%2C811%2C703%2C806%2C928%2C929%2C930%2C807%2C931%2C932%2C933%2C985%2C1022%2C987%2C986%2C1096%2C1073%2C1074%2C708%2C910%2C705%2C822%2C823%2C824%2C825%2C1112%2C827%2C826%2C828%2C909%2C908%2C706%2C831%2C936%2C937%2C938%2C1044%2C1043%2C940%2C1045%2C830%2C939%2C1048%2C1049%2C1046%2C1047%2C1051%2C1052%2C1053%2C1090%2C1091%2C1092%2C1054%2C1055%2C1056%2C1057%2C1058%2C1060%2C1075%2C1076%2C1077%2C1083%2C1078%2C1079%2C1080%2C1081%2C1082%2C1084%2C1085%2C1086%2C1087%2C1097%2C1098%2C710%2C860%2C941%2C1100%2C942%2C943%2C944%2C945%2C946%2C947%2C948%2C911%2C949%2C950%2C951%2C952%2C953%2C1032%2C1088%2C1089%2C859%2C964%2C965%2C861%2C954%2C955%2C956%2C957%2C958%2C959%2C960%2C961%2C962%2C1099%2C963%2C1110%2C1111%2C1104%2C1103%2C700%2C787%2C788%2C789%2C966%2C967%2C968%2C969%2C970%2C971%2C790%2C972%2C973%2C974%2C975%2C993%2C995%2C996%2C997%2C998%2C1000%2C999%2C1001%2C1002%2C1003%2C1004%2C994%2C725%2C726%2C1007%2C1008%2C1009%2C1010%2C1011%2C1012%2C1013%2C1036%2C1014%2C1035%2C1037%2C1038%2C1030%2C1031%2C1034%2C1039%2C1015%2C1016%2C1070%2C1101&search_query="+mots+"&spr_submit_search=Search&n=120")

    var t = []
    var d=await getproduct(url1)
    var f=await getproduct(url2)
    //var c=await getproduct(url3)
    var y=await getproductt(url4)
  t.push(d,f,y)
  t.sort(sortByProperty("Prix"));

    result.send(t)
  
})

function sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
   
       return 0;  
    }  
 }

app.listen(port, () => console.log(`Example app listening on port port!`))

