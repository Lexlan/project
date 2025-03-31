const hobbies = [
    "movies",
    "video games",
    "reading",
    "programming",
    "writing",
    "teaching",
    "painting",
    "music"
];

const hobbyDescriptions = {
    "movies": "Watch and enjoy actors playout a story.",
    "video games": "Play endless games with friends or family or by yourself.",
    "reading": "Explore ideas through the pages of your favorite book.",
    "programming": "Create software and apps with the only limitation being your mind!.",
    "writing": "Express your ideas and thoughts on paper.",
    "teaching": "share your thoughts on a subject your good at and inspire others.",
    "painting": "Create art and express your feelings with colors.",
    "music": "Play instruments, or you could sing, or maybe produce beats."
};

function start() {
    document.getElementById('start-btn').style.visibility = 'hidden';
    document.getElementById('question-1').style.visibility = 'visible';
    let positionLeft = 600
    for (let i = 0; i < 3; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "hobby-button");
        newDiv.style.left = positionLeft
        newDiv.innerHTML = "HI";
        document.getElementById('all').appendChild(newDiv);
        const currentDiv = document.getElementById('Start-btn');
        document.body.insertBefore(newDiv, currentDiv);
      }


}

function question2(topic) {
    document.getElementById('question-1').style.visibility = 'hidden';
    document.getElementById('question-2-' + topic).style.visibility = 'visible';
}

function showResult(hobby) {
    let topic = '';
    if (document.getElementById('question-2-entertainment').style.visibility == 'visible') {
        topic = 'entertainment';
    } else if (document.getElementById('question-2-work').style.visibility == 'visible') {
        topic = 'work';
    }
    else if (document.getElementById('question-2-creative').style.visibility == 'visible') {
        topic = 'creative';
    }
    document.getElementById('question-2-' + topic).style.visibility = 'hidden';
    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('hobby').innerText = hobby;
    document.getElementById('description').innerText = hobbyDescriptions[hobby];
}