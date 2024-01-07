export default eventHandler((event) => {
  const { data } = event.context.body;
  return { nitro: `${data} is awesome` };
});
