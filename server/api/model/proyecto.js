
"use strict";


module.exports = function(sequelize, DataTypes) {
  var proyecto = sequelize.define("proyecto", {
    idProyecto: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: DataTypes.STRING,
  resumenEjecutivo: DataTypes.STRING,
  idSolicitante:DataTypes.INTEGER,
  idEmpresa:DataTypes.INTEGER,
  idDepartamento:DataTypes.INTEGER,
  idJefeProyecto:DataTypes.INTEGER,
  fechaCreacion:DataTypes.DATE,
  idEstadoProyecto:DataTypes.INTEGER,
  idBp:DataTypes.INTEGER,
  idEtapaProyecto:DataTypes.INTEGER,
  fechaEstimadaComienzo:DataTypes.DATE,
  duracionSemana:DataTypes.INTEGER,
  idComplejidad:DataTypes.INTEGER,
  costoOneOff:DataTypes.INTEGER,
  costoOnGoing:DataTypes.INTEGER,
  beneficios:DataTypes.INTEGER,
  beneficioIntangible:DataTypes.STRING,
  tipoProyecto:DataTypes.STRING,
  fechaEstimadaCierre:DataTypes.DATE,
  idSaludProyecto:DataTypes.INTEGER,
  comentarioAvance:DataTypes.STRING,
  avance:DataTypes.INTEGER
  
  }, 
   {
    classMethods: {
      associate: function(models) {
        proyecto.belongsTo(models.empresa,{foreignKey:'idEmpresa'})
        proyecto.belongsTo(models.departamento,{foreignKey:'idDepartamento',as:'departamento'})
        proyecto.belongsTo(models.usuario,{foreignKey:'idSolicitante', as:'usuario'})
        proyecto.belongsTo(models.usuario,{foreignKey:'idJefeProyecto', as:'jefeProyecto'})
        proyecto.belongsTo(models.usuario,{foreignKey:'idBp', as:'usuarioBp'})
        proyecto.belongsTo(models.etapaProyecto,{foreignKey:'idEtapaProyecto', as:'etapa'})
        proyecto.belongsTo(models.estadoProyecto,{foreignKey:'idEstadoProyecto', as:'estadoProyecto'})
         proyecto.belongsTo(models.parametros,{foreignKey:'idComplejidad', as:'complejidad'})
        proyecto.hasMany(models.proyectoAdjunto,{foreignKey:'idProyecto', as:'adjunto'})
       proyecto.hasMany(models.versiones,{foreignKey:'idProyecto', as:'version'})
       proyecto.hasMany(models.equipoProyecto,{foreignKey:'idProyecto', as:'equipoProyecto'})
       proyecto.hasMany(models.entregableProyecto,{foreignKey:'idProyecto', as:'entregableProyecto'})
       proyecto.belongsTo(models.parametros,{foreignKey:'idSaludProyecto', as:'saludProyecto'})
        
        
        
        
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'proyectos', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return proyecto;
};


