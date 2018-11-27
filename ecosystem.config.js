module.exports = {
  apps: [{
    name: 'wms_server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-216-97-95.us-east-2.compute.amazonaws.com',
      key: '~/Downloads/watermanage.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ajsampathk/WMS_server.git',
      path: '/home/ubuntu/WMS_server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
