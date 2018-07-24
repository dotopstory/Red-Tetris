import express from 'express';
import socketIo from 'socket.io';
import { findIndex, propEq } from 'ramda';
import bodyParser from 'body-parser';

import debug from 'debug';
import fs from 'fs';

import { getUrl, bindError, bindLogger, bindCtx } from './helpers';
import createRoom from './routes/createRoom';

const logger = debug('tetris:http');
const logerror = debug('tetris:http:error');

let rooms = [];

const init = async ctx => {
    const app = await express();
    const { server: { host, port } } = ctx.config;
    const httpServer = await app.listen(port, host, () => {
      httpServer.url = getUrl(httpServer);
      logger(`Connected at this address: ${httpServer.url}`); // eslint-disable-line no-console
    });
  
    const io = socketIo(httpServer);
    const currentSocketId = [];
    const socketIdToDelete = [];
    const tmp = [];
    io.on('connection', function(socket){
        currentSocketId[0] = socket.id;
        logger("Socket connected: " + currentSocketId)
        socket
            .on('room', function(data) {
                const { room, user } = data;
                const roomIndex = findIndex(propEq('name', room))(rooms);
                if(roomIndex >= 0 && rooms[roomIndex].users.length >= 2) {
                    console.log('To many player in the room');    
                } else {
                    socket.join(room);
                    const users = rooms[roomIndex] ? [...rooms[roomIndex].users, {name: user, owner: false}] : [{name: user, owner: true}];
                    rooms[roomIndex] = {...rooms[roomIndex], users};
                    rooms = [...rooms, { name: room, users }];
                    io.to(room).emit('action', { name: 'updateGameInfo', body: { name: room, users }});
                    console.log('room: ', room, ' joined by ', user);
                }
            })
            .on('disconnect', async () => {
                logger("Socket disconnected: " + currentSocketId)
                socketIdToDelete[0] = socket.id;
            })
            .on('action', function(actionSocket) {
                if(actionSocket.name === 'startGame') {
                    socket.emit('action', { name: 'startGame' });
                    logger(`Game start in the room: \"${actionSocket.gameName}\"`)
                };
                if(actionSocket.name === 'joinRoom') {
                    logger(`${actionSocket.user} join the room: ${actionSocket.room}`)
                }
            });
    });
    const handler = (req, res) => {
        const file = req.url === '/bundle.js' ? '/../../../build/bundle.js' : '/../../../public/index.html';
        fs.readFile(__dirname + file, (err, data) => {
            if (err) {
                logerror(err)
                res.writeHead(500)
                return res.end('Error loading index.html')
            }
            res.writeHead(200)
            res.end(data)
        })
    }
  
    await app
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .use(bindCtx(ctx))
        .use(bindError)
        .use('/', handler);
    return ({ ...ctx, http: httpServer });
  };
  
  export default init;