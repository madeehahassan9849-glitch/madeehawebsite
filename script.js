const answerInput = document.getElementById("answer");
const unlockButton = document.getElementById("unlockButton");
const message = document.getElementById("message");

const correctAnswer = "11062026";

let openedCards = new Set();


/* =====================================================
   FIRST PUZZLE
===================================================== */

unlockButton.addEventListener("click", checkAnswer);

answerInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkAnswer();
    }

});


function checkAnswer() {

    const userAnswer =
        answerInput.value.trim();

    if (userAnswer === correctAnswer) {

        answerInput.disabled = true;
        unlockButton.disabled = true;

        const content =
            document.querySelector(".content");

        content.style.transition = "2s ease";
        content.style.opacity = "0";

        setTimeout(() => {

            document.querySelector(".entrance").innerHTML = `

                <div class="reveal-screen">

                    <div class="verification">
                        VERIFYING<span class="dots">...</span>
                    </div>

                </div>

            `;

            setTimeout(() => {

                document.querySelector(".verification").innerHTML =
                    "MEMORY CONFIRMED";

            }, 2200);


            setTimeout(() => {

                document.querySelector(".verification").innerHTML = `

                    <div class="countdown">
                        3
                    </div>

                `;

            }, 3800);


            setTimeout(() => {

                document.querySelector(".countdown").textContent =
                    "2";

            }, 4600);


            setTimeout(() => {

                document.querySelector(".countdown").textContent =
                    "1";

            }, 5400);


            setTimeout(() => {

                document.querySelector(".reveal-screen").innerHTML = `

                    <div class="access-granted">
                        ACCESS GRANTED
                    </div>

                `;

            }, 6400);


            setTimeout(() => {

                showPortal();

            }, 8500);

        }, 1200);

    }

    else {

        message.textContent =
            "Hmm... that doesn't seem right.";

        answerInput.style.animation =
            "shake 0.4s";

        setTimeout(() => {

            answerInput.style.animation = "";

        }, 400);

    }

}


/* =====================================================
   PORTAL
===================================================== */

function showPortal() {

    document.querySelector(".entrance").innerHTML = `

        <div class="portal-screen">

            <div class="dust">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="portal-door"></div>

            <div class="portal-text">

                <p>
                    So… you remembered.
                </p>

                <p>
                    MEMORY VERIFIED
                </p>

                <p>
                    But you still don't know<br>
                    what you unlocked.
                </p>

                <button id="continueButton">
                    ENTER
                </button>

            </div>

        </div>
    `;

    document
        .getElementById("continueButton")
        .addEventListener(
            "click",
            firstTwist
        );
}


/* =====================================================
   FIRST TWIST
===================================================== */

function firstTwist() {

    const screen =
        document.querySelector(".portal-screen");

    screen.style.transition = "2s ease";
    screen.style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".entrance").innerHTML = `

            <div class="portal-screen">

                <div class="portal-text">

                    <p>
                        Good.
                    </p>

                    <p>
                        THAT WASN'T THE TEST
                    </p>

                    <p>
                        It was only the first thing<br>
                        I wanted you to remember.
                    </p>

                    <button id="nextButton">
                        I'M LISTENING
                    </button>

                </div>

            </div>

        `;

        document
            .getElementById("nextButton")
            .addEventListener(
                "click",
                secondPuzzle
            );

    }, 2000);
}


/* =====================================================
   SECOND PUZZLE
===================================================== */

function secondPuzzle() {

    document.querySelector(".entrance").innerHTML = `

        <div class="portal-screen">

            <div class="portal-text">

                <p>
                    a little effort, just for you.
                </p>

                <p>
                    ❤️STILL 
                </p>

                <p>
                      Who loves me the most hmm?

                </p>

                <input
                    id="memoryAnswer"
                    type="text"
                    placeholder="YOUR REPLY MATTERS..."
                    autocomplete="off"
                >

                <button id="memoryButton">
                    SUBMIT
                </button>

                <p id="memoryMessage"></p>

            </div>

        </div>

    `;

    document
        .getElementById("memoryButton")
        .addEventListener(
            "click",
            checkSecondPuzzle
        );

    document
        .getElementById("memoryAnswer")
        .addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {
                    checkSecondPuzzle();
                }

            }
        );
}


function checkSecondPuzzle() {

    const memoryAnswer =
        document.getElementById("memoryAnswer");

    const memoryMessage =
        document.getElementById("memoryMessage");

    if (memoryAnswer.value.trim() === "") {

        memoryMessage.textContent =
            "You can't escape that easily.";

        return;
    }

    memoryMessage.textContent =
        "Interesting...";

    setTimeout(() => {

        memoryMessage.textContent =
            "ahann Mr. Naveed Iqbal?";

    }, 1500);

    setTimeout(() => {

        memoryMessage.textContent =
            "Maybe you're right.";

    }, 3300);

    setTimeout(() => {

        memoryMessage.textContent =
            "Or maybe...";

    }, 5100);

    setTimeout(() => {

        showCuteMoment();

    }, 7000);
}


/* =====================================================
   CUTE MOMENT
===================================================== */

function showCuteMoment() {

    const screen =
        document.querySelector(".portal-screen");

    screen.style.transition = "2s ease";
    screen.style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".entrance").innerHTML = `

            <div class="portal-screen">

                <div class="portal-text">

                    <p>
                        Actually...
                    </p>

                    <p>
                        THERE'S SOMETHING I WANTED YOU TO KNOW
                    </p>

                    <p>
                        Out of all the people in this world...
                    </p>

                    <button id="revealButton">
                        ONE MORE THING
                    </button>

                </div>

            </div>

        `;

        document
            .getElementById("revealButton")
            .addEventListener(
                "click",
                revealMessage
            );

    }, 2000);
}


/* =====================================================
   EMOTIONAL REVEAL
===================================================== */

function revealMessage() {

    document.querySelector(".entrance").innerHTML = `

        <div class="portal-screen">

            <div class="portal-text">

                <p>
                    Out of all the people in this world...
                </p>

                <p>
                    I GOT TO MEET YOU
                </p>

                <p>
                    And somehow,<br>
                    that still feels a little unreal.
                </p>

                <button id="exploreButton">
                    WOHOO MY MAGICAL MAN!
                </button>

            </div>

        </div>

    `;

    document
        .getElementById("exploreButton")
        .addEventListener(
            "click",
            showExploreMessage
        );
}


/* =====================================================
   EXPLORE
===================================================== */

function showExploreMessage() {

    document.querySelector(".entrance").innerHTML = `

        <div class="portal-screen">

            <div class="portal-text">

                <p>
                    You thought that was it?
                </p>

                <p>
                    NOT EVEN CLOSE
                </p>

                <p>
                    You still have a little LOVE to explore !.
                </p>

                <button id="chapterButton">
                    STEP INTO MY LITTLE WORLD
                </button>

            </div>

        </div>

    `;

    document
        .getElementById("chapterButton")
        .addEventListener(
            "click",
            chapterTwo
        );
}


/* =====================================================
   CHAPTER II
===================================================== */

function chapterTwo() {

    openedCards = new Set();

    document.querySelector(".entrance").innerHTML = `

        <div class="chapter-screen">

            <div class="chapter-number">
                CHAPTER II
            </div>

            <h1 class="chapter-title">
                The Things I Kept
            </h1>

            <p class="chapter-subtitle">
                Some things deserve to be discovered slowly.
            </p>

            <div class="card-container">

                <div
                    class="secret-card"
                    data-card="memory"
                >

                    <div class="card-icon">♡</div>

                    <div class="card-title">
                        A Memory
                    </div>

                    <div class="card-description">
                        One moment from our story
                        that deserves to stay here.
                    </div>

                    <div class="card-hint">
                        CLICK TO DISCOVER
                    </div>

                </div>


                <div
                    class="secret-card"
                    data-card="secret"
                >

                    <div class="card-icon">✦</div>

                    <div class="card-title">
                        A Little Secret
                    </div>

                    <div class="card-description">
                        Something I kept quietly
                        and never told you.
                    </div>

                    <div class="card-hint">
                        DO YOU DARE?
                    </div>

                </div>


                <div
                    class="secret-card"
                    data-card="you"
                >

                    <div class="card-icon">♡</div>

                    <div class="card-title">
                        Something For You
                    </div>

                    <div class="card-description">
                        This one isn't meant
                        to be opened immediately.
                    </div>

                    <div class="card-hint">
                        OPEN CAREFULLY
                    </div>

                </div>

            </div>


            <div
                class="chapter-unlock"
                id="chapterUnlock"
            >

                <p>
                    ALL THREE SECRETS DISCOVERED
                </p>

                <button id="chapterThreeButton">
                    ENTER THE PUZZLE ROOM
                </button>

            </div>

        </div>


        <div
            class="card-reveal"
            id="cardReveal"
        >

            <div
                class="petal-shower"
                id="petalShower"
            ></div>

            <div class="reveal-box">

                <div
                    class="reveal-label"
                    id="revealLabel"
                >
                    DISCOVERED
                </div>

                <div
                    class="reveal-title"
                    id="revealTitle"
                >
                    A Secret
                </div>

                <div
                    class="reveal-text"
                    id="revealText"
                >
                    Something special is waiting here.
                </div>

                <button
                    class="close-reveal"
                    id="closeReveal"
                >
                    CLOSE
                </button>

            </div>

        </div>
    `;

    setupCards();
}


