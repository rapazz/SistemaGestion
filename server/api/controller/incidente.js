'use strict';

var _ = require('lodash');
var models  = require('../model');

var Incidente = models.incidente;
var TipoIncidente = models.tipoincidente;
var SubTipoIncidente = models.subtipoincidente;
var Origen = models.origenproblema;
var Codigo = models.codigotermino;
var IncidenteHistorial = models.incidentehistorial
var Estado =  models.estado;
var FlujoEstado =  models.flujoestado
var Usuario =  models.usuario
var seq = models.sequelize;

var async = require('async');


var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser')
var uid = require("node-uuid");

var multer  = require('multer')





exports.listarsinasignar = function(req, res) {


  return  async.series(
    {

      incidente: function (next){seq.query("SELECT *,IFNULL((select nombre from usuario u where " +
        " u.email = i.UsuarioIdKeyUser),'') usuarionombre FROM incidente i where UsuarioIdConsultor is null order by 1 desc", Incidente, {raw: true}
        ).success(function (tipos) {
          next(null,tipos)
          //  console.log(myTableRows)
        })}
      ,
      tipo: function(next) {

        seq.query("SELECT * FROM tipoincidente where EsActivo = 1 ",TipoIncidente,{raw:true},{tipo:req.params.id}).success(function(tipos) {


            next(null, tipos);
          }
        );

      },
      subtipo:  function(next) {


        seq.query("SELECT * FROM subtipoincidente  where EsActivo = 1",SubTipoIncidente,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      }

    }
    ,
    function(err, response) {


      console.log('leyendo incidentes')

      var i = {};

      _(response.incidente).forEach(function(inc) {
        //  console.log(subtipo1.SubTipoIncidenteId)
        var NombreTipo =   _.where(response.tipo,
          { 'TipoIncidenteId': inc.TipoIncidenteId });
        var n = NombreTipo[0].Nombre
        inc.NombreTipo = n;
        console.log(inc.SubTipoIncidenteId )
        inc.SubNombreTipo = "";
        if (inc.SubTipoIncidenteId  != 0) {
          var SubNombreTipo = _.where(response.subtipo,
            {'SubTipoIncidenteId': inc.SubTipoIncidenteId});
          console.log(SubNombreTipo);
          var n1 = SubNombreTipo[0].Nombre
          inc.SubNombreTipo = n1;
        }
      });



      i["incidente"] = response.incidente;




      return res.json(200,i["incidente"]);

    }
  );

  console.log('incidente')
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
};


// Get list of incidentes


exports.listarmisku = function(req, res) {


  return  async.series(
    {

      incidente: function (next){seq.query("SELECT *,IFNULL((select nombre from usuario u where " +
        " u.email = i.UsuarioIdConsultor),'') usuarionombre FROM incidente i where UsuarioIdKeyUser = :email order by 1 desc", Incidente, {raw: true}
        , {email: req.params.id}).success(function (tipos) {
            next(null,tipos)
            //  console.log(myTableRows)
        })}
      ,
      tipo: function(next) {

        seq.query("SELECT * FROM tipoincidente where EsActivo = 1 ",TipoIncidente,{raw:true},{tipo:req.params.id}).success(function(tipos) {


            next(null, tipos);
          }
        );

      },
      subtipo:  function(next) {


      seq.query("SELECT * FROM subtipoincidente  where EsActivo = 1 ",SubTipoIncidente,{raw:true}).success(
        function(x) {
          next(null, x);
        }
      );
    }

    }
    ,
  function(err, response) {


    console.log('leyendo incidentes')

    var i = {};

    _(response.incidente).forEach(function(inc) {
      //  console.log(subtipo1.SubTipoIncidenteId)
      var NombreTipo =   _.where(response.tipo,
        { 'TipoIncidenteId': inc.TipoIncidenteId });
      var n = NombreTipo[0].Nombre
      inc.NombreTipo = n;
      console.log(inc.SubTipoIncidenteId )
      inc.SubNombreTipo = "";
      if (inc.SubTipoIncidenteId  != 0) {
        var SubNombreTipo = _.where(response.subtipo,
          {'SubTipoIncidenteId': inc.SubTipoIncidenteId});
        console.log(SubNombreTipo);
        var n1 = SubNombreTipo[0].Nombre
        inc.SubNombreTipo = n1;
      }
    });



    i["incidente"] = response.incidente;
    i["tipo"] = response.tipo;
    i["subtipo"] = response.subtipo;

    console.log(i["incidente"]);

    return res.json(200,i["incidente"]);

  }
  );

  console.log('incidente')
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
};

exports.listarmisconsultor = function(req, res) {


  return  async.series(
    {

      incidente: function (next){seq.query("SELECT *, IFNULL((select nombre from usuario u where " +
        " u.email = i.UsuarioIdKeyUser),'') usuarionombre  FROM incidente i where UsuarioIdConsultor = :email order by 1 desc",Incidente,{raw:true}
        ,{email:req.params.id}).success(function (tipos) {
          next(null,tipos)
          //  console.log(myTableRows)
        })}
      ,
      tipo: function(next) {

        seq.query("SELECT * FROM tipoincidente where EsActivo = 1 ",TipoIncidente,{raw:true},{tipo:req.params.id}).success(function(tipos) {


            next(null, tipos);
          }
        );

      },
      subtipo:  function(next) {


        seq.query("SELECT * FROM subtipoincidente  where EsActivo = 1",SubTipoIncidente,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      }

    }
    ,
    function(err, response) {


      console.log('leyendo incidentes')

      var i = {};

      _(response.incidente).forEach(function (inc) {
        //  console.log(subtipo1.SubTipoIncidenteId)
        var NombreTipo = _.where(response.tipo,
          {'TipoIncidenteId': inc.TipoIncidenteId});
        var n = NombreTipo[0].Nombre
        inc.NombreTipo = n;
        console.log(inc.SubTipoIncidenteId)
        inc.SubNombreTipo = "";
        if (inc.SubTipoIncidenteId != 0) {
          var SubNombreTipo = _.where(response.subtipo,
            {'SubTipoIncidenteId': inc.SubTipoIncidenteId});
          console.log(SubNombreTipo);
          var n1 = SubNombreTipo[0].Nombre
          inc.SubNombreTipo = n1;
        }
      });


      i["incidente"] = response.incidente;
      i["tipo"] = response.tipo;
      i["subtipo"] = response.subtipo;

      console.log(i["incidente"]);

      return res.json(200, i["incidente"]);

    });




};


exports.listarmisproveedor = function(req, res) {


  console.log('incidente')
  seq.query("SELECT * FROM incidente where UsuarioIdProveedor = :email order by 1 desc",Incidente,{raw:true},
    {email:req.params.id}).success(function(tipos) {
    return res.send( tipos);
  });

};


exports.listar = function(req, res) {


  console.log('incidente')
  seq.query("SELECT * FROM incidente order by 1 desc",Incidente).success(function(tipos) {
    return res.send( tipos);
    //  console.log(myTableRows)
  });
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
};



exports.nuevoid = function(req, res) {

  return res.json(200,   uid.v4() );
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
};

exports.EnvioEmail = function(req, res) {

  var idreq = req.params.id;


  console.log('Envio Email')
    seq.query("SELECT * FROM incidente where IncidenteId = :tipo ",Incidente,{raw:true},{tipo:req.params.id}).success(function(a) {


      console.log('Envio por enviar')
      console.log(a[0]);
      var u = a[0];
      var nodemailer = require('nodemailer');
      var smtpTransport = require('nodemailer-smtp-transport');

      var transport = nodemailer.createTransport(smtpTransport({
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 587,

          auth: {
          user: 'AKIAJGAHAGBMT56FERRA',
          pass: 'AvWUG/8d5fopPAJSUbGUmytmGziTjuyCMLURN8aUi8dK'
        }
      }));
      console.log('Enviando')
      var salida = {
        from: 'ckuknow@gmail.com',
        to: u.EmailProveedor,
        subject: 'Información Incidente ' + u.IncidenteId,
        text: u.TextoOriginal
      }
      console.log(salida)
      transport.sendMail(salida, function(error, response){  //callback
        if(error){
          console.log(error);
        }else{
          console.log("Message sent: " + response.message);
        }

      //  smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
      });
      console.log('Enviado')

      return res.json(200 );

    });






  return res.json(200 );
  // Incidente.find(function (err, incidentes) {
  // if(err) { return handleError(res, err); }
  // return res.json(200, incidentes);
  //});
};
exports.emailproveedorhtml = function(req,res){
var salida =  show(req,res);

var x =     res.render('emailproveedor.html',salida);

  console.log(x)

}


 function RetornaIncidente(id){



  return   async.series(

    {
      incidente:function(next){
        var sql = "SELECT *,IFNULL((select nombre from usuario u where  u.email = i.UsuarioIdConsultor),'') usuarioconsultor " +
          ",IFNULL((select nombre from usuario u where  u.email = i.UsuarioIdKeyUser),'') usuariokeyuser " +
          ",(select nombre from estado e where e.EstadoId = i.Estado) estadonombre FROM incidente i where IncidenteId = :tipo ";
        console.log(sql)
        seq.query(sql,Incidente,{raw:true},{tipo:id}).success(function(u) {
          next(null, u);
        });

      },
      historial:function(next){

        seq.query("SELECT *,IFNULL((select nombre from usuario u where " +
        " u.email = i.UsuarioId),'') usuarionombre FROM incidentehistorial i where IncidenteId = :tipo order by 1",Incidente,{raw:true},{tipo:id}).success(function(u) {
          next(null, u);
        });

      },
      adjunto:function(next){

        seq.query("SELECT * FROM adjunto where EsActivo=1 and IncidenteId = :tipo order by 1",Incidente,{raw:true},{tipo:id}).success(function(u) {
          next(null, u);
        });

      },
      tipo: function(next) {

        seq.query("SELECT * FROM tipoincidente where EsActivo = 1 ",TipoIncidente,{raw:true},{tipo:id}).success(function(tipos) {


            next(null, tipos);
          }
        );

      },
      origen:  function(next) {


        seq.query("SELECT * FROM origenproblema where EsActivo = 1",Origen,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      codigo:  function(next) {


        seq.query("SELECT * FROM codigotermino where EsActivo = 1",Codigo,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      subtipo:  function(next) {


        seq.query("SELECT * FROM subtipoincidente where EsActivo = 1",Codigo,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      estado:  function(next) {


        seq.query("SELECT * FROM estado",Estado,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      flujo:  function(next) {


        seq.query("SELECT * FROM flujoestado",FlujoEstado,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      keyusers:  function(next) {


        seq.query("SELECT * FROM usuario where rolesMenu like '%40,%'",Usuario,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      consultores:  function(next) {


        seq.query("SELECT * FROM usuario where rolesMenu like '%30,%'",Usuario,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      }

    },
    function(err, response) {




      var i = {};
      i["incidente"] = response.incidente[0];
      i["tipo"] = response.tipo;
      i["origen"] = response.origen;
      i["codigo"] = response.codigo;
      i["adjunto"] = response.adjunto;
      i["historial"] = response.historial;
      i["subtipo"] = response.subtipo;
      i["estado"] = response.estado;
      i["flujo"] = response.flujo;
      i["keyusers"] = response.keyusers;
      i["consultores"] = response.consultores;
      return  res.json(200,i);

    });



}
exports.show = function(req, res) {

  var id = req.params.id;

  return   async.series(

    {
      incidente:function(next){
        var sql = "SELECT *,IFNULL((select nombre from usuario u where  u.email = i.UsuarioIdConsultor),'') usuarioconsultor " +
          ",IFNULL((select nombre from usuario u where  u.email = i.UsuarioIdKeyUser),'') usuariokeyuser " +
          ",(select nombre from estado e where e.EstadoId = i.Estado) estadonombre FROM incidente i where IncidenteId = :tipo ";
       
        seq.query(sql,Incidente,{raw:true},{tipo:id}).success(function(u) {
          next(null, u);
        });

      },
      historial:function(next){

        seq.query("SELECT *,IFNULL((select nombre from usuario u where " +
        " u.email = i.UsuarioId),'') usuarionombre FROM incidentehistorial i where IncidenteId = :tipo order by 1",Incidente,{raw:true},{tipo:id}).success(function(u) {
          next(null, u);
        });

      },
      adjunto:function(next){

        seq.query("SELECT * FROM adjunto where EsActivo=1 and  IncidenteId = :tipo order by 1",Incidente,{raw:true},{tipo:id}).success(function(u) {
          next(null, u);
        });

      },
      tipo: function(next) {

        seq.query("SELECT * FROM tipoincidente where EsActivo = 1 ",TipoIncidente,{raw:true},{tipo:id}).success(function(tipos) {


            next(null, tipos);
          }
        );

      },
      origen:  function(next) {


        seq.query("SELECT * FROM origenproblema where EsActivo = 1",Origen,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      codigo:  function(next) {


        seq.query("SELECT * FROM codigotermino where EsActivo = 1",Codigo,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      subtipo:  function(next) {


        seq.query("SELECT * FROM subtipoincidente where EsActivo = 1",Codigo,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      estado:  function(next) {


        seq.query("SELECT * FROM estado",Estado,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      flujo:  function(next) {


        seq.query("SELECT * FROM flujoestado",FlujoEstado,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      keyusers:  function(next) {


        seq.query("SELECT * FROM usuario where rolesMenu like '%40%'",Usuario,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      },
      consultores:  function(next) {


        seq.query("SELECT * FROM usuario where rolesMenu like '%30%'",Usuario,{raw:true}).success(
          function(x) {
            next(null, x);
          }
        );
      }

    },
    function(err, response) {




      var i = {};
      i["incidente"] = response.incidente[0];
      i["tipo"] = response.tipo;
      i["origen"] = response.origen;
      i["codigo"] = response.codigo;
      i["adjunto"] = response.adjunto;
      i["historial"] = response.historial;
      i["subtipo"] = response.subtipo;
      i["estado"] = response.estado;
      i["flujo"] = response.flujo;
      i["keyusers"] = response.keyusers;
      i["consultores"] = response.consultores;
      return  res.json(200,i);

    });


};


exports.actualizar = function(req, res) {

  var inc = req.body;
  var usuario =  inc.UsuarioIdUltimoAsignado
  var idi = inc.IdInterno;
  console.log('Actualizando incidente')
  console.log(inc)
  Incidente.find({ where: {IncidenteId: inc.IncidenteId} }).on('success', function(t) {
    if (t) { // if the record exists in the db
      t.updateAttributes({
        Asunto: inc.Asunto,
        TextoOriginal: inc.TextoOriginal,
        Numero: inc.Numero,
        FechaActualizacion: new Date(),
        UsuarioIdUltimoAsignado: inc.UsuarioIdUltimoAsignado,
        IncidenteIdAnterior: 0,
        IncidenteNumero: '',
        TipoIncidenteId: inc.TipoIncidenteId,
        SubTipoIncidenteId: inc.SubTipoIncidenteId,
        Estado: inc.Estado,
        OrigenProblemaId: inc.OrigenProblemaId,
        CodigoTerminoId: inc.CodigoTerminoId,
        EstadoGeneral: inc.EstadoGeneral,
        EmailProveedor: inc.EmailProveedor,
        UsuarioIdKeyUser: inc.UsuarioIdKeyUser,
        UsuarioIdConsultor: inc.UsuarioIdConsultor,
        RespuestaKU: inc.RespuestaKU
      }).success(function() {


        IncidenteHistorial.create({
          IncidenteId: inc.IncidenteId,
          FechaEvento: new Date(),
          Asunto: inc.Asunto,
          Observacion: inc.TextoOriginal,
          UsuarioId: usuario,
          TipoIncidenteId: inc.TipoIncidenteId,
          SubTipoIncidenteId: inc.SubTipoIncidenteId,
          Estado: inc.Estado,
          OrigenProblemaId: inc.OrigenProblemaId,
          CodigoTerminoId: inc.CodigoTerminoId,
          EstadoGeneral: inc.EstadoGeneral,
          RespuestaKU: inc.RespuestaKU
        }).success(function(x) {

          var idhistorial = x.IncidenteHistorialId;


          seq.query("update adjunto set IncidenteId = :id,HistorialId = :idh  where Guid = :guid ",null,{raw:false},
              {id: inc.IncidenteId,idh:idhistorial,guid:idi}).success(function(x) {

            return res.send(200);
          })



        })





      });
    }
  })


};


exports.tomarincidenteusuario = function(req, res) {

  console.log('ingresa en incidente tomado')
  var inc = req.body.incidente;
  var usuario =  inc.usuario;
  console.log(usuario)

  var idi = inc.IdInterno;
  console.log('tomar incidente')
  console.log(inc)
  Incidente.find({ where: {IncidenteId: inc.IncidenteId} }).on('success', function(t) {
    if (t) { // if the record exists in the db
      t.updateAttributes({
        FechaActualizacion: new Date(),
        UsuarioIdUltimoAsignado: usuario,
        UsuarioIdConsultor: usuario,
        Estado: 20,
        EstadoGeneral: 0,
      }).success(function() {

        IncidenteHistorial.create({
          IncidenteId: inc.IncidenteId,
          FechaEvento: new Date(),
          UsuarioId: usuario,
          Estado:  20,
        }).success(function(x) {

              return res.send(200);


        })





      });
    }
  })


};



exports.crear = function(req, res) {

  var inc = req.body;

  var idi = req.body["IdInterno"];
  var usuario = req.body["usuario"];

  Incidente.create({

    FechaCreacion: new Date(),
    FechaActualizacion: new Date(),
    Asunto: inc.Asunto,
    TextoOriginal:  inc.TextoOriginal,
    //Numero: inc.Numero,
    UsuarioIdUltimoAsignado: usuario,
    UsuarioIdCreacion: usuario,
    UsuarioIdKeyUser: usuario,
    IncidenteIdAnterior: 0,
    IncidenteNumero: '',
    EstadoGeneral: 1,
    TipoIncidenteId: inc.TipoIncidenteId,
    SubTipoIncidenteId: inc.SubTipoIncidenteId,
    Estado: 10,
    OrigenProblemaId: 0,
    CodigoTerminoId: 0

  }).success(function(x) {

    IncidenteHistorial.create({
      IncidenteId: x.IncidenteId,
      FechaEvento: new Date(),
      Asunto: inc.Asunto,
      Observacion: inc.TextoOriginal,
      UsuarioId: usuario,
      TipoIncidenteId: inc.TipoIncidenteId,
      SubTipoIncidenteId: inc.SubTipoIncidenteId,
      Estado: 10,
      OrigenProblemaId: inc.OrigenProblemaId,
      CodigoTerminoId: inc.CodigoTerminoId,
      EstadoGeneral: 1
    }).success(function(x1) {
      var idh = x.IncidenteHistorialId;

      seq.query("update adjunto set IncidenteId = :id,HistorialId = :idh where Guid = :guid ", null, {raw: false}, {
        id: x1.IncidenteId,
        guid: idi,idh: idh
      }).success(function (x) {

        return res.json(x1.IncidenteId);
      })

    })

  });






};

function handleError(res, err) {
  return res.send(500, err);
}
