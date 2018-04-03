const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // clearing
    console.clear();

    // Regular
    console.log('Hello World!');

    // Interpolated
    let str1 = 'a JavaScript dev.';
    console.log('Hello World! I am %s', str1);
    console.log(`Hello World! I am ${str1}`);

    // Styled
    console.log('%c Hello World!', 'font-size: 20px; background: red; text-shadow: 2px 2px 0 blue;');

    // warning!
    console.warn(`I'm a warning`);

    // Error :|
    console.error(`I'm an error`);

    // Info
    console.info(`Say hello to some info.`);

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), `This is incorrect.`);

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach( dog => {
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old.`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
      console.groupEnd(`${dog.name}`);
    });
    
    dogs.forEach( dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old.`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
      console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count(`Mickey`);
    console.count(`Mickey`);
    console.count(`Mickey`);
    console.count(`Mouse`);
    console.count(`Mickey`);
    console.count(`Mouse`);
    console.count(`Mickey`);
    console.count(`Mouse`);
    console.count(`Mouse`);
    console.count(`Mouse`);
    console.count(`Mickey`);
    console.count(`Mickey`);

    // timing
    console.time(`Fetching data`);
    fetch('https://reqres.in/api/unknown/2').then(data => data.json()).then(data => {
      console.timeEnd(`Fetching data`);
      console.log(data.data);
    })

    // table
    console.table(dogs);