/* =====================================================
   CARDS
===================================================== */

function setupCards() {

    const cards =
        document.querySelectorAll(".secret-card");

    const reveal =
        document.getElementById("cardReveal");

    const title =
        document.getElementById("revealTitle");

    const label =
        document.getElementById("revealLabel");

    const text =
        document.getElementById("revealText");


    cards.forEach(card => {

        card.addEventListener("click", function() {

            const type =
                card.getAttribute("data-card");

            openedCards.add(type);

            card.classList.add("opened");

            if (type === "memory") {

                label.textContent =
                    "A MEMORY";

                title.textContent =
                    "One Day, Forever";

                text.innerHTML = `

<div class="memory-frame">
    <img
        src="assets/images/memory.jpg"
        alt="One Day, Forever"
    >
</div>

                    <p>
                        There are moments that look
                        ordinary when they happen…
                    </p>

                    <br>

                    <p>
                        and only later do you realise
                        they became precious.
                    </p>

                    <br>

                    <p>
                        You are part of so many moments
                        I would choose to live again.
                    </p>

                    <br>

                    <p>
                        Not because everything was perfect,
                        but because it was <strong>ours.</strong>
                    </p>

                `;
            }


            if (type === "secret") {

                label.textContent =
                    "A LITTLE SECRET";

                title.textContent =
                    "You Found Something";

                text.innerHTML = `

                    <div class="secret-message">

                        There are things I don't say enough…

                        <br><br>

                        You matter to me more
                        than you probably realise.

                    </div>

                    <p>
                        Your presence has quietly become
                        one of the most comforting parts
                        of my life.
                    </p>

                    <br>

                    <p>
                        I notice the little things about you.
                    </p>

                    <br>

                    <p>
                        And somewhere along the way…
                    </p>

                    <br>

                    <p>
                        you became
                        <strong>someone I deeply value.</strong>
                    </p>

                `;
            }


            if (type === "you") {

                label.textContent =
                    "FOR YOU";

                title.textContent =
                    "A Letter";

                text.innerHTML = `

                    <div
                        class="envelope-area"
                        id="envelopeArea"
                    >

                        <div
                            class="envelope"
                            id="envelope"
                        >

                            <div class="envelope-seal">
                                ♡
                            </div>

                        </div>

                    </div>

                    <p id="envelopeHint">
                        Tap the envelope.
                    </p>

                    <div
                        class="letter"
                        id="letter"
                    >

                        If I could give you one thing…

                        <br><br>

                        it wouldn't be a gift.

                        <br><br>

                        It would be the ability to see
                        yourself through my eyes
                        for just one moment.

                        <br><br>

                        Maybe then you'd understand
                        why you're so important to me.

                        <br><br>

                        Why your happiness matters to me.
                        Why your presence feels like home.

                        <br><br>

                        <strong>
                        Allah allowed our paths to meet.
                        </strong>

                        <br><br>

                        And if life gives us a thousand
                        more chapters,

                        <br><br>

                        I hope I get to discover
                        every one of them with you.

                    </div>
                `;

                setTimeout(() => {

                    document
                        .getElementById("envelopeArea")
                        .addEventListener(
                            "click",
                            openEnvelope
                        );

                }, 50);
            }

            reveal.classList.add("active");

        });

    });


    document
        .getElementById("closeReveal")
        .addEventListener(
            "click",
            function() {

                reveal.classList.remove("active");

                checkChapterUnlock();

            }
        );


    document
        .getElementById("chapterThreeButton")
        .addEventListener(
            "click",
            puzzleRoom
        );
}


/* =====================================================
   CHECK CARDS
===================================================== */

function checkChapterUnlock() {

    if (openedCards.size === 3) {

        document
            .getElementById("chapterUnlock")
            .classList.add("show");

    }
}


/* =====================================================
   PETALS
===================================================== */

function createPetals() {

    const shower =
        document.getElementById("petalShower");

    if (!shower) return;

    shower.innerHTML = "";

    for (let i = 0; i < 36; i++) {

        const petal =
            document.createElement("span");

        petal.className = "petal";

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        petal.style.animationDelay =
            (Math.random() * 2) + "s";

        shower.appendChild(petal);
    }
}


/* =====================================================
   ENVELOPE
===================================================== */

function openEnvelope() {

    const envelopeArea =
        document.getElementById("envelopeArea");

    const envelope =
        document.getElementById("envelope");

    const letter =
        document.getElementById("letter");

    const hint =
        document.getElementById("envelopeHint");

    if (!envelope || !letter) return;

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    envelopeArea.classList.add("opened");

    hint.textContent =
        "A little something for you…";

    createPetals();

    setTimeout(() => {

        letter.classList.add("show");

    }, 900);
}


/* =====================================================
   PUZZLE ROOM
===================================================== */

function puzzleRoom() {

    document.querySelector(".entrance").innerHTML = `

        <div class="puzzle-room">

            <div class="room-light"></div>

            <div class="puzzle-heading">

                <small>
                    THE NEXT ROOM
                </small>

                <h1>
                    The Puzzle Room
                </h1>

                <p>
                    Nothing here is accidental.
                </p>

            </div>


            <div class="room-floor"></div>


            <!-- CENTRAL LOCKED DOOR -->

            <div class="secret-door">

                <div class="door-title">
                    ACCESS
                </div>

                <div class="door-locks">

                    <div
                        class="door-lock"
                        id="lock1"
                    >
                        1
                    </div>

                    <div
                        class="door-lock"
                        id="lock2"
                    >
                        2
                    </div>

                    <div
                        class="door-lock"
                        id="lock3"
                    >
                        3
                    </div>

                </div>

            </div>


            <!-- CLOCK -->

            <div
                class="room-object clock-object"
                id="clockObject"
            >

                <span>
                    TIME
                </span>

            </div>


            <!-- MIRROR -->

            <div
                class="room-object mirror-object"
                id="mirrorObject"
            >

                <div class="mirror-symbol">
                    ◇
                </div>

            </div>


            <!-- ROSE -->

            <div
                class="room-object rose-object"
                id="roseObject"
            >

                ✿

                <small>
                    A Little Flower For You
                </small>

            </div>


            <!-- DECORATIVE CLUE -->

            <div
                class="wall-clue"
                id="wallClue"
            >

                <div class="paper">
                    <strong>?</strong>
                    <p>
                        perhaps this matters
                    </p>
                </div>

            </div>


            <!-- PROGRESS -->

            <div class="puzzle-progress">

                <div
                    class="progress-dot"
                    id="progress1"
                ></div>

                <div
                    class="progress-dot"
                    id="progress2"
                ></div>

                <div
                    class="progress-dot"
                    id="progress3"
                ></div>

            </div>


            <!-- PUZZLE MODAL -->

            <div
                class="puzzle-modal"
                id="puzzleModal"
            >

                <div class="puzzle-box">

                    <div
                        class="puzzle-number"
                        id="puzzleNumber"
                    >
                        LOCK I
                    </div>

                    <h2 id="puzzleTitle">
                        The Clock
                    </h2>

                    <div
                        class="puzzle-clue"
                        id="puzzleClue"
                    >
                    </div>

                    <input
                        class="puzzle-input"
                        id="puzzleInput"
                        autocomplete="off"
                    >

                    <button id="puzzleSubmit">
                        UNLOCK
                    </button>

                    <div
                        class="puzzle-feedback"
                        id="puzzleFeedback"
                    ></div>

                    <button
                        class="close-puzzle"
                        id="closePuzzle"
                    >
                        CLOSE
                    </button>

                </div>

            </div>

        </div>


        <!-- TENSION -->

        <div
            class="tension-screen"
            id="tensionScreen"
        >

            <div class="tension-content">

                <div class="tension-small">
                    ALL THREE LOCKS RELEASED
                </div>

                <div class="tension-main">
                    You found the keys.
                    <br>
                    But now comes the part that matters.
                </div>

                <div class="tension-warning">
                    IF YOU CHOOSE THE WRONG ONE,<br>
                    THE WEBSITE MAY COLLAPSE.
                </div>

                <button id="chooseDoorButton">
                    I UNDERSTAND
                </button>

            </div>

        </div>


        <!-- DOOR CHOICE -->

        <div
            class="door-choice-screen"
            id="doorChoiceScreen"
        >

            <div class="choice-title">
                Choose carefully.
            </div>

            <div class="choice-subtitle">
                ONLY ONE OF THEM KNOWS THE WAY FORWARD
            </div>

            <div class="door-options">

                <div
                    class="choice-door"
                    data-door="1"
                >
                    <span>
                        DOOR I
                    </span>
                </div>

                <div
                    class="choice-door"
                    data-door="2"
                >
                    <span>
                        DOOR II
                    </span>
                </div>

                <div
                    class="choice-door"
                    data-door="3"
                >
                    <span>
                        DOOR III
                    </span>
                </div>

            </div>

        </div>

    `;


    setupPuzzleRoom();
}


