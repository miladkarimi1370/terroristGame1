const startGame = document.getElementById("startGame");
const chooseCharacter = document.getElementById("chooseCharacter");
const showMenu = document.querySelector(".show-menu");
const imgForBaseMenu = document.querySelector(".figureForImgAndFigcaption>img");
const figCaptionForBaseMenu = document.querySelector(".figureForImgAndFigcaption>figCaption");
const testSoldier = document.querySelector(".testSoldier");
const baseMenuSection = document.querySelector(".baseMenuSection");
const startGameSection = document.querySelector(".startGameSection");
const antiHeroSoldier = document.querySelectorAll(".antiHeroSoldier");




let myHeroId;
let myAntiHero;
let AntiHeroCount = 5;
let flagOfCreateElement = false;
const arrayOfIdlePicture = [
    { id: 0, img: "img/idles/terrorist1.png", figCaption: "Ansar Allah", name: "Ansar Allah" },
    { id: 1, img: "img/idles/terrorist2.png", figCaption: "Osama bin Ladan", name: "Osama bin Ladan" },
    { id: 2, img: "img/idles/terrorist3.png", figCaption: "Abu Bakr al-Baghdadi", name: "Abu Bakr al-Baghdadi" }
]
const countPngForStatesOfCharacter = {
    countOfAttack1: 6, countOfAttack2: 4, countOfAttack3: 6, countOfAttack4: 6, countOfHurt: 9, countOfIdle: 8, countOfJump: 8, countOfRun: 6, countOfWalk: 8
}
let SolderDirection = "right";

const allValueOfAnyKeyCodeOfsoldier = [
    {
        keyCode: 39, movement: countPngForStatesOfCharacter.countOfRun, classesOfElement: ["h-full", "object-cover", "w-full"], move: "Run", frameOfChangePicture: countPngForStatesOfCharacter.countOfRun * 100
    },
    {
        keyCode: 37, movement: countPngForStatesOfCharacter.countOfRun, classesOfElement: ["h-full", "object-cover", "scaleX-[-1]", "w-full"], move: "Run", frameOfChangePicture: countPngForStatesOfCharacter.countOfRun * 100
    },
    {
        keyCode: 38, movement: countPngForStatesOfCharacter.countOfJump, classesOfElement: ["h-full", "object-cover", "w-full"], move: "Jump", frameOfChangePicture: countPngForStatesOfCharacter.countOfJump * 100
    },
    {
        keyCode: 40, movement: countPngForStatesOfCharacter.countOfAttack2, classesOfElement: ["h-full", "object-cover", "w-full"], move: "Attack2", frameOfChangePicture: countPngForStatesOfCharacter.countOfAttack2 * 100
    },
    {
        keyCode: 13, movement: countPngForStatesOfCharacter.countOfAttack1, classesOfElement: ["h-full", "object-cover", "w-full"], move: "Attack1", frameOfChangePicture: countPngForStatesOfCharacter.countOfAttack1 * 100
    },
    {
        keyCode: "mouseenter", movement: countPngForStatesOfCharacter.countOfAttack1
    },

    {
        keyCode: "contextmenu", movement: countPngForStatesOfCharacter.countOfAttack3
    },
    {
        keyCode: "hurt", movement: countPngForStatesOfCharacter.countOfHurt, classesOfElement: ["h-full", "object-cover", "w-full"], move: "hurt", frameOfChangePicture: countPngForStatesOfCharacter.countOfHurt * 100
    },
    {
        keyCode: 32, movement: countPngForStatesOfCharacter.countOfAttack2
    },
    {
        keyCode: "idle", movement: countPngForStatesOfCharacter.countOfIdle, classesOfElement: ["h-full", "object-cover", "duration-1000"], exactElement: "img"
    }
]

