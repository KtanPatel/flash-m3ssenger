module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        socketId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        online: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });
    return User;
};