/* =====================================================
   PUZZLE STATE
===================================================== */

let puzzleStage = 1;


/* =====================================================
   SETUP PUZZLE ROOM
===================================================== */

function setupPuzzleRoom() {

    const clock =
        document.getElementById("clockObject");

    const mirror =
        document.getElementById("mirrorObject");

    const rose =
        document.getElementById("roseObject");

    const clue =
        document.getElementById("wallClue");


    clock.addEventListener(
        "click",
        function() {

            if (puzzleStage !== 1) return;

            openPuzzle(
                1,
                "The Clock",
                `
                Aaj door baitha ek dost bohat yaad aaya
                Acha guzra hua, kuch waqt bohat yaad aaya

                <br><br>

                Look at what it is trying
                to show you.

                <br><br>

                <small>
                ENTER THE (DDMMYYYY).
                </small>
                `,
                "300626"
            );

        }
    );


    mirror.addEventListener(
        "click",
        function() {

            if (puzzleStage < 2) {

                showRoomHint(
                    "The mirror remains silent... for now."
                );

                return;
            }

            if (puzzleStage !== 2) return;

            openPuzzle(
                2,
                "The Mirror",
                `
                What you see is not always
                what is written.

                <br><br>

                The mirror keeps one word
                backwards.

                <br><br>

                <strong>
                naM ti htiw laed , uoy htiw dessesbo llits
                </strong>

                <br><br>

                What does it become
                when you look at it correctly?
                `,
                "still obsessed with you , deal with it Man"
            );

        }
    );


    rose.addEventListener(
        "click",
        function() {

            if (puzzleStage < 3) {

                showRoomHint(
                    "Something is missing... but you haven't earned the right to count it yet."
                );

                return;
            }

            if (puzzleStage !== 3) return;

            openPuzzle(
                3,
                "The Last Clue",
                `
                WAQT KI DHOOP ME BHI JO MURJHAYE NA KABHI,
                AAPKE PYAAR KA WO PHOOL, HUMNE DIL ME SAJA RAKHA HAI..

                <br><br>

                Count the petals of the
                mysterious flower.

                <br><br>

                <small>
                THE NUMBER WILL OPEN THE FINAL LOCK.
                </small>
                `,
                "5"
            );

        }
    );


    clue.addEventListener(
        "click",
        function() {

            if (puzzleStage === 1) {

                showRoomHint(
                    "Time is the first thing the room wants you to notice."
                );

            }

            else if (puzzleStage === 2) {

                showRoomHint(
                    "What is reflected can sometimes be read backwards."
                );

            }

            else if (puzzleStage === 3) {

                showRoomHint(
                    "You are very close. Count carefully."
                );

            }

            else {

                showRoomHint(
                    "The room has nothing more to hide."
                );

            }

        }
    );


    document
        .getElementById("closePuzzle")
        .addEventListener(
            "click",
            closePuzzle
        );


    document
        .getElementById("puzzleSubmit")
        .addEventListener(
            "click",
            submitPuzzle
        );


    document
        .getElementById("puzzleInput")
        .addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {
                    submitPuzzle();
                }

            }
        );

}


/* =====================================================
   OPEN PUZZLE
===================================================== */

function openPuzzle(
    number,
    title,
    clue,
    answer
) {

    const modal =
        document.getElementById("puzzleModal");

    const puzzleNumber =
        document.getElementById("puzzleNumber");

    const puzzleTitle =
        document.getElementById("puzzleTitle");

    const puzzleClue =
        document.getElementById("puzzleClue");

    const input =
        document.getElementById("puzzleInput");

    const feedback =
        document.getElementById("puzzleFeedback");


    window.currentPuzzleAnswer =
        answer;

    window.currentPuzzleNumber =
        number;


    puzzleNumber.textContent =
        "LOCK " + number;

    puzzleTitle.textContent =
        title;

    puzzleClue.innerHTML =
        clue;

    input.value = "";

    feedback.textContent =
        "";

    modal.classList.add("active");

    setTimeout(() => {

        input.focus();

    }, 400);
}


/* =====================================================
   SUBMIT PUZZLE
===================================================== */

function submitPuzzle() {

    const input =
        document.getElementById("puzzleInput");

    const feedback =
        document.getElementById("puzzleFeedback");

    const answer =
        input.value
            .trim()
            .toUpperCase();


    if (
        answer ===
        window.currentPuzzleAnswer.toUpperCase()
    ) {

        feedback.textContent =
            "LOCK RELEASED.";

        feedback.style.color =
            "#d8b779";


        unlockCurrentLock();


        setTimeout(() => {

            closePuzzle();

        }, 1200);

    }

    else {

        feedback.textContent =
            getWrongHint(
                window.currentPuzzleNumber
            );

        input.style.animation =
            "shake 0.4s";

        setTimeout(() => {

            input.style.animation = "";

        }, 400);

    }

}


/* =====================================================
   WRONG HINTS
===================================================== */

function getWrongHint(number) {

    if (number === 1) {

        return "The room is telling you to look at the time.";

    }

    if (number === 2) {

        return "Try seeing the word from another direction.";

    }

    if (number === 3) {

        return "Don't rush. Count what remains.";

    }

    return "Something is missing.";
}


/* =====================================================
   UNLOCK CURRENT LOCK
===================================================== */

function unlockCurrentLock() {

    const lock =
        document.getElementById(
            "lock" + window.currentPuzzleNumber
        );

    const progress =
        document.getElementById(
            "progress" + window.currentPuzzleNumber
        );


    lock.classList.add("unlocked");

    progress.classList.add("active");


    if (window.currentPuzzleNumber === 1) {

        puzzleStage = 2;

    }

    else if (window.currentPuzzleNumber === 2) {

        puzzleStage = 3;

    }

    else if (window.currentPuzzleNumber === 3) {

        puzzleStage = 4;

        setTimeout(() => {

            showTension();

        }, 1500);

    }

}


/* =====================================================
   CLOSE PUZZLE
===================================================== */

function closePuzzle() {

    document
        .getElementById("puzzleModal")
        .classList.remove("active");

}


/* =====================================================
   ROOM HINT
===================================================== */

function showRoomHint(text) {

    const old =
        document.querySelector(".room-hint");

    if (old) {
        old.remove();
    }


    const hint =
        document.createElement("div");

    hint.className =
        "room-hint";

    hint.textContent =
        text;

    hint.style.position =
        "fixed";

    hint.style.left =
        "50%";

    hint.style.bottom =
        "80px";

    hint.style.transform =
        "translateX(-50%)";

    hint.style.zIndex =
        "200";

    hint.style.padding =
        "14px 22px";

    hint.style.background =
        "rgba(15,8,12,0.9)";

    hint.style.border =
        "1px solid rgba(210,170,120,0.25)";

    hint.style.color =
        "#cdbab0";

    hint.style.fontSize =
        "10px";

    hint.style.letterSpacing =
        "1px";

    hint.style.textAlign =
        "center";

    document.body.appendChild(hint);


    setTimeout(() => {

        hint.style.transition =
            "1s";

        hint.style.opacity =
            "0";

        setTimeout(() => {

            hint.remove();

        }, 1000);

    }, 2500);
}


/* =====================================================
   TENSION
===================================================== */

function showTension() {

    const tension =
        document.getElementById("tensionScreen");

    tension.classList.add("active");


    document
        .getElementById("chooseDoorButton")
        .addEventListener(
            "click",
            showDoorChoice
        );

}


/* =====================================================
   DOOR CHOICE
===================================================== */

