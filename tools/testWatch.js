/**
  * Created by Zhengfeng Yao on 16/8/29.
  */
import run from './run';
import path from 'path';
import Server from 'karma/lib/server';

async function testWatch() {
  process.env.NODE_ENV = 'test';
  const configFile = path.join(__dirname, 'karma.conf.js');
  await new Promise(resolve => {
    Server.start({
      configFile,
      singleRun: false,
      autoWatch: true,
    }, resolve);
  });
}

export default testWatch;
