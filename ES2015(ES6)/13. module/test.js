import MyLogger  from './module_test';
import _ from './default_module';

_.log('my first test data');

const logger = new MyLogger();
_.log(`lectures of yjkwon07 are ${logger.getLecture()}`);
_.log(`current hour is ${logger.getCurrentHour()}`);
