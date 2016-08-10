module.exports = {
  servers: {
    one: {
      host: '159.203.185.250',
      username: 'root'
      // pem: './mykey',
    },
  },

  meteor: {
    name: 'tele',
    path: '../',
    servers: {
      one: {},
    },
    env: {
      ROOT_URL: 'http://159.203.185.250',
      MONGO_URL: 'mongodb://localhost/meteor'
    }
    // dockerImage: "kadirahq/meteord:base"
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};