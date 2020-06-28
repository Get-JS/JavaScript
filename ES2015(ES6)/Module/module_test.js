/* Class */
export default class MyLogger {
    constructor(props) {
        this.lectures = ['java', 'ios'];
    }
    getLecture() {
        return this.lectures;
    }

    getCurrentHour() {
        return (new Date).getHours();
    }
    
    getTime() {
        return Date.now();
    }
}
