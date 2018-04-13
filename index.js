function planeFly(arrow) {
    switch (arrow) {
        case 'up':
            document.getElementById('plane').style.background = "green";
            break;
        case 'forward':

            document.getElementById('plane').style.background = "black";
            break;
        case 'down':
            document.getElementById('plane').style.background = "red";
            break;
    }
}

const factory = {
    getNewBird: () => {
        console.log("Bird creator");
        let bird = document.createElement('div');
        var t = document.createTextNode("CLICK ME");
        bird.setAttribute("id", "bird");
        let max = 768;
        let min = 1024;
        let top = (Math.random() * (max - min) + min);
        let left = (Math.random() * (max - min) + min);

        bird.setAttribute("top", top + 'px');
        bird.setAttribute("left", left + 'px');

        bird.appendChild(t);

        let root = document.getElementById('root');
        root.appendChild(bird)
        return true;
    },

    getNewCloud: () => {
        console.log("Cloud creator");
        let bird = document.createElement('div');
        var t = document.createTextNode("CLICK ME");
        bird.setAttribute("id", "bird");
        bird.setAttribute("top", Math.random(500) + 'px');
        bird.setAttribute("left", Math.random(500) + 'px');

        bird.appendChild(t);

        let root = document.getElementById('root');
        root.appendChild(bird)
        return true;
    }
}

const factoryA = ((param) => {
    getNewBird = () => {
        console.log("Bird creator");
        let bird = document.createElement('div');
        var t = document.createTextNode("CLICK ME");
        bird.setAttribute("id", "bird");
        let max = 768;
        let min = 1024;
        let top = (Math.random() * (max - min) + min);
        let left = (Math.random() * (max - min) + min);

        bird.setAttribute("top", top + 'px');
        bird.setAttribute("left", left + 'px');

        bird.appendChild(t);

        let root = document.getElementById('root');
        root.appendChild(bird)
        return true;
    },

        getNewCloud = () => {
            console.log("Cloud creator");
            let bird = document.createElement('div');
            var t = document.createTextNode("CLICK ME");
            bird.setAttribute("id", "bird");
            bird.setAttribute("top", Math.random(500) + 'px');
            bird.setAttribute("left", Math.random(500) + 'px');

            bird.appendChild(t);

            let root = document.getElementById('root');
            root.appendChild(bird)
            return true;
        },

        list = ["BIRD", "CLOUD"],

        getInstance = (param) => {
            console.log("getInstance " + param);
            switch (param) {
                case "BIRD": return this.getNewBird();
                case "CLOUD": return this.getNewCloud();

                default:
                    break;
            }
        }
    return {
        getInstance
    }
})();


let id = setInterval(() => {
    factory.getNewBird()
}, 2000);



/*    function stop(id) {
       console.log("stop");
       clearInterval(id)
   }
 
*/
function getRandomInt(min, max) {
    let r = Math.floor(Math.random() * (max - min)) + min;
    console.log("rand " + r + " - " + list[r]);
    return r
}

let list = ["BIRD", "CLOUD"];
let SpeedGenerationObject = 2000;

const lifecycle = ((f) => {

    let factory = f;

    function waitStart() {
        console.log("waitStart");
    }

    function start() {
        console.log("start");

        let id = setInterval(() => {


            factory.getInstance(list[getRandomInt(1, list.length)]);

        }, SpeedGenerationObject);
    }
    function stop() {
        console.log("stop");
    }
    return {
        waitStart,
        start,
        stop
    }
})(factoryA)


