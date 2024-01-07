export default eventHandler((event) => {
  const { data } = event.context.params;
  console.log(event);
  return { nitro: `${data} is awesome` };
});
