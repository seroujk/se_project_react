const weatherModules = import.meta.glob('../images/(Day|Night)*.svg', { eager: true });

export const weatherImagesArray = Object.entries(weatherModules).map(([path, module]) => {
  const name = path.split('/').pop().replace('.svg', '');
  return {
    name,
    icon: module.default
  };
});