chooseCharacter.addEventListener("click", (e) => {

    const idForImg = imgForBaseMenu.getAttribute("data-id");
    const idForFig = figCaptionForBaseMenu.getAttribute("data-id");
    const audioForChooseCharacter = new Audio("sound/gunMagazine.mp3");
    audioForChooseCharacter.volume = 0.5
    audioForChooseCharacter.play();

    if (idForImg < 2 && idForFig < 2) {
        setTimeout(() => {
            imgForBaseMenu.setAttribute("src", arrayOfIdlePicture[parseInt(idForImg) + 1].img);
            figCaptionForBaseMenu.innerHTML = arrayOfIdlePicture[parseInt(idForFig) + 1].figCaption;
        }, 500);
        imgForBaseMenu.setAttribute("data-id", parseInt(idForImg) + 1);
        figCaptionForBaseMenu.setAttribute("data-id", parseInt(idForFig) + 1);

    } else if (idForImg == 2 && idForFig == 2) {
        setTimeout(() => {
            imgForBaseMenu.setAttribute("src", arrayOfIdlePicture[0].img);
            figCaptionForBaseMenu.innerHTML = arrayOfIdlePicture[0].figCaption;
        }, 500);
        imgForBaseMenu.setAttribute("data-id", 0);
        figCaptionForBaseMenu.setAttribute("data-id", 0);

    }

})

startGame.addEventListener("click", (e) => {

    showMenu.classList.toggle("goOut");
    myHeroId = imgForBaseMenu.getAttribute("data-id");
    setTimeout(() => {
        addIdleElement();
        baseMenuSection.classList.add("hidden");
        startGameSection.classList.remove("hidden")
    }, 1500);

    if (myHeroId) {
        myAntiHero = arrayOfIdlePicture.find((item, index) => index != myHeroId);


    }
    const audioForStartGame = new Audio("sound/alarm.mp3");
    audioForStartGame.volume = 0.1
    audioForStartGame.play();


})
const everyWorkWhileOnloadPage = () => {
    imgForBaseMenu.setAttribute("data-id", 0);
    figCaptionForBaseMenu.setAttribute("data-id", 0);
    myHeroId = imgForBaseMenu.dataset.id;
    imgForBaseMenu.setAttribute("src", arrayOfIdlePicture[imgForBaseMenu.getAttribute("data-id")].img);
    figCaptionForBaseMenu.innerHTML = arrayOfIdlePicture[figCaptionForBaseMenu.getAttribute("data-id")].figCaption;


}

window.addEventListener("keydown", (e) => {

    changeElementToTestSoldier(e.keyCode);
})