function showDoorChoice() {

    document
        .getElementById("tensionScreen")
        .classList.remove("active");


    setTimeout(() => {

        document
            .getElementById("doorChoiceScreen")
            .classList.add("active");


        document
            .querySelectorAll(".choice-door")
            .forEach(door => {

                door.addEventListener(
                    "click",
                    function() {

                        const chosen =
                            door.getAttribute("data-door");

                        chooseDoor(chosen);

                    }
                );

            });

    }, 1000);

}


/* =====================================================
   CHOOSE DOOR
===================================================== */

function chooseDoor(chosen) {

    /*
       DOOR II IS THE CORRECT ONE FOR NOW.
       We can secretly change this later.
    */

    if (chosen === "2") {

        openCorrectDoor();

    }

    else {

        collapseWebsite();

    }

}


/* =====================================================
   WRONG DOOR
===================================================== */

function collapseWebsite() {

    document.querySelector(".entrance").innerHTML = `

        <div class="collapse-screen">

            <div class="collapse-text">

                SYSTEM UNSTABLE...
                <br><br>

                WRONG DOOR.

            </div>

        </div>

    `;


    setTimeout(() => {

        document.querySelector(".entrance").innerHTML = `

            <div class="collapse-screen">

                <div class="collapse-text">

                    You were warned.

                    <br><br>

                    But perhaps...
                    <br>

                    I am feeling generous.

                    <br><br>

                    <button id="returnToDoors">
                        TRY AGAIN
                    </button>

                </div>

            </div>

        `;


        document
            .getElementById("returnToDoors")
            .addEventListener(
                "click",
                () => {

                    puzzleRoom();

                    setTimeout(() => {

                        showTension();

                    }, 100);

                }
            );

    }, 3500);

}


/* =====================================================
   CORRECT DOOR
===================================================== */

function openCorrectDoor() {

    document.querySelector(".entrance").innerHTML = `

        <div class="pink-world">

            <div class="sparkle-field" id="sparkleField"></div>

            <div class="pink-content">

                <div class="pink-label">
                    ACCESS GRANTED
                </div>

                <div class="pink-title">
                    You Found It.
                </div>

                <div class="pink-message">
                    Some doors don't lead to rooms.
                    <br>
                    They lead to memories.
                </div>

                <button id="memoryRoomButton">
                    ENTER
                </button>

            </div>

        </div>

    `;


    createSparkles();


    document
        .getElementById("memoryRoomButton")
        .addEventListener(
            "click",
            memoryRoom
        );

}


/* =====================================================
   SPARKLES
===================================================== */

function createSparkles() {

    const field =
        document.getElementById("sparkleField");

    if (!field) return;


    for (let i = 0; i < 90; i++) {

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "sparkle";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.animationDuration =
            (5 + Math.random() * 7) + "s";

        sparkle.style.animationDelay =
            (Math.random() * 6) + "s";

        const size =
            2 + Math.random() * 5;

        sparkle.style.width =
            size + "px";

        sparkle.style.height =
            size + "px";

        field.appendChild(sparkle);

    }

}


/* =====================================================
   MEMORY ROOM — CINEMATIC ARCHIVE
===================================================== */

const memoryArchive = [
    {
        id: "01",
        type: "image",
        title: "The Beginning",
        eyebrow: "MEMORY 01 · THE MOMENT",
        caption: "Some moments don't look important until you realise you never want to forget them.",
        note: "Replace the placeholder with your first photo.",
        source: "assets/images/memory-01.jpg"
    },
    {
        id: "02",
        type: "image",
        title: "The Little Things",
        eyebrow: "MEMORY 02 · ORDINARY MAGIC",
        caption: "It was never only the big moments. Somehow, the smallest ones became the ones I kept.",
        note: "Replace with another photo from your story.",
        source: "assets/images/memory-02.jpg"
    },
    {
        id: "03",
        type: "video",
        title: "A Moment In Motion",
        eyebrow: "MEMORY 03 · PRESS PLAY",
        caption: "Some memories deserve sound, movement and a few more seconds before they disappear.",
        note: "Replace with your video file.",
        source: "assets/videos/memory-03.mp4"
    },
    {
        id: "04",
        type: "image",
        title: "The Version Of Us",
        eyebrow: "MEMORY 04 · US",
        caption: "Somewhere between then and now, you became part of the way I remember my life.",
        note: "Replace with a favourite photo.",
        source: "assets/images/memory-04.jpg"
    },
    {
        id: "05",
        type: "video",
        title: "Keep This One",
        eyebrow: "MEMORY 05 · A LITTLE LONGER",
        caption: "If I could pause one ordinary evening and keep it forever, it might look something like this.",
        note: "Replace with a short personal video.",
        source: "assets/videos/memory-05.mp4"
    },
    {
        id: "06",
        type: "image",
        title: "Still Becoming",
        eyebrow: "MEMORY 06 · NOT THE END",
        caption: "This archive was never meant to hold only what happened. It was made for everything still waiting to happen.",
        note: "This can become a future-memory placeholder.",
        source: "assets/images/memory-06.jpg"
    }
];

let activeMemoryIndex = 0;
let revealedMemories = new Set();

function memoryRoom() {

    activeMemoryIndex = 0;
    revealedMemories = new Set();

    document.querySelector(".entrance").innerHTML = `

        <section class="memory-room" id="memoryRoom">

            <div class="memory-aurora aurora-one"></div>
            <div class="memory-aurora aurora-two"></div>
            <div class="memory-grain"></div>
            <div class="memory-stars" id="memoryStars"></div>

            <header class="memory-header">
                <div class="memory-kicker">THE MEMORY ROOM</div>
                <div class="memory-rule"><span></span><i>✦</i><span></span></div>
                <h1>A living archive of us.</h1>
                <p>Not every memory should arrive at once.</p>
            </header>

            <div class="memory-progress" aria-label="Memory progress">
                <div class="memory-progress-track">
                    <span id="memoryProgressBar"></span>
                </div>
                <div class="memory-progress-meta">
                    <span id="memoryProgressLabel">MEMORY 01 OF 06</span>
                    <span id="memoryProgressHint">A moment is waiting.</span>
                </div>
            </div>

            <main class="memory-stage" id="memoryStage"></main>

            <div class="memory-archive-strip" id="memoryArchiveStrip"></div>

            <div class="memory-controls">
                <button class="memory-control secondary" id="memoryBackButton" type="button">
                    <span>←</span> PREVIOUS
                </button>
                <button class="memory-control primary" id="memoryNextButton" type="button">
                    REVEAL MEMORY <span>→</span>
                </button>
            </div>

            <div class="memory-whisper" id="memoryWhisper">
                <span class="whisper-dot"></span>
                <span>THE ROOM REMEMBERS</span>
            </div>

            <div class="memory-modal" id="memoryMediaModal" aria-hidden="true">
                <div class="memory-modal-backdrop" id="memoryModalBackdrop"></div>
                <div class="memory-modal-card">
                    <button class="memory-modal-close" id="memoryModalClose" type="button" aria-label="Close">×</button>
                    <div id="memoryModalContent"></div>
                </div>
            </div>

        </section>
    `;

    createMemoryStars();
    renderMemoryRoom();
    setupMemoryRoom();
}

function createMemoryStars() {
    const field = document.getElementById("memoryStars");
    if (!field) return;

    field.innerHTML = "";

    for (let i = 0; i < 75; i++) {
        const star = document.createElement("span");
        star.className = "memory-star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${3 + Math.random() * 5}s`;
        star.style.setProperty("--star-size", `${1 + Math.random() * 3}px`);
        field.appendChild(star);
    }
}

