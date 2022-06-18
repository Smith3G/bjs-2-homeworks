function cachingDecoratorNew(func) {
  let cache = [];
  let counter;
  function wrapper(...args) {

    const hash = args.join(',');
    if (hash in cache) {
      return "Из кэша: " + cache[hash];
  }
  if (counter >= 5) {
      delete cache[Object.keys(cache)[0]];
  }
  counter++;
  cache[hash] = func(...args);
  return "Вычисляем: " + cache[hash];
}

 return wrapper;
}



function debounceDecoratorNew(f, ms) {
  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };
 
  
}





function debounceDecorator2(f, ms) {
  
    let start;
    wrapper.count = 0;

    function wrapper(...args) {

        if (start === undefined) {
            f.apply(this, args);
            start = Date.now();  
            wrapper.count++;         
        } else {
            let elapsedTime = Date.now() - start;
            if (elapsedTime >= ms) {
                f.apply(this, args);
                start = Date.now(); 
                wrapper.count++;     
            }
        }
        console.log(wrapper.count);

    }

    return wrapper;
}
  
