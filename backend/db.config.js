module.exports = {
    HOST: "SD2.liftians.com",
    PORT: "3306",
    USER: "liftians",
    PASSWORD: "liftians2!db",
    DB: "Liftman_TheFeed",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };