var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/kyojinkim/blog.git',
    user: {
      name: 'kyojinkim',
      email: 'kyojin.kim@gmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);