//Задача №1. Будильник-колыбельная


class AlarmClock {
        constructor() {   
                this.alarmCollection = [];
                this.timerId = null;
        };

        // Функция добавления нового будильника в массив
        addClock(time, callback, id) {
                if (!id) {throw new Error ('error text');
        } else if (this.alarmCollection.some(function(value) {
                        value.id === id; // сравнивает id каждого элемента массива с переданным id(почему то не сравнивает)
                })) {
                console.error(`Будильник с данным ${id} уже зарегистрирован!`);
                 return;
                 };

                this.alarmCollection.push({id, time, callback});
        
        };
        
//удаляет определённый звонок по id
removeClock(id) {
        let arrLength1 = this.alarmCollection.length; //Длина исходного массива
        this.alarmCollection = this.alarmCollection.filter(function(item) {
return item.id !== id
}); // возвращаем массив, без элемента с заданым id
        let arrLength2 = this.alarmCollection.length; // Длинна массива после удаления элемента
        return arrLength1 === arrLength2; // Проверка успешности удаления элемента из массива

};

getCurrentFormattedTime(time) {
        let currentDate;
        if(time) {
     currentDate = time;
        } else {
     currentDate = new Date();
        }
        let minutes = currentDate.getMinutes() < 10 ? ('0' +`${currentDate.getMinutes()}`) : `${currentDate.getMinutes()}`;
        let hours = currentDate.getHours() < 10 ? ('0' +`${currentDate.getHours()}`) : `${currentDate.getHours()}`;
        return `${hours}:${minutes}`;
}

start() {
        let check = checkClock.bind(this);
        function checkClock(alarm) {
                if (alarm.time === this.getCurrentFormattedTime()) alarm.callback();
        }       
                 if (!this.timerId) this.timerID = setInterval(() => this.alarmCollection.forEach(item => check(item)), 1000)
                                
                                   
         }

stop() {
        if (this.timerID) {
                clearInterval(this.timerID); 
                this.timerID = null; 
        }
}

printAlarms() {
       this.alarmCollection.forEach(item => console.log(`id = ${item.id} time = ${item.time}`));
}


clearAlarms() {
        this.stop();
        this.alarmCollection = [];
};
       

};



function testCase() {
	let clock = new AlarmClock();
	clock.addClock(clock.getCurrentFormattedTime(), () => console.log('Пора вставать!'), 20);
	let currentDate = new Date();
	currentDate.setMinutes(currentDate.getMinutes() + 1);
	clock.addClock(clock.getCurrentFormattedTime(currentDate), () => { console.log('Давно Пора встать!'); clock.removeClock(20) }, 20);
	currentDate = new Date();
	currentDate.setMinutes(currentDate.getMinutes() + 2);
	clock.addClock(clock.getCurrentFormattedTime(currentDate),
		() => { console.log('Пора уже встать!'); clock.stop(); clock.clearAlarms() }, 2000);
	clock.printAlarms();
	clock.start();
};

testCase();