function renderMemoryRoom(direction = "forward") {
    const stage = document.getElementById("memoryStage");
    const strip = document.getElementById("memoryArchiveStrip");
    const progressBar = document.getElementById("memoryProgressBar");
    const progressLabel = document.getElementById("memoryProgressLabel");
    const progressHint = document.getElementById("memoryProgressHint");

    if (!stage) return;

    const memory = memoryArchive[activeMemoryIndex];
    const isRevealed = revealedMemories.has(memory.id);
    const exists = true;

    stage.classList.remove("memory-stage-enter", "memory-stage-back");
    void stage.offsetWidth;
    stage.classList.add(direction === "back" ? "memory-stage-back" : "memory-stage-enter");

    stage.innerHTML = `
        <article class="memory-feature ${isRevealed ? "is-revealed" : ""}">

            <div class="memory-number">${memory.id}</div>

            <div class="memory-feature-copy">
                <div class="memory-eyebrow">${memory.eyebrow}</div>
                <h2>${memory.title}</h2>
                <div class="memory-mini-line"></div>
                <p class="memory-caption">${memory.caption}</p>

                <div class="memory-note">
                    <span class="memory-note-icon">✦</span>
                    <span>${memory.note}</span>
                </div>
            </div>

            <button class="memory-media-frame ${exists ? "has-media" : "placeholder-media"} ${memory.type === "video" ? "video-media" : "image-media"}" id="memoryMediaButton" type="button">
                <div class="memory-frame-corner top-left"></div>
                <div class="memory-frame-corner top-right"></div>
                <div class="memory-frame-corner bottom-left"></div>
                <div class="memory-frame-corner bottom-right"></div>

                ${exists ? buildMemoryMedia(memory) : buildMemoryPlaceholder(memory)}

                <span class="memory-frame-label">${memory.type === "video" ? "CINEMATIC VIDEO" : "PERSONAL PHOTOGRAPH"}</span>
            </button>

            <div class="memory-reveal-line ${isRevealed ? "visible" : ""}">
                <span></span>
                <em>${isRevealed ? "MEMORY HELD" : "THIS MOMENT IS WAITING"}</em>
                <span></span>
            </div>
        </article>
    `;

    const percent = ((activeMemoryIndex + 1) / memoryArchive.length) * 100;
    progressBar.style.width = `${percent}%`;
    progressLabel.textContent = `MEMORY ${memory.id} OF ${String(memoryArchive.length).padStart(2, "0")}`;
    progressHint.textContent = isRevealed ? "This one is yours to keep." : "A moment is waiting.";

    renderMemoryStrip();
    updateMemoryControls();

    const mediaButton = document.getElementById("memoryMediaButton");
    if (mediaButton) {
        mediaButton.addEventListener("click", () => revealMemory(activeMemoryIndex));
    }
}

function buildMemoryPlaceholder(memory) {
    const visualClass = memory.type === "video" ? "video-placeholder" : "photo-placeholder";

    return `
        <div class="memory-placeholder ${visualClass}">
            <div class="placeholder-orbit orbit-one"></div>
            <div class="placeholder-orbit orbit-two"></div>
            <div class="placeholder-symbol">${memory.type === "video" ? "▶" : "◇"}</div>
            <div class="placeholder-title">${memory.type === "video" ? "YOUR VIDEO" : "YOUR PHOTO"}</div>
            <div class="placeholder-path">${memory.source}</div>
            <div class="placeholder-action">CLICK TO REVEAL</div>
        </div>
    `;
}

function buildMemoryMedia(memory) {
    const fallback = `
        <div class="memory-asset-fallback">
            <div class="placeholder-symbol">${memory.type === "video" ? "▶" : "◇"}</div>
            <div class="placeholder-title">YOUR ${memory.type === "video" ? "VIDEO" : "PHOTO"}</div>
            <div class="placeholder-path">${memory.source}</div>
        </div>
    `;

    if (memory.type === "video") {
        return `<div class="memory-media-shell">${fallback}<video class="memory-inline-video" src="${memory.source}" muted playsinline preload="metadata" onerror="this.parentElement.classList.add('asset-missing')"></video></div>`;
    }

    return `<div class="memory-media-shell">${fallback}<img class="memory-inline-image" src="${memory.source}" alt="${memory.title}" loading="lazy" onerror="this.parentElement.classList.add('asset-missing')"></div>`;
}

function revealMemory(index) {
    const memory = memoryArchive[index];
    if (!memory) return;

    // Mark the memory as revealed
    revealedMemories.add(memory.id);

    // Re-render the current memory
    renderMemoryRoom(
        index < activeMemoryIndex ? "back" : "forward"
    );

    // Keep the existing reveal animation
    const room = document.getElementById("memoryRoom");

    if (room) {
        room.classList.add("memory-reveal-pulse");

        setTimeout(() => {
            room.classList.remove("memory-reveal-pulse");
        }, 900);
    }

    const modal = document.getElementById("memoryMediaModal");
    const modalContent = document.getElementById("memoryModalContent");

    if (!modal || !modalContent) return;

    // Existing modal content
    modalContent.innerHTML = `
        <div class="modal-memory-number">${memory.id}</div>

        <div class="modal-memory-eyebrow">
            ${memory.eyebrow}
        </div>

        <h3>${memory.title}</h3>

        <div class="modal-media-placeholder">
            <div class="modal-orbit"></div>

            <div class="modal-symbol">
                ${memory.type === "video" ? "▶" : "◇"}
            </div>

            <strong>
                ${memory.type === "video"
                    ? "YOUR VIDEO GOES HERE"
                    : "YOUR PHOTO GOES HERE"}
            </strong>

            <small>${memory.source}</small>
        </div>

        <p>${memory.caption}</p>

        <div class="modal-signature">
            — a place kept for your memory —
        </div>
    `;

    /*
     * FINAL MEMORY FIX
     *
     * Memory 06 should NOT leave the modal open.
     * Otherwise the modal sits above the
     * "THE ARCHIVE CONTINUES" button and blocks it.
     */
    if (memory.id === "06") {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        return;
    }

    // Memories 01–05 keep the original modal behavior
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}


function renderMemoryStrip() {
    const strip = document.getElementById("memoryArchiveStrip");
    if (!strip) return;

    strip.innerHTML = memoryArchive.map((memory, index) => {
        const state = index === activeMemoryIndex ? "active" : index < activeMemoryIndex ? "visited" : "locked";
        return `
            <button class="archive-item ${state}" data-memory-index="${index}" type="button" aria-label="Memory ${memory.id}">
                <span class="archive-index">${memory.id}</span>
                <span class="archive-title">${memory.title}</span>
                <span class="archive-mark">${state === "locked" ? "•" : state === "active" ? "✦" : "✓"}</span>
            </button>
        `;
    }).join("");

    strip.querySelectorAll(".archive-item").forEach(button => {
        button.addEventListener("click", () => {
            const target = Number(button.dataset.memoryIndex);
            if (target > activeMemoryIndex + 1) return;
            const direction = target < activeMemoryIndex ? "back" : "forward";
            activeMemoryIndex = target;
            renderMemoryRoom(direction);
        });
    });
}

function updateMemoryControls() {
    const back = document.getElementById("memoryBackButton");
    const next = document.getElementById("memoryNextButton");
    const current = memoryArchive[activeMemoryIndex];

    if (!back || !next || !current) return;

    back.disabled = activeMemoryIndex === 0;

    if (!revealedMemories.has(current.id)) {
        next.innerHTML = `REVEAL MEMORY <span>→</span>`;
        next.classList.remove("final-memory");
    } else if (activeMemoryIndex === memoryArchive.length - 1) {
        next.innerHTML = `THE ARCHIVE CONTINUES <span>✦</span>`;
        next.classList.add("final-memory");
    } else {
        next.innerHTML = `NEXT MEMORY <span>→</span>`;
        next.classList.remove("final-memory");
    }
}

/* =====================================================
   FIX: single delegated handler, bound exactly once.

   Previously this handler was declared with
   `function memoryRoomClickHandler(event) {...}` INSIDE
   setupMemoryRoom() and re-registered via
   document.addEventListener every single time
   setupMemoryRoom() ran. Since setupMemoryRoom() runs
   again inside returnToMemoryRoomForPiece() (when the
   user goes back to the Memory Room to find the missing
   polaroid piece), a second listener got stacked on top
   of the first. From that point on, every click on
   #memoryNextButton fired the handler twice — which is
   exactly the "appears twice / second window" symptom
   you were seeing on the reveal + modal.

   Fix: hoist the handler to a named top-level function
   and guard its registration with a boolean so it is
   only ever attached once, no matter how many times
   memoryRoom()/setupMemoryRoom() run.
===================================================== */

let memoryRoomListenersBound = false;

function memoryRoomClickHandler(event) {
    const target = event.target.closest("#memoryNextButton");

    if (!target) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const current = memoryArchive[activeMemoryIndex];

    if (!current) return;

    // If current memory has not been revealed yet,
    // reveal it first.
    if (!revealedMemories.has(current.id)) {
        revealMemory(activeMemoryIndex);

        // Make absolutely sure the final memory modal
        // cannot block the final CTA.
        if (current.id === "06") {
            const modal = document.getElementById("memoryMediaModal");

            if (modal) {
                modal.classList.remove("open");
                modal.setAttribute("aria-hidden", "true");
            }
        }

        updateMemoryControls();
        return;
    }

    // Go to next memory.
    if (activeMemoryIndex < memoryArchive.length - 1) {
        activeMemoryIndex++;
        renderMemoryRoom("forward");
        return;
    }

    // FINAL CTA
    const modal = document.getElementById("memoryMediaModal");

    if (modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
    }

    showPostMemoryStory();
}

