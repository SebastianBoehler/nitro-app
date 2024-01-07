export default eventHandler((event) => {
  const { data } = event.context.params;
  return { nitro: `${data} is awesome` };
});
