/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const keys = new Set([0]);
  const notVisitedRooms = new Set(
    [...Array(rooms.length).keys()].map((i) => i)
  );

  let visitedNewRoom = false;

  do {
    visitedNewRoom = false;
    notVisitedRooms.forEach((room) => {
      if (keys.has(room)) {
        visitedNewRoom = true;
        notVisitedRooms.delete(room);
        rooms[room].forEach((key) => keys.add(key));
      }
    });
  } while (visitedNewRoom);

  return notVisitedRooms.size === 0;
};
