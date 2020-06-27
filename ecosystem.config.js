module.exports = {
  apps: [{
    name: "packer-tarea2-nodejs-app",
    script: "./index.js",
    env: {
      NODE_ENV: "production",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};
