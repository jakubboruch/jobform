export default {
  bind(el, binding) {
    const localEl = el;
    const handler = (e) => {
      if (!el.contains(e.target) && el !== e.target) {
        binding.value(e);
      }
    };
    localEl.vueClickOutside = handler;
    document.addEventListener('click', handler);
  },

  unbind(el) {
    const localEl = el;
    document.removeEventListener('click', el.vueClickOutside);
    localEl.vueClickOutside = null;
  },
};
