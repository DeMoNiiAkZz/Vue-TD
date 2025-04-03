export const vRecent = {
    mounted(el) {
      el.classList.add('text-primary');
      setTimeout(() => {
        el.classList.remove('text-primary');
      }, 2000);
    }
  };
  