function setupMemoryRoom() {
    const close = document.getElementById("memoryModalClose");
    const backdrop = document.getElementById("memoryModalBackdrop");

    // Only bind the delegated click handler once, ever —
    // this is the fix for the double-firing bug.
    if (!memoryRoomListenersBound) {
        memoryRoomListenersBound = true;

        document.addEventListener("click", memoryRoomClickHandler);
    }

    const closeModal = () => {
        const modal = document.getElementById("memoryMediaModal");

        if (!modal) return;

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
    };

    close?.addEventListener("click", closeModal);
    backdrop?.addEventListener("click", closeModal);

    // Avoid stacking duplicate keydown listeners too,
    // in case setupMemoryRoom() runs more than once.
    document.removeEventListener("keydown", memoryRoomEscapeHandler);
    document.addEventListener("keydown", memoryRoomEscapeHandler);
}

function memoryRoomEscapeHandler(event) {
    if (event.key !== "Escape") return;

    const modal = document.getElementById("memoryMediaModal");

    if (modal?.classList.contains("open")) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
    }
}




   

/* =====================================================
   POST-MEMORY CINEMATIC STORY
   Existing sequence preserved through ONE LAST THING.
   The Broken Polaroid begins immediately after it.
===================================================== */

function showPostMemoryStory() {
    document.removeEventListener("keydown", memoryRoomEscapeHandler);
    postMemoryStep = 0;
    renderPostMemoryStep();
}

let postMemoryStep = 0;
let postMemoryCountdownTimer = null;

function renderPostMemoryStep() {
    const entrance = document.querySelector(".entrance");
    if (!entrance) return;

    if (postMemoryCountdownTimer) {
        clearTimeout(postMemoryCountdownTimer);
        postMemoryCountdownTimer = null;
    }

    const templates = {
        0: `
            <section class="post-memory post-pink post-step" data-step="0">
                <div class="post-film-grain"></div>
                <div class="post-pink-glow"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="post-story-content">
                    <div class="post-whisper">THAT'S NOT ALL OF IT.</div>
                    <h1>It never will be.</h1>
                    <button class="post-button" id="postNext">CONTINUE <span>→</span></button>
                </div>
            </section>
        `,
        1: `
            <section class="post-memory post-pink post-step" data-step="1">
                <div class="post-film-grain"></div>
                <div class="post-pink-glow"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="post-story-content credits-intro">
                    <div class="post-whisper">BEFORE THE CREDITS ROLL...</div>
                    <h2>I need you to know something.</h2>
                    <p class="post-large-copy">You make ordinary days feel like scenes from a film.<br>And in every version of this story — <em>I choose you.</em></p>
                    <button class="post-button" id="postNext">ROLL THE CREDITS <span>→</span></button>
                </div>
            </section>
        `,
        2: `
            <section class="post-memory post-dark post-step credits-screen" data-step="2">
                <div class="post-film-grain"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="credits-content">
                    <div class="credits-title">THE END</div>
                    <div class="credits-rule"></div>
                    <p>A private experience, written for exactly one person.</p>
                    <p>Starring — <strong>you.</strong></p>
                    <p>Directed by — someone who loves you more than words.</p>
                    <span class="credits-close-note">You can close this website now.</span>
                </div>
            </section>
        `,
        3: `
            <section class="post-memory post-dark post-step" data-step="3">
                <div class="post-film-grain"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="post-story-content surprise-screen">
                    <div class="post-whisper">ONE LAST THING...</div>
                    <h2>Did you really think<br>I’d let it end that easily?</h2>
                    <button class="post-button dark-button" id="postNext">WHAT NOW? <span>→</span></button>
                </div>
            </section>
        `,
        4: `
            <section class="post-memory post-dark post-step catch-screen" data-step="4">
                <div class="post-film-grain"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="catch-message">
                    <div class="post-whisper">ONE MORE THING SURVIVED THE ENDING.</div>
                    <h2>Catch it.</h2>
                </div>
                <button class="hidden-light" id="hiddenLight" type="button" aria-label="Catch the hidden light"><span></span></button>
                <div class="catch-hint">Something is still moving.</div>
            </section>
        `,
        5: `
            <section class="post-memory post-dark post-step" data-step="5">
                <div class="post-film-grain"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="hidden-letter-wrap">
                    <div class="hidden-letter-card">
                        <button class="letter-x" id="letterClose" type="button" aria-label="Close">×</button>
                        <div class="post-whisper">A HIDDEN LETTER</div>
                        <p>If you are reading this, you caught what everyone else walks past.</p>
                        <p>That is what you do.</p>
                        <p>You caught me, too.</p>
                        <button class="post-button dark-button" id="postNext">KEEP IT <span>→</span></button>
                    </div>
                </div>
            </section>
        `,
        6: `
            <section class="post-memory post-dark post-step countdown-screen" data-step="6">
                <div class="post-film-grain"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="countdown-intro" id="countdownIntro">
                    <div class="post-whisper">NOW — COUNT WITH ME.</div>
                </div>
                <div class="post-countdown" id="postCountdown"></div>
            </section>
        `,
        7: `
            <section class="post-memory post-dark post-step" data-step="7">
                <div class="post-film-grain"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="question-screen">
                    <div class="post-whisper gold">A QUESTION ONLY YOU CAN ANSWER</div>
                    <h2>The best thing that ever<br>happened to me is —</h2>
                    <div class="answer-pair">
                        <button class="answer-choice" data-choice="you">YOU</button>
                        <button class="answer-choice" data-choice="everything">EVERYTHING AFTER YOU</button>
                    </div>
                </div>
            </section>
        `,
        8: `
            <section class="post-memory post-dark post-step one-last-thing-screen" data-step="8">
                <div class="post-film-grain"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="one-last-thing-content">
                    <div class="post-whisper gold">ONE LAST THING</div>
                    <div class="memory-seal">✦</div>
                    <h2>There is one memory<br>I've kept out of sight.</h2>
                    <p>Not because it wasn't important.</p>
                    <p>Because some memories have to be<br><em>put back together.</em></p>
                    <button class="post-button dark-button" id="postNext">OPEN IT <span>→</span></button>
                </div>
            </section>
        `,
        9: `
            <section class="post-memory post-dark post-step polaroid-stage-screen" data-step="9">
                <div class="post-film-grain"></div>
                <div class="post-stars" id="postStars"></div>
                <div class="polaroid-story-heading">
                    <div class="post-whisper gold">A MEMORY IN PIECES</div>
                    <h2>The Broken Polaroid</h2>
                    <p>Some memories are worth putting back together.</p>
                </div>
                <div id="polaroidPuzzleMount" class="polaroid-puzzle-mount"></div>
            </section>
        `
    };

    entrance.innerHTML = templates[postMemoryStep];
    createPostStars();
    setupPostMemoryStep(postMemoryStep);
}

function createPostStars() {
    const field = document.getElementById("postStars");
    if (!field) return;
    field.innerHTML = "";
    const count = 72;
    for (let i = 0; i < count; i++) {
        const star = document.createElement("span");
        star.className = "post-star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${3 + Math.random() * 6}s`;
        star.style.setProperty("--size", `${1 + Math.random() * 2.8}px`);
        field.appendChild(star);
    }
}

function postMemoryAdvance() {
    postMemoryStep++;
    renderPostMemoryStep();
}

function setupPostMemoryStep(step) {
    const next = document.getElementById("postNext");
    if (next) next.addEventListener("click", postMemoryAdvance);

    if (step === 2) {
        setTimeout(() => {
            if (postMemoryStep === 2) postMemoryAdvance();
        }, 7200);
    }

    if (step === 4) {
        const light = document.getElementById("hiddenLight");
        if (light) {
            let x = 18;
            let y = 31;
            let direction = 1;
            const move = () => {
                if (postMemoryStep !== 4) return;
                x += direction * (Math.random() * 3 + 1.5);
                y += (Math.random() - .5) * 2.5;
                if (x > 78 || x < 18) direction *= -1;
                y = Math.max(22, Math.min(70, y));
                light.style.left = `${x}%`;
                light.style.top = `${y}%`;
                setTimeout(move, 900 + Math.random() * 800);
            };
            light.style.left = `${x}%`;
            light.style.top = `${y}%`;
            move();
            light.addEventListener("click", postMemoryAdvance, { once: true });
        }
    }

    if (step === 5) {
        document.getElementById("letterClose")?.addEventListener("click", () => {
            const card = document.querySelector(".hidden-letter-card");
            card?.classList.add("letter-closing");
            setTimeout(() => {
                postMemoryStep = 4;
                renderPostMemoryStep();
            }, 420);
        });
    }

    if (step === 6) runPostMemoryCountdown();

    if (step === 7) {
        document.querySelectorAll(".answer-choice").forEach(button => {
            button.addEventListener("click", () => {
                document.querySelectorAll(".answer-choice").forEach(b => b.disabled = true);
                button.classList.add("chosen");
                setTimeout(() => renderQuestionReveal(), 900);
            });
        });
    }

    if (step === 9) startBrokenPolaroid();
}

