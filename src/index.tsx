import('@olefjaerestad/hmr/build/client').then((myModule) => {
  new myModule.Client({
    hostname: 'localhost',
    port: 3001,
    verbose: true,
    // onMessageCallback: (e, client) => {
    //   console.log('Client.onMessageCallback()');
    //   console.log(e);
    //   client.replaceNodesByFilename({filename: e.filename});
    // },
    // onOpenCallback: (e) => console.log(e),
    onCloseCallback: (e) => console.log(e),
    onErrorCallback: (e) => console.log(e),
  });
});

export {}
