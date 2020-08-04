const getUserRecentPosts = require('./src/getUserRecentPosts.js');

require('./src/tools-for-instagram.js');

(async () => {

  console.log("\n1 -- LOGIN --\n".bold.underline);
  let ig = await login();


  console.log("\n2 -- Trying to get userRecentPosts --\n".bold.underline);

  let posts = await getUserRecentPosts(ig, "juanpc10");
  console.log(posts);

  console.log("\nProcess done!\n".green);

  // If ONLINE_MODE is enabled, this example will run until we send an exit signal
  process.exit();

})();
