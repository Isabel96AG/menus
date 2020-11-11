
const express = require("express");
const app = express();
const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let db;

MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("menus");
  }
});
app.get("/api/menus", function (req,res){
    db.collection("menus").find().toArray(function(err,datos){
        if(err!==null){
            res.send(err);
        }else{
            res.send(datos);
        }
    });
});
app.post("/api/nuevoMenu",function(req,res){
    let menu={
        numero:parseInt(req.body.numero),
        primerPlato:req.body.primerPlato,
        postre:req.body.postre,
        segundoPlato:req.body.segundoPlato,
        precio:parseInt(req.body.precio)
    };
    db.collection("menus").insertOne(menu,function (err,datos){
        if(err!==null){
            res.send(err);
        }else{
            db.collection("menus").find().toArray(function(err,datos){
                if(err!==null){
                    res.send(err);
                }else{
                    res.send(datos);
                }
            });
        }
    });
});

app.put("/api/editarMenu", function (req, res) {
  const numero = req.body.numero;

  db.collection("menus").updateOne(
    { numero: numero },
    { $set: { postre: "Helado" } },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});






app.delete("/api/borrarMenu", function (req, res) {
  const menu={
    numero:parseInt(req.body.numero),
    primerPlato:req.body.primerPlato,
    postre:req.body.postre,
    segundoPlato:req.body.segundoPlato,
    precio:parseInt(req.body.precio)
};
    db.collection("menus").deleteOne(menu, function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
        console.log(datos);
      }
    });
  });
  






app.listen(3000);