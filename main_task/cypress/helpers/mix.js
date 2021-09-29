/* eslint-disable import/prefer-default-export */
export const mix = (source, mixins) => {
  mixins.forEach((mixin) => Object.assign(source, mixin));
};