function runPostMemoryCountdown() {
    const intro = document.getElementById("countdownIntro");
    const output = document.getElementById("postCountdown");
    if (!intro || !output) return;

    setTimeout(() => {
        if (postMemoryStep !== 6) return;
        intro.classList.add("fade-away");
        let n = 5;
        const tick = () => {
            if (postMemoryStep !== 6) return;
            if (n === 0) {
                output.classList.add("countdown-finished");
                output.innerHTML = `<div class="countdown-message">Every countdown with you<br>ends the same way.<br><em>Me. Grateful. For you.</em></div>`;
                setTimeout(postMemoryAdvance, 4200);
                return;
            }
            output.innerHTML = `<span class="count-number">${n}</span>`;
            output.classList.remove("countdown-beat");
            void output.offsetWidth;
            output.classList.add("countdown-beat");
            n--;
            postMemoryCountdownTimer = setTimeout(tick, 1150);
        };
        tick();
    }, 900);
}

function renderQuestionReveal() {
    const entrance = document.querySelector(".entrance");
    if (!entrance) return;
    entrance.innerHTML = `
        <section class="post-memory post-dark post-step question-reveal-screen">
            <div class="post-film-grain"></div>
            <div class="post-stars" id="postStars"></div>
            <div class="question-reveal-content">
                <div class="post-whisper gold">HONESTLY?</div>
                <h2>They were always<br>the same answer.</h2>
                <button class="post-button dark-button" id="postNext">I KNEW IT <span>→</span></button>
            </div>
        </section>
    `;
    createPostStars();
    document.getElementById("postNext")?.addEventListener("click", () => {
        postMemoryStep = 8;
        renderPostMemoryStep();
    });
}

/* =====================================================
   THE BROKEN POLAROID
   A physical-feeling scrapbook puzzle inserted after
   the existing "ONE LAST THING" beat.
===================================================== */

const polaroidPuzzle = {
    total: 10,
    placed: new Set(),
    missingFound: false,
    initialized: false,
    dragging: null,
    solved: false
};

const polaroidPieces = [
    { id: 0, x: 0, y: 0, letter: "M", tone: "rose" },
    { id: 1, x: 1, y: 0, letter: "E", tone: "cream" },
    { id: 2, x: 2, y: 0, letter: "M", tone: "blush" },
    { id: 3, x: 0, y: 1, letter: "O", tone: "wine" },
    { id: 4, x: 1, y: 1, letter: "R", tone: "gold" },
    { id: 5, x: 2, y: 1, letter: "Y", tone: "rose" },
    { id: 6, x: 0, y: 2, letter: "✦", tone: "cream" },
    { id: 7, x: 1, y: 2, letter: "♡", tone: "blush" },
    { id: 8, x: 2, y: 2, letter: "·", tone: "wine" },
    { id: 9, x: 1, y: 3, letter: "✦", tone: "gold" }
];

function startBrokenPolaroid() {
    if (!polaroidPuzzle.initialized) {
        polaroidPuzzle.placed = new Set();
        polaroidPuzzle.missingFound = false;
        polaroidPuzzle.solved = false;
        polaroidPuzzle.initialized = true;
    }
    polaroidPuzzle.dragging = null;
    renderBrokenPolaroid();
}

function renderBrokenPolaroid() {
    const mount = document.getElementById("polaroidPuzzleMount");
    if (!mount) return;

    const available = polaroidPuzzle.missingFound ? polaroidPieces : polaroidPieces.slice(0, 9);
    const missing = polaroidPuzzle.missingFound ? null : polaroidPieces[9];

    mount.innerHTML = `
        <div class="polaroid-puzzle" id="brokenPolaroid">
            <div class="polaroid-topline">
                <span id="polaroidPuzzleStatus">${polaroidPuzzle.missingFound ? "10 PIECES · ONE MEMORY" : "9 PIECES · SOMETHING IS MISSING"}</span>
                <span id="polaroidPieceCount">${polaroidPuzzle.placed.size} / 10</span>
            </div>

            <div class="scrapbook-desk" id="scrapbookDesk">
                <div class="desk-shadow"></div>
                <div class="paper-note note-left">some things<br>are worth<br>remembering.</div>
                <div class="paper-note note-right">11 · 06<br>keep this.</div>
                <div class="tape-strip tape-one"></div>
                <div class="tape-strip tape-two"></div>

                <div class="polaroid-board" id="polaroidBoard" aria-label="Broken Polaroid puzzle"></div>
                <div class="piece-tray" id="polaroidPieceTray"></div>
            </div>

            <div class="polaroid-puzzle-footer">
                <div class="polaroid-progress-line"><span id="polaroidProgressFill"></span></div>
                <p id="polaroidPuzzleMessage">Drag the fragments back into the photograph.</p>
                <button class="polaroid-return-button" id="polaroidReturnButton" type="button" hidden>RETURN TO THE MEMORY ROOM</button>
            </div>
        </div>
    `;

    const board = document.getElementById("polaroidBoard");
    const tray = document.getElementById("polaroidPieceTray");

    polaroidPieces.forEach(piece => {
        const slot = document.createElement("div");
        slot.className = `polaroid-slot slot-${piece.id}`;
        slot.dataset.pieceId = piece.id;
        slot.innerHTML = `<span>${piece.id === 9 && !polaroidPuzzle.missingFound ? "?" : ""}</span>`;
        board.appendChild(slot);
    });

    available.forEach(piece => {
        const pieceEl = createPolaroidPiece(piece);
        tray.appendChild(pieceEl);
    });

    updatePolaroidUI();

    if (missing) {
        const message = document.getElementById("polaroidPuzzleMessage");
        message.textContent = "Something’s missing. One piece is still somewhere in the Memory Room.";
        document.getElementById("polaroidReturnButton").hidden = false;
        document.getElementById("polaroidReturnButton").addEventListener("click", returnToMemoryRoomForPiece);
    }
}

function createPolaroidPiece(piece) {
    const el = document.createElement("div");

    el.className = `polaroid-piece tone-${piece.tone}`;

    el.dataset.pieceId = piece.id;
    el.dataset.x = piece.x;
    el.dataset.y = piece.y;

    // Position this piece as a crop from the same photograph
    el.style.setProperty(
        "--bg-x",
        `${(piece.x / 2) * 100}%`
    );

    el.style.setProperty(
        "--bg-y",
        `${(piece.y / 3) * 100}%`
    );

    el.innerHTML = `
        <div class="piece-front">
            <div class="piece-photo-texture"></div>

            <div
                class="piece-photo-subject subject-${piece.id}"
            ></div>

            <span class="piece-edge-highlight"></span>
        </div>

        <div class="piece-back">
            <span>${piece.letter}</span>
        </div>
    `;

    el.addEventListener(
        "pointerdown",
        beginPolaroidDrag
    );

    el.addEventListener("click", () => {

        if (el.dataset.justDragged === "true") {
            el.dataset.justDragged = "false";
            return;
        }

        el.classList.add("piece-inspected");

        setTimeout(() => {
            el.classList.remove("piece-inspected");
        }, 500);
    });

    return el;
}
function beginPolaroidDrag(event) {
    if (polaroidPuzzle.solved) return;
    const piece = event.currentTarget;
    if (piece.classList.contains("placed")) return;

    event.preventDefault();
    piece.setPointerCapture?.(event.pointerId);

    const rect = piece.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const parent = piece.parentElement;

    polaroidPuzzle.dragging = {
        piece,
        pointerId: event.pointerId,
        startX,
        startY,
        offsetX,
        offsetY,
        parent,
        moved: false,
        originalParent: parent,
        originalNextSibling: piece.nextSibling
    };

    piece.classList.add("dragging");
    document.body.classList.add("dragging-polaroid");

    const move = e => movePolaroidDrag(e);
    const end = e => endPolaroidDrag(e, move, end);
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", end, { once: true });
    window.addEventListener("pointercancel", end, { once: true });
}

