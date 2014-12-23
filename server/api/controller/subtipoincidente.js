'use strict';

var _ = require('lodash');
var async = require('async');
var express = require('express');
var models  = require('../model');
var seq = models.sequelize;


var tipoIncidente = models.tipoincidente;

var SubTipoIncidente =models.subtipoincidente;




// Get list of incidentes
exports.index = function(req, res) {


 return  async.series(

      {
        subtipo: function(next) {
          console.log(11);
          seq.query("SELECT * FROM subtipoincidente",SubTipoIncidente).success(
              function(x) {
                next(null, x);
              }
          );

        },
        tipo:  function(next) {

          console.log(next)
          seq.query("SELECT * FROM tipoincidente",tipoIncidente).success(
              function(x) {
                next(null, x);
              }
          );



        }
      },
      function(err, response) {


        //console.log(response.tipo)


        _(response.subtipo).forEach(function(subtipo1) {
          //  console.log(subtipo1.SubTipoIncidenteId)
          var NombreTipo =   _.where(response.tipo,
              { 'TipoIncidenteId': subtipo1.dataValues.TipoIncidenteId });
          var n = NombreTipo[0].dataValues["Nombre"]
       subtipo1.dataValues["NombreTipo"] = n;
        });

        return res.send(response.subtipo);



       }

      /*[
        function(callback) {
          callback(null,

          );
        },
        function(callback) {
          callback(null, 'JavaScript');
        },
      ],
      function(err, response) {
        // response is ['Node.js', 'JavaScript']
      }
*/





  );



}
/*
  ;*/


 /* seq.query("SELECT * FROM subtipoincidente",SubTipoIncidente).success(function(tipos) {

   // console.log(tipos)
  /*  for (var i in tipos) {
      var u = tipos[i];
      u.NombreTipo = "";
      seq.query("SELECT nombre from tipoincidente where TipoIncidenteId = " + u.TipoIncidenteId).then(function (v) {
        if (v.length > 0) {
          u.NombreTipo = v.nombre;
        }

      });
      console.log(u.NombreTipo );
    }*/
   /*console.log(tipos);
    return res.send( tipos);
    //  console.log(myTableRows)
  });*/
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
exports.activos = function(req, res) {




  return  async.series(

    {
      subtipo: function(next) {
        console.log(11);
        seq.query("SELECT * FROM subtipoincidente where  EsActivo = 1 ",SubTipoIncidente,{raw:true}).success(function(tipos) {


            next(null, tipos);
          }
        );

      },
      tipo:  function(next) {

        console.log(next)
        seq.query("SELECT * FROM tipoincidente where  EsActivo = 1",tipoIncidente,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );



      }
    },
    function(err, response) {


      console.log(response.tipo)
      console.log(response.subtipo)

      response.subtipo.Tipos = response.tipo;


      return res.send(response.subtipo);



    }



  );




};

exports.show = function(req, res) {




  return  async.series(

      {
        subtipo: function(next) {
          console.log(11);
          seq.query("SELECT * FROM subtipoincidente where SubTipoIncidenteId = :tipo ",SubTipoIncidente,{raw:false},{tipo:req.params.id}).success(function(tipos) {


                next(null, tipos);
              }
          );

        },
        tipo:  function(next) {

          console.log(next)
          seq.query("SELECT * FROM tipoincidente",tipoIncidente).success(
              function(x) {
                next(null, x);
              }
          );



        }
      },
      function(err, response) {


        //console.log(response.tipo)


        response.subtipo[0].dataValues["Tipos"] = response.tipo;


        return res.send(response.subtipo[0]);



      }



  );




};

exports.actualizar = function(req, res) {

  var tipo = req.body;
  SubTipoIncidente.find({ where: {SubTipoIncidenteId: tipo.SubTipoIncidenteId} }).on('success', function(t) {
    if (t) { // if the record exists in the db
      t.updateAttributes({
        Nombre: tipo.Nombre,
        EsActivo: tipo.EsActivo,
        TipoIncidenteId: tipo.TipoIncidenteId
      }).success(function() {
        console.log('ok')
        return res.json(tipo.SubTipoIncidenteId);
      });
    }
  })


};

exports.crear = function(req, res) {

  var tipo = req.body;
  SubTipoIncidente.create({
    Nombre: tipo.Nombre,
    EsActivo: tipo.EsActivo,
    FechaCreacion: new Date(),
    TipoIncidenteId: tipo.TipoIncidenteId
  }).success(function(x) {
    console.log(x.TipoIncidenteId)
    return res.json(x.TipoIncidenteId);
  });



};


function handleError(res, err) {
  return res.send(500, err);
}
