import MyLogger  from './module_test.js';
import _ from './default_module.js';

_.log('my first test data');

const logger = new MyLogger();
_.log(`lectures of yjkwon07 are ${logger.getLecture()}`);
_.log(`current hour is ${logger.getCurrentHour()}`);