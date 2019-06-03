const express = require("express");
const _ = require("lodash");

const app = express();
const port = 8088; // default port to listen

let devices = [];

function addDevice(host) {
    let i = devices.length + 1;
    devices.push(Object.assign({id: i}, {
        host: host + i,
        ip: "192.168.1." + i,
        osType: i % 3, // 0-windows, 1-Mac, 2-Linux
        osName: ['Windows 10', 'MacOs Mojavi', 'Linux Ubuntu'][i % 3],
        status: i % 2, // 0-offline, 1-online
        lastSeen: new Date()
    }))
}
for(let i=0; i< 100; i++) {
    addDevice('Comp-');
}

app.use(express.json());

// Post url: http://localhost:8088/devices
/* Body:
{
    "skip": 5,
    "take": 5,
    "filter": [
    	{
    		"field": "status",
    		"op": "=",
    		"value": "1"
    	},{
    		"field": "osName",
    		"op": "like",
    		"value": "Ubuntu"
    	}
    ],
    "sort": "id",
    "order": "asc"
}
* */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post( "/devices", ( req, res ) => {
    // console.log('req.body');
    const skip = parseInt(req.body.skip) || 0;
    const take = parseInt(req.body.take) || 10;
    const filter = req.body.filter || [];
    const sortColumn = req.body.sort || 'id';
    const order = req.body.order || 'asc';
    let newDevices;
    if(filter && typeof(filter) === 'object' && filter.length) {
        newDevices = devices.filter(device => {
            return filter.reduce((acc, f) => {
                if (!acc) {
                    return acc;
                }

                if (f.op === 'like') {
                    return ('' + device[f.field]).toLowerCase().includes(('' + f.value).toLowerCase());
                } else if (f.op === '=') {
                    return device[f.field] == f.value;
                }

                return false
            }, true);
        });
    } else {
        newDevices = devices;
    }
    if(devices[0][sortColumn]) {
        const p = order === 'asc' ? 1 : -1;
        newDevices.sort(function (a, b) {
            if (a[sortColumn] < b[sortColumn])
                return p * (-1);
            if (a[sortColumn] > b[sortColumn])
                return p;

            return 0;
        });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.json(newDevices.slice(skip, skip + take));
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