function changeElementToTestSoldier(myKeyCode) {
    const myValues = allValueOfAnyKeyCodeOfsoldier.find((item) => item.keyCode === myKeyCode);
    if (!myValues) return;
    const currentSoldier = testSoldier.children[0];

    if (myValues.keyCode == 39) {
        setTimeout(() => {
            flagOfCreateElement = !flagOfCreateElement
        }, 2000);
        const soundOffeetsteps = new Audio("sound/feetsteps.mp3");
        soundOffeetsteps.play();

        if (testSoldier.offsetLeft < window.innerWidth) {
            window.scrollTo(testSoldier.offsetLeft / 2, 0)
        }

        if (testSoldier.offsetLeft > 500 && testSoldier.offsetLeft < 590 && AntiHeroCount > 0) {
            createAntiHero(0, 1200);
        } else if (testSoldier.offsetLeft > 630 && testSoldier.offsetLeft < 720 && AntiHeroCount > 0) {
            createAntiHero(1, 2500);
        } else if (testSoldier.offsetLeft > 1100 && testSoldier.offsetLeft < 1190 && AntiHeroCount > 0) {
            createAntiHero(2, 3500)
        } else if (testSoldier.offsetLeft > 2000 && testSoldier.offsetLeft < 2090 && AntiHeroCount > 0) {
            createAntiHero(3, 4500)
        } else if (testSoldier.offsetLeft > 3000 && testSoldier.offsetLeft < 3090 && AntiHeroCount > 0) {
            createAntiHero(4, 4800)
        }


        const currentLeftOfTestSoldier = parseInt(getComputedStyle(testSoldier).left || "0");

        currentSoldier?.classList.remove("-scale-x-100")
        setTimeout(() => {
            testSoldier.style.left = (currentLeftOfTestSoldier + 100) + "px"
        }, 100);
        movement(myValues.keyCode);

        antiHeroSoldier.forEach((item) => {
            if (item.offsetLeft) {
                currentStateLife = item.getAttribute("data-life");
                if ((testSoldier.offsetLeft + 300) >= item.offsetLeft && currentStateLife == "alive") {

                    hurtMovement(myHeroId);
                    endGame("Game Over", "red", testSoldier.offsetLeft + 300);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }



            }
        })

        SolderDirection = "right";
    } else if (myValues.keyCode == 37) {
        const soundOffeetsteps = new Audio("sound/feetsteps.mp3");
        soundOffeetsteps.play();
        const currentLeftOfTestSoldier = parseInt(getComputedStyle(testSoldier).left || "0");
        if (testSoldier.offsetLeft > (window.innerWidth - 960)) {
            window.scrollTo(testSoldier.offsetLeft, 0)
        }
        currentSoldier.classList.add("-scale-x-100");
        if (testSoldier.offsetLeft > 0) {
            setTimeout(() => {
                testSoldier.style.left = (currentLeftOfTestSoldier - 100) + "px"
            }, 100);
        }

        movement(myValues.keyCode);
        SolderDirection = "left";
    } else if (myValues.keyCode == 38) {
        const currentTopOfTestSoldier = parseInt(getComputedStyle(testSoldier).top || "0");


        setTimeout(() => {
            testSoldier.style.top = (currentTopOfTestSoldier - 250) + "px";

        }, 300);
        setTimeout(() => {
            movement(myValues.keyCode)
        }, 300);
        setTimeout(() => {
            testSoldier.style.top = (currentTopOfTestSoldier) + "px";
        }, 300);

    } else if (myValues.keyCode == 40) {

        movement(myValues.keyCode);
    } else if (myValues.keyCode == 13) {


        if (!testSoldier.children[1]) {
            movement(myValues.keyCode);
            createBullet();
            const bullet = testSoldier.children[1];
            if (!bullet) return;

            // انیمیشن جهت
            if (SolderDirection === "right") {
                bullet.classList.add("animate-[shootBulletRight_1.5s_linear_1]");
            } else if (SolderDirection === "left") {
                bullet.classList.add("animate-[shootBulletLeft_1.5s_linear_1]");
            }

            // بررسی برخورد با همه دشمن‌های زنده
            const checkInterval = setInterval(() => {
                if (!bullet || !document.body.contains(bullet)) {
                    clearInterval(checkInterval);
                    return;
                }
                const bulletRect = bullet.getBoundingClientRect();
                antiHeroSoldier.forEach((enemy, idx) => {
                    if (enemy.getAttribute("data-life") !== "alive") return;
                    if (!enemy.children[0]) return;
                    const enemyRect = enemy.children[0].getBoundingClientRect();

                    const collided = !(
                        bulletRect.right < enemyRect.left ||
                        bulletRect.left > enemyRect.right ||
                        bulletRect.bottom < enemyRect.top ||
                        bulletRect.top > enemyRect.bottom
                    );

                    if (collided) {
                        // برخورد: انیمیشن آسیب، علامت‌گذاری و حذف گلوله
                        hurtMovementEnemy(myAntiHero.id, idx);
                        enemy.setAttribute("data-life", "kill");
                        if (bullet) bullet.remove();
                        clearInterval(checkInterval);

                        checkAllEnemiesDead();
                    }
                });
            }, 20);

            // حذف احتیاطی گلوله بعد از 1.5 ثانیه (اگر هنوز هست)
            setTimeout(() => {
                if (testSoldier.children[1]) testSoldier.children[1].remove();
            }, 1500);

            // صدا
            if (parseInt(myHeroId) + 1 === 1) {
                const soundOfAK47 = new Audio("sound/shootAK47.mp3");
                soundOfAK47.play();
            } else {
                const soundOfRPG = new Audio("sound/shootRPG.mp3");
                soundOfRPG.play();
            }
        }
    }



    // let i = 0;
    // const interval = setInterval(() => {
    //     if (i >= myValues.movement) {
    //         clearInterval(interval);
    //         return;
    //     }
    //     currentSoldier.setAttribute("src", `img/png/${parseInt(myHeroId) + 1}/run/${parseInt(myHeroId) + 1}_terrorist_${parseInt(myHeroId) + 1}_Run_00${i}.png`);
    //     i++;
    // }, 100);

    // setTimeout(() => {
    //     currentSoldier.setAttribute("src", `img/png/${parseInt(myHeroId) + 1}/Attack1/${parseInt(myHeroId) + 1}_terrorist_${parseInt(myHeroId) + 1}_Attack1_000.png`)
    // }, 600);

}

