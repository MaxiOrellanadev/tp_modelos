


module.exports = (sequelize, dataTypes) => {
 

    const alias = "Genre";

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
          },
        
          title: {
            type: dataTypes.STRING(100),
            allowNull: false,
          },
          raking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique : true
          },
          active: {
            type: dataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: "1",
          },
        
         
    };
   
    const config = { 
        tableName : "genres",
        timestamps : true,
        underscored :true

    }
    const Genre = sequelize.define(alias,cols,config)

    return Genre
}