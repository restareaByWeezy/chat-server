const SOCKET_EVENT = {
  JOIN: "JOIN",
  UPDATE_NICKNAME: "UPDATE_NICKNAME",
  SEND: "SEND",
  RECEIVE: "RECEIVE",
};

module.exports = function (socketIo) {
  Object.keys(SOCKET_EVENT).forEach(typeKey => {
    const type = SOCKET_EVENT[typeKey];

    socket.on(type, requestData => {
      const firstVisit = type === SOCKET_EVENT.JOIN_ROOM;

      if (firstVisit) {
        socket.join(roomName);
      }

      const responseData = {
        ...requestData,
        type,
        time: new Date(),
      };
      socketIo.to(roomName).emit(SOCKET_EVENT.RECEIVE_MESSAGE, responseData);
      console.log(
        `${type} is fired with data: ${JSON.stringify(responseData)}`
      );
    });
  });
};
