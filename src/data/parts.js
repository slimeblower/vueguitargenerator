const productsImages = require.context('./builderImages', true, /\.png$/);

const parts = {
  necks: [
    {
      id: 1,
      description: 'An explorer style neck',
      title: 'explorer',
      src: productsImages('./nec-exp.png'),
      type: 'necks',
      cost: 150,
    },
    {
      id: 2,
      description: 'A lesPaul style neck',
      title: 'lesPaul',
      src: productsImages('./nec-lesp.png'),
      type: 'necks',
      cost: 160,
    },
    {
      id: 3,
      description: 'A strat style neck',
      title: 'strat',
      src: productsImages('./nec-st.png'),
      type: 'necks',
      cost: 140,
    },
    {
      id: 4,
      description: 'A viper style neck',
      title: 'viper',
      src: productsImages('./nec-vip.png'),
      type: 'necks',
      cost: 170,
    },
  ],
  bodies:
  [
    {
      id: 1,
      description: 'An explorer style body',
      title: 'explorer',
      src: productsImages('./bod-exp.png'),
      type: 'bodies',
      cost: 450,
    },
    {
      id: 2,
      description: 'A lesPaul style body',
      title: 'lesPaul',
      src: productsImages('./bod-lesp.png'),
      type: 'bodies',
      cost: 500,
    },
    {
      id: 3,
      description: 'A strat style body',
      title: 'strat',
      src: productsImages('./bod-st.png'),
      type: 'bodies',
      cost: 650,
    },
    {
      id: 4,
      description: 'A viper style body',
      title: 'viper',
      src: productsImages('./bod-vip.png'),
      type: 'bodies',
      cost: 400,
    },
  ],
};

export default parts;
