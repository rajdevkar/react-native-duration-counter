export const getElapsedTime = (checkInTimestamp: number) => {
  const now = Math.floor(Date.now() / 1000);
  const elapsedTime = now - checkInTimestamp;

  const hours = Math.floor(elapsedTime / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((elapsedTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (elapsedTime % 60).toString().padStart(2, "0");

  return { hours, minutes, seconds };
};

export const getCountdownTime = (initialTimeInSeconds: number) => {
  const now = Math.floor(Date.now() / 1000);
  const endTime = now + initialTimeInSeconds;
  const remainingTime = Math.max(endTime - now, 0);

  const hours = Math.floor(remainingTime / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((remainingTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (remainingTime % 60).toString().padStart(2, "0");

  return { hours, minutes, seconds };
};