function movePolaroidDrag(event) {
    const d = polaroidPuzzle.dragging;
    if (!d || event.pointerId !== d.pointerId) return;
    event.preventDefault();

    const dx = event.clientX - d.startX;
    const dy = event.clientY - d.startY;
    if (Math.abs(dx) + Math.abs(dy) > 5) d.moved = true;

    const desk = document.getElementById("scrapbookDesk");
    if (!desk) return;
    const deskRect = desk.getBoundingClientRect();

    if (d.piece.parentElement !== desk) {
        desk.appendChild(d.piece);
    }

    d.piece.style.position = "absolute";
    d.piece.style.left = `${event.clientX - deskRect.left - d.offsetX}px`;
    d.piece.style.top = `${event.clientY - deskRect.top - d.offsetY}px`;
    d.piece.style.zIndex = "50";

    const target = getPolaroidTarget(d.piece);
    document.querySelectorAll(".polaroid-slot").forEach(slot => slot.classList.remove("near"));
    if (target) target.classList.add("near");
}

function endPolaroidDrag(event, move, end) {
    const d = polaroidPuzzle.dragging;
    if (!d || event.pointerId !== d.pointerId) return;

    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointercancel", end);
    document.body.classList.remove("dragging-polaroid");

    const piece = d.piece;
    piece.dataset.justDragged = d.moved ? "true" : "false";

    const target = getPolaroidTarget(piece);
    document.querySelectorAll(".polaroid-slot").forEach(slot => slot.classList.remove("near"));

    if (target && target.dataset.pieceId === piece.dataset.pieceId) {
        snapPolaroidPiece(piece, target);
    } else {
        returnPolaroidPiece(piece);
    }

    polaroidPuzzle.dragging = null;
}

function getPolaroidTarget(piece) {
    const board = document.getElementById("polaroidBoard");
    if (!board) return null;
    const pieceRect = piece.getBoundingClientRect();
    const pieceCenter = {
        x: pieceRect.left + pieceRect.width / 2,
        y: pieceRect.top + pieceRect.height / 2
    };

    let closest = null;
    let best = Infinity;
    document.querySelectorAll(".polaroid-slot").forEach(slot => {
        if (slot.classList.contains("filled")) return;
        const rect = slot.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const distance = Math.hypot(pieceCenter.x - cx, pieceCenter.y - cy);
        if (distance < best) {
            best = distance;
            closest = slot;
        }
    });

    return best < Math.max(52, pieceRect.width * .72) ? closest : null;
}

function snapPolaroidPiece(piece, slot) {
    const board = document.getElementById("polaroidBoard");
    if (!board) return;

    slot.classList.add("filled", "flash");
    const pieceId = Number(piece.dataset.pieceId);
    polaroidPuzzle.placed.add(pieceId);

    piece.classList.remove("dragging");
    piece.classList.add("placed");
    piece.style.position = "absolute";
    piece.style.left = `${slot.offsetLeft}px`;
    piece.style.top = `${slot.offsetTop}px`;
    piece.style.zIndex = `${10 + pieceId}`;

    board.appendChild(piece);
    setTimeout(() => slot.classList.remove("flash"), 550);

    const message = document.getElementById("polaroidPuzzleMessage");
    if (message) message.textContent = "That belongs there.";

    updatePolaroidUI();

    if (polaroidPuzzle.missingFound && polaroidPuzzle.placed.size === polaroidPuzzle.total) {
        setTimeout(completeBrokenPolaroid, 800);
    }
}

function returnPolaroidPiece(piece) {
    piece.classList.remove("dragging");
    piece.style.position = "";
    piece.style.left = "";
    piece.style.top = "";
    piece.style.zIndex = "";
    const tray = document.getElementById("polaroidPieceTray");
    if (tray && piece.parentElement !== tray) tray.appendChild(piece);
}

function updatePolaroidUI() {
    const count = document.getElementById("polaroidPieceCount");
    const fill = document.getElementById("polaroidProgressFill");
    const status = document.getElementById("polaroidPuzzleStatus");
    if (count) count.textContent = `${polaroidPuzzle.placed.size} / 10`;
    if (fill) fill.style.width = `${(polaroidPuzzle.placed.size / 10) * 100}%`;
    if (status) status.textContent = polaroidPuzzle.missingFound ? "10 PIECES · ONE MEMORY" : "9 PIECES · SOMETHING IS MISSING";
}

function returnToMemoryRoomForPiece() {
    /* Return to the REAL Memory Room rather than replacing it with a new page.
       The puzzle state stays alive while the fragment is being found. */
    memoryRoom();

    activeMemoryIndex = memoryArchive.length - 1;
    revealedMemories = new Set(memoryArchive.map(memory => memory.id));
    renderMemoryRoom("back");

    const room = document.getElementById("memoryRoom");
    if (!room) return;
    room.classList.add("memory-piece-search-mode");

    const clue = document.createElement("div");
    clue.className = "memory-piece-search-clue";
    clue.innerHTML = `
        <span class="memory-piece-search-kicker">ONE SMALL THING</span>
        <span>Something was left behind.</span>
    `;
    room.appendChild(clue);

    const fragment = document.createElement("button");
    fragment.className = "missing-memory-fragment";
    fragment.id = "missingMemoryFragment";
    fragment.type = "button";
    fragment.setAttribute("aria-label", "Find the missing Polaroid piece");
    fragment.innerHTML = `
        <span class="fragment-photo"></span>
        <span class="fragment-letter">✦</span>
        <span class="fragment-glint"></span>
    `;
    room.appendChild(fragment);

    const hint = document.createElement("div");
    hint.className = "missing-fragment-hint";
    hint.textContent = "Something feels out of place…";
    room.appendChild(hint);

    fragment.addEventListener("click", () => {
        polaroidPuzzle.missingFound = true;
        fragment.classList.add("found");
        room.classList.add("fragment-found");
        setTimeout(() => {
            postMemoryStep = 9;
            renderPostMemoryStep();
        }, 1100);
    }, { once: true });
}

function completeBrokenPolaroid() {
    if (polaroidPuzzle.solved) return;
    polaroidPuzzle.solved = true;

    const puzzle = document.getElementById("brokenPolaroid");
    if (!puzzle) return;
    puzzle.classList.add("polaroid-complete");

    const message = document.getElementById("polaroidPuzzleMessage");
    if (message) message.innerHTML = "The picture is whole again. <em>Wait.</em>";

    setTimeout(() => flipBrokenPolaroid(), 1300);
}

function flipBrokenPolaroid() {
    const puzzle = document.getElementById("brokenPolaroid");
    if (!puzzle) return;
    puzzle.classList.add("polaroid-flipping");

    const message = document.getElementById("polaroidPuzzleMessage");
    if (message) message.textContent = "You found the picture…";

    setTimeout(() => {
        puzzle.classList.add("polaroid-back-revealed");
        revealPolaroidWord();
    }, 1050);
}

function revealPolaroidWord() {
    const message = document.getElementById("polaroidPuzzleMessage");
    if (!message) return;
    message.innerHTML = `<span class="polaroid-word-reveal">M E M O R Y</span>`;

    setTimeout(() => {
        message.innerHTML = `You found the picture…<br><em>but you haven't found the memory yet.</em>`;
        setTimeout(() => animateLivingPolaroid(), 1700);
    }, 1800);
}

function animateLivingPolaroid() {
    const puzzle = document.getElementById("brokenPolaroid");
    if (!puzzle) return;
    puzzle.classList.add("memory-coming-alive");

    const message = document.getElementById("polaroidPuzzleMessage");
    if (message) message.innerHTML = `The memory is waking up…`;

    setTimeout(() => {
        showFinalEnding();
    }, 2800);
}

function showFinalEnding() {
    const entrance = document.querySelector(".entrance");
    if (!entrance) return;

    entrance.innerHTML = `
        <section class="final-ending">

            <div class="final-particles"></div>

            <div class="final-ending-content">

                <div class="final-ending-whisper">
                    MADE WIH 8324 LINES OF CODE JUST FOR YOU...
                </div>

                <button class="final-heart" id="finalHeart" type="button">
                    <span class="final-heart-gloss"></span>
                    <span class="final-heart-text">
                        I LOVE YOU,<br>
                        YOU AND ONLY YOU
                    </span>
                </button>

                <div class="final-ending-hint">
                    CLICK ONCE.
                </div>

            </div>

            <div class="forever-reveal" id="foreverReveal">

                <div class="forever-title">
                    MADEEHA<br>
                    <span>&amp;</span><br>
                    NAVEED FOREVER
                </div>

                <div class="forever-subtitle">
                    Forever isn't long enough.
                </div>

                <div class="forever-end">
                    THE END ♡
                </div>

            </div>

        </section>
    `;

    const heart = document.getElementById("finalHeart");
    const reveal = document.getElementById("foreverReveal");

    heart?.addEventListener("click", () => {
        heart.classList.add("heart-finished");

        setTimeout(() => {
            reveal.classList.add("show");
        }, 500);
    });
}
