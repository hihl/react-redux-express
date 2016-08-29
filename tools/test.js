/**
  * Created by Zhengfeng Yao on 16/8/29.
  */
import run from './run';
import path from 'path';
import Server from 'karma/lib/server';

async function test() {
  process.env.NODE_ENV = 'test';
  const configFile = path.join(__dirname, 'karma.conf.js');
  await new Promise(resolve => {
    Server.start({
      configFile,
      singleRun: true
    }, resolve);
  });
}

export default test;
