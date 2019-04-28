const env = {
  database: 'testdb',
  username: 'jose',
  password: '12345Seis',
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;