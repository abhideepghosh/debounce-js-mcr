(() => {
  const input = document.querySelector("#search");
  const debounce = (delayTime) => {
    let timer = null;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("Searching..");
      }, delayTime);
    };
  };
  const inputDebounce = debounce(1000);
  input.addEventListener("keyup", (e) => {
    inputDebounce();
  });
})();
