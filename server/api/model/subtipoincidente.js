
module.exports = function(sequelize, DataTypes) {


var subtipoincidente = sequelize.define('subtipoincidente', {
    SubTipoIncidenteId:  { type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nombre: DataTypes.STRING,
    FechaCreacion: DataTypes.DATE,
    EsActivo: DataTypes.INTEGER,
    TipoIncidenteId: DataTypes.INTEGER
    //userid:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
},
    /*{
        classMethods:{
            associate:function(models){
                SubTipoIncidente.hasOne(models.Incidente, { foreignKey: 'TipoIncidenteId'} );
            }
        }
    },*/
    {
    tableName: 'subtipoincidente', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
});
return  subtipoincidente;

};
