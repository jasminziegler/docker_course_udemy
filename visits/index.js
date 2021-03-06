const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({         //specify the redis client that runs inside out docker container in here - automatically connects the 2 containers
    host: 'redis-server',                    //just put in the service name = container name we specified in docker-compose.yml
    port: 6379      // default port for redis-server
});
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