const addIdleElement = () => {
    const myElement = document.createElement("img");
    myElement.classList.add("h-full", "object-cover", "duration-500", "w-full")
    myElement.setAttribute("src", `img/png/${parseInt(myHeroId) + 1}/Attack1/${parseInt(myHeroId) + 1}_terrorist_${parseInt(myHeroId) + 1}_Attack1_000.png`)

    testSoldier.appendChild(myElement);




}

const movement = (keycode) => {
    const myValues = allValueOfAnyKeyCodeOfsoldier.find((item) => item.keyCode === keycode);
    if (!myValues) return;
    let i = 0;
    const interval = setInterval(() => {
        if (i >= myValues.movement) {
            clearInterval(interval);
            return;
        }
        testSoldier.children[0].setAttribute("src", `img/png/${parseInt(myHeroId) + 1}/${myValues.move}/${parseInt(myHeroId) + 1}_terrorist_${parseInt(myHeroId) + 1}_${myValues.move}_00${i}.png`);
        i++;
    }, 100);


    setTimeout(() => {
        testSoldier.children[0].setAttribute("src", `img/png/${parseInt(myHeroId) + 1}/Attack1/${parseInt(myHeroId) + 1}_terrorist_${parseInt(myHeroId) + 1}_Attack1_000.png`)
    }, myValues.frameOfChangePicture);
}

const hurtMovement = (myHero) => {
    let i = 0;
    const interval = setInterval(() => {
        if (i >= countPngForStatesOfCharacter.countOfHurt) {
            clearInterval(interval);
            return;
        }
        testSoldier.children[0].setAttribute("src", `img/png/${parseInt(myHero) + 1}/hurt/${parseInt(myHero) + 1}_terrorist_${parseInt(myHero) + 1}_Hurt_00${i}.png`);
        i++;
    }, 100);


}

const hurtMovementEnemy = (myHero, idOfAntiHeroSoldier) => {
    let i = 0;
    const interval = setInterval(() => {
        if (i >= countPngForStatesOfCharacter.countOfHurt) {
            clearInterval(interval);
            return;
        }
        antiHeroSoldier[idOfAntiHeroSoldier].children[0].setAttribute("src", `img/png/${parseInt(myHero) + 1}/hurt/${parseInt(myHero) + 1}_terrorist_${parseInt(myHero) + 1}_Hurt_00${i}.png`);
        i++;
    }, 100);


}

const createBullet = () => {
    const myBullet = document.createElement("img");
    myBullet.setAttribute("src", `img/png/${parseInt(myHeroId) + 1}/bullet/shot.png`);
    myBullet.classList.add("absolute", "top-34", "left-48", "flex", "object-cover", "scale-40");


    testSoldier.append(myBullet);

}

const createAntiHero = (indexOfFigureTagWrappedImg, myLeft,) => {
    const myElement = document.createElement("img");
    myElement.classList.add("h-full", "object-cover", "duration-1000", "-scale-x-100");
    myElement.setAttribute("src", `img/png/${parseInt(myAntiHero.id) + 1}/Attack3/${parseInt(myAntiHero.id) + 1}_terrorist_${parseInt(myAntiHero.id) + 1}_Attack3_002.png`);
    antiHeroSoldier[indexOfFigureTagWrappedImg].style.left = myLeft + "px";
    antiHeroSoldier[indexOfFigureTagWrappedImg].appendChild(myElement);
    AntiHeroCount--;
}


const endGame = (message, color, left) => {
    const myElement = document.createElement("div");
    myElement.classList.add("w-full", "h-[100vh]", "flex", "items-center", "absolute", "top-0", "absolute");
    myElement.style.left = left + "px";
    myElement.innerHTML = `
        <h1 class="text-center text-9xl font-bold text-${color}-500 italic capitalize">${message}</h1>
        `;
    startGameSection.appendChild(myElement);

}

function checkAllEnemiesDead() {
    const anyAlive = Array.from(antiHeroSoldier).some(enemy => enemy.getAttribute("data-life") === "alive");
    if (!anyAlive) {

        if (!checkAllEnemiesDead.called) {
            checkAllEnemiesDead.called = true;
            endGame("You Win", "green", testSoldier.offsetLeft);

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }
}


