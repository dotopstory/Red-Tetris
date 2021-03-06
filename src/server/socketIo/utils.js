import { omit } from 'ramda';

import { TOAST_DURATION } from '../constants/game';
import { pieces } from '../constants/pieces';
import { ACTION } from '../constants/eventsTypes';

export const removeToast = (io, room, toastId) => setTimeout(() => io.to(room).emit(ACTION, { name: 'removeToast', toastId }), TOAST_DURATION);

export const emitToRoom = (io, roomName, type, name, body) => io.to(roomName).emit(type, { name, body: omit(['intv', 'intvId'],body) });

export const emitToSocket = (socket, type, name, message) =>  socket.emit(type, { name, message });