module.exports = {
    jwtSecret: "secret",
    sessionSecret: "topsecret",
    postgres: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || "5432",
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_DATABASE || "corona",
        readReplicaHost: process.env.DB_READ_REPLICA_HOST || "localhost"
    },
    apiToken: "token"
};
