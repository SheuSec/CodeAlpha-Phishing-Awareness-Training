
// =====================================================
// CODEALPHA PROJECT 2
// PHISHING AWARENESS TRAINING
// COMPLETE JAVASCRIPT
// =====================================================


// =====================================================
// 1. LESSON CONTENT
// =====================================================

const lessons = [

    {
        title: "Understanding Phishing",

        content: `
            <h4>What is phishing?</h4>

            <p>
                Phishing is a cyberattack in which criminals impersonate
                trusted organisations or individuals to trick victims into
                revealing confidential information or performing unsafe actions.
            </p>

            <h4>Information attackers target</h4>

            <ul>
                <li>Passwords and login credentials.</li>
                <li>Banking and payment information.</li>
                <li>Personal identification information.</li>
                <li>Business and corporate information.</li>
                <li>Access to organisational systems.</li>
            </ul>

            <h4>How does phishing work?</h4>

            <p>
                An attacker sends a deceptive message that appears to come
                from a trusted source. The victim may be encouraged to click
                a link, open an attachment, transfer money or reveal sensitive
                information.
            </p>

            <h4>Real-world example</h4>

            <p>
                An employee receives an email that appears to come from the
                company's IT department. The email claims that the employee's
                account will be disabled unless their password is verified.
                The employee must recognise the warning signs and verify the
                request independently.
            </p>

            <div class="success">
                <strong>Key lesson:</strong>
                Never trust a message simply because it looks professional.
                Always verify unexpected requests.
            </div>
        `
    },

    {
        title: "Types of Phishing",

        content: `
            <h4>Common phishing techniques</h4>

            <ul>
                <li>
                    <strong>Email phishing:</strong>
                    Fraudulent emails designed to steal information.
                </li>

                <li>
                    <strong>Spear phishing:</strong>
                    Targeted attacks against specific individuals or organisations.
                </li>

                <li>
                    <strong>Whaling:</strong>
                    Attacks that specifically target senior executives.
                </li>

                <li>
                    <strong>Smishing:</strong>
                    Phishing attacks delivered through SMS messages.
                </li>

                <li>
                    <strong>Vishing:</strong>
                    Fraudulent telephone or voice-based attacks.
                </li>

                <li>
                    <strong>QR phishing:</strong>
                    Malicious QR codes that direct victims to fraudulent websites.
                </li>

                <li>
                    <strong>Business Email Compromise:</strong>
                    Fraud involving impersonated or compromised business email accounts.
                </li>
            </ul>

            <h4>Practical example</h4>

            <p>
                You receive a text message claiming that a parcel cannot be
                delivered until you pay a small additional fee. The message
                contains an unfamiliar payment link. This could be a smishing
                attempt.
            </p>

            <div class="success">
                <strong>Key lesson:</strong>
                Phishing is not limited to email. It can happen through
                messages, phone calls and QR codes.
            </div>
        `
    },

    {
        title: "Social Engineering",

        content: `
            <h4>What is social engineering?</h4>

            <p>
                Social engineering is the manipulation of human behaviour
                to trick people into revealing information, granting access
                or performing actions that benefit an attacker.
            </p>

            <h4>Common psychological techniques</h4>

            <ul>
                <li>
                    <strong>Urgency:</strong>
                    Making someone feel they must act immediately.
                </li>

                <li>
                    <strong>Fear:</strong>
                    Threatening account suspension or financial loss.
                </li>

                <li>
                    <strong>Authority:</strong>
                    Pretending to be a manager, executive or government official.
                </li>

                <li>
                    <strong>Trust:</strong>
                    Pretending to be a friend, colleague or known organisation.
                </li>

                <li>
                    <strong>Curiosity:</strong>
                    Using attractive offers or unexpected information.
                </li>
            </ul>

            <h4>Real-world example</h4>

            <p>
                Someone calls an employee pretending to be the company's
                technical support officer. They claim there is an urgent
                security issue and request the employee's login details.
            </p>

            <div class="success">
                <strong>Key lesson:</strong>
                Stop, think and independently verify unusual requests,
                even when they appear to come from someone important.
            </div>
        `
    },

    {
        title: "Detecting Fake Websites",

        content: `
            <h4>How to recognise suspicious websites</h4>

            <ul>
                <li>Inspect the complete domain name.</li>
                <li>Look for spelling mistakes and unusual characters.</li>
                <li>Be cautious with shortened URLs.</li>
                <li>Check whether the website address matches the organisation.</li>
                <li>Do not rely on website appearance alone.</li>
                <li>Navigate to important services using a known official address.</li>
            </ul>

            <h4>Understanding HTTPS</h4>

            <p>
                HTTPS encrypts communication between your browser and a website.
                However, HTTPS does not guarantee that the website itself is
                trustworthy.
            </p>

            <h4>Example</h4>

            <p>
                A website may imitate a legitimate company but use a different
                domain name. Always inspect the actual hostname before trusting
                the destination.
            </p>

            <div class="success">
                <strong>Key lesson:</strong>
                Inspect the domain, not just the company logo or padlock icon.
            </div>
        `
    },

    {
        title: "Protection Strategies",

        content: `
            <h4>How to protect yourself</h4>

            <ul>
                <li>Use strong and unique passwords.</li>
                <li>Enable multi-factor authentication.</li>
                <li>Use a reputable password manager.</li>
                <li>Keep your operating system and applications updated.</li>
                <li>Avoid opening unexpected attachments.</li>
                <li>Verify unusual payment requests independently.</li>
                <li>Report suspicious messages to your security team.</li>
            </ul>

            <h4>Understanding multi-factor authentication</h4>

            <p>
                Multi-factor authentication adds another verification step
                beyond a password. Depending on the method, this may involve
                an authenticator application, security key or other
                authentication factor.
            </p>

            <h4>Organisational protection</h4>

            <p>
                Organisations should provide regular security awareness
                training, implement email security controls and establish
                clear procedures for reporting suspicious activity.
            </p>

            <div class="success">
                <strong>Key lesson:</strong>
                Good security habits make it harder for attackers to succeed.
            </div>
        `
    },

    {
        title: "Incident Response",

        content: `
            <h4>What should you do if you encounter phishing?</h4>

            <ol>
                <li>Do not click suspicious links or open unexpected attachments.</li>
                <li>Report the message through your organisation's approved process.</li>
                <li>Preserve relevant evidence when instructed by your security team.</li>
                <li>Do not forward suspicious messages to other employees.</li>
                <li>Follow your organisation's incident response procedures.</li>
            </ol>

            <h4>What if you already clicked a phishing link?</h4>

            <ol>
                <li>Stop interacting with the suspicious website.</li>
                <li>Notify your IT or security team immediately.</li>
                <li>If you entered credentials, change the affected password
                    from a trusted device.</li>
                <li>Review account activity and revoke suspicious sessions
                    where appropriate.</li>
                <li>Contact your bank immediately if financial information
                    was exposed.</li>
                <li>Follow the security team's instructions.</li>
            </ol>

            <h4>Why reporting matters</h4>

            <p>
                Early reporting allows security teams to investigate,
                contain potential threats and protect other users.
            </p>

            <div class="success">
                <strong>Key lesson:</strong>
                Reporting a mistake quickly is much better than hiding it.
            </div>
        `
    }

];


// =====================================================
// 2. GLOBAL VARIABLES
// =====================================================

let currentLesson = 0;

let currentQuestion = 0;

let score = 0;

let questionAnswered = false;

const lessonContent = document.getElementById("lesson-content");

const practiceContent = document.getElementById("practice-content");

const quizContent = document.getElementById("quiz-content");


// =====================================================
// 3. DISPLAY LESSONS
// =====================================================

function showLesson() {

    const lesson = lessons[currentLesson];

    lessonContent.innerHTML = `

        <div class="lesson-viewer">

            <div class="lesson-progress">
                LESSON ${String(currentLesson + 1).padStart(2, "0")}
                OF ${String(lessons.length).padStart(2, "0")}
            </div>

            <h3>${lesson.title}</h3>

            ${lesson.content}

            <div class="lesson-controls">

                <button
                    id="previous-lesson"
                    ${currentLesson === 0 ? "disabled" : ""}
                >
                    Previous Lesson
                </button>

                <button
                    id="next-lesson"
                    ${currentLesson === lessons.length - 1 ? "disabled" : ""}
                >
                    Next Lesson
                </button>

            </div>

        </div>

    `;

    document.getElementById("previous-lesson")
        .addEventListener("click", () => {

            if (currentLesson > 0) {

                currentLesson--;

                showLesson();

            }

        });

    document.getElementById("next-lesson")
        .addEventListener("click", () => {

            if (currentLesson < lessons.length - 1) {

                currentLesson++;

                showLesson();

            }

        });

}


// =====================================================
// 4. OPEN LESSON FROM LESSON CARD
// =====================================================

function openLesson(index) {

    if (index < 0 || index >= lessons.length) {
        return;
    }

    currentLesson = index;

    showLesson();

    lessonContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =====================================================
// 5. EMAIL PHISHING EXERCISE
// =====================================================

function showEmailExercise() {

    practiceContent.innerHTML = `

        <div class="practice-box">

            <h3>Exercise 01: Identify the Phishing Email</h3>

            <p>
                Study the fictional email below.
                Identify the warning signs before revealing the explanation.
            </p>

            <div class="fake-email">

                <p><strong>From:</strong>
                security-alert@example.invalid</p>

                <p><strong>Subject:</strong>
                URGENT! Your Account Will Be Suspended</p>

                <hr>

                <p>Dear Customer,</p>

                <p>
                    Your account will be suspended today.
                    Click the link below to verify your password immediately.
                </p>

                <p><strong>VERIFY YOUR ACCOUNT NOW</strong></p>

                <p>
                    Thank you,<br>
                    Account Security Team
                </p>

            </div>

            <button id="reveal-email-answer">
                Reveal Warning Signs
            </button>

            <div id="email-feedback"></div>

        </div>

    `;

    document.getElementById("reveal-email-answer")
        .addEventListener("click", () => {

            document.getElementById("email-feedback").innerHTML = `

                <div class="success">

                    <h4>Warning Signs Identified</h4>

                    <ul>
                        <li>Creates unnecessary urgency.</li>
                        <li>Threatens account suspension.</li>
                        <li>Requests password verification.</li>
                        <li>Uses a generic greeting.</li>
                        <li>Sender identity has not been independently verified.</li>
                    </ul>

                    <p>
                        This is a fictional training example.
                        Never enter credentials into an unexpected link.
                    </p>

                </div>

            `;

        });

}


// =====================================================
// 6. URL INSPECTION EXERCISE
// =====================================================

function showURLExercise() {

    practiceContent.innerHTML = `

        <div class="practice-box">

            <h3>Exercise 02: Inspect a Suspicious URL</h3>

            <p>
                Examine the fictional URL below.
                Identify the actual hostname.
            </p>

            <div class="fake-email">

                <strong>
                    https://company.example.attacker.invalid/login
                </strong>

            </div>

            <label for="url-answer">
                What is the actual hostname?
            </label>

            <input
                type="text"
                id="url-answer"
                placeholder="Enter the hostname"
                autocomplete="off"
            >

            <button id="check-url">
                Check Answer
            </button>

            <div id="url-feedback"></div>

        </div>

    `;

    document.getElementById("check-url")
        .addEventListener("click", () => {

            const answer = document.getElementById("url-answer")
                .value.trim().toLowerCase();

            const feedback = document.getElementById("url-feedback");

            if (answer === "company.example.attacker.invalid") {

                feedback.innerHTML = `

                    <div class="success">

                        <h4>Correct Answer!</h4>

                        <p>
                            The actual hostname is
                            <strong>company.example.attacker.invalid</strong>.
                        </p>

                        <p>
                            The final domain is attacker.invalid,
                            not company.example.
                        </p>

                    </div>

                `;

            } else {

                feedback.innerHTML = `

                    <div class="error">

                        <h4>Not Quite!</h4>

                        <p>
                            Examine the complete hostname.
                            The correct hostname is:
                        </p>

                        <strong>
                            company.example.attacker.invalid
                        </strong>

                    </div>

                `;

            }

        });

}


// =====================================================
// 7. QUIZ QUESTIONS
// =====================================================

const questions = [

    {
        question: "What is phishing?",

        options: [
            "A method of backing up files",
            "A fraudulent attempt to steal sensitive information",
            "A computer hardware upgrade",
            "A network troubleshooting technique"
        ],

        answer: 1,

        explanation:
            "Phishing is a social engineering attack that tricks people into revealing sensitive information or performing unsafe actions."
    },

    {
        question: "Which of these is a common warning sign of a phishing email?",

        options: [
            "A familiar company logo",
            "An unexpected urgent request for your password",
            "A correctly addressed internal newsletter",
            "A routine meeting reminder"
        ],

        answer: 1,

        explanation:
            "Unexpected urgency and requests for passwords are common phishing warning signs."
    },

    {
        question: "What should you do before clicking a link in a suspicious email?",

        options: [
            "Click immediately",
            "Forward it to everyone",
            "Inspect the destination and verify the sender independently",
            "Reply with your password"
        ],

        answer: 2,

        explanation:
            "Inspect the destination carefully and verify unexpected requests through a trusted communication channel."
    },

    {
        question: "What is spear phishing?",

        options: [
            "A targeted phishing attack against a specific person or organisation",
            "A general computer virus scan",
            "A method of encrypting files",
            "A wireless network configuration"
        ],

        answer: 0,

        explanation:
            "Spear phishing uses personalised information to make a fraudulent message more convincing to a particular target."
    },

    {
        question: "You receive an email claiming your bank account will be blocked unless you verify your password through a link. What is the safest action?",

        options: [
            "Enter your password immediately",
            "Reply with your account details",
            "Verify through your bank's official app or website",
            "Forward the message to your contacts"
        ],

        answer: 2,

        explanation:
            "Never use an unexpected message link to verify your account. Contact your bank through its official app, website or known phone number."
    }

];


// =====================================================
// 8. START QUIZ
// =====================================================

function startQuiz() {

    currentQuestion = 0;

    score = 0;

    questionAnswered = false;

    showQuestion();

}


// =====================================================
// 9. DISPLAY QUIZ QUESTION
// =====================================================

function showQuestion() {

    const question = questions[currentQuestion];

    questionAnswered = false;

    quizContent.innerHTML = `

        <div class="quiz-box">

            <p>
                QUESTION ${currentQuestion + 1}
                OF ${questions.length}
            </p>

            <div class="progress-track">

                <div
                    class="progress-fill"
                    style="width:${
                        ((currentQuestion + 1) / questions.length) * 100
                    }%"
                ></div>

            </div>

            <h3>${question.question}</h3>

            <div class="quiz-options">

                ${question.options.map((option, index) => `

                    <button
                        class="quiz-option"
                        data-answer="${index}"
                    >
                        ${String.fromCharCode(65 + index)}.
                        ${option}
                    </button>

                `).join("")}

            </div>

            <div id="quiz-feedback" aria-live="polite"></div>

        </div>

    `;

    document.querySelectorAll(".quiz-option")
        .forEach(button => {

            button.addEventListener("click", () => {

                checkAnswer(Number(button.dataset.answer));

            });

        });

}


// =====================================================
// 10. CHECK QUIZ ANSWER
// =====================================================

function checkAnswer(selected) {

    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    const question = questions[currentQuestion];

    const feedback = document.getElementById("quiz-feedback");

    document.querySelectorAll(".quiz-option")
        .forEach(button => {

            button.disabled = true;

            const optionIndex = Number(button.dataset.answer);

            if (optionIndex === question.answer) {

                button.classList.add("correct-option");

            }

            if (
                optionIndex === selected &&
                selected !== question.answer
            ) {

                button.classList.add("wrong-option");

            }

        });

    if (selected === question.answer) {

        score++;

        feedback.innerHTML = `

            <div class="success">

                <strong>Correct Answer!</strong>

                <p>${question.explanation}</p>

            </div>

        `;

    } else {

        feedback.innerHTML = `

            <div class="error">

                <strong>Incorrect Answer.</strong>

                <p>${question.explanation}</p>

            </div>

        `;

    }

    const nextButton = document.createElement("button");

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "View Results"
            : "Next Question";

    nextButton.addEventListener("click", () => {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showResults();

        }

    });

    feedback.appendChild(nextButton);

}


// =====================================================
// 11. DISPLAY QUIZ RESULTS
// =====================================================

function showResults() {

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    const result = {

        score: score,

        total: questions.length,

        percentage: percentage,

        date: new Date().toLocaleDateString()

    };

    localStorage.setItem(
        "phishingTrainingResult",
        JSON.stringify(result)
    );

    quizContent.innerHTML = `

        <div class="quiz-results">

            <h3>Training Assessment Completed!</h3>

            <h2>${score} / ${questions.length}</h2>

            <h3>${percentage}%</h3>

            <p>
                ${
                    percentage >= 80
                    ? "Excellent work! You have successfully passed the assessment."
                    : "Keep learning. Review the lessons and try again."
                }
            </p>

            <p>
                <strong>Latest result:</strong>
                Saved in this browser.
            </p>

            ${
                percentage >= 80
                ? `

                    <input
                        type="text"
                        id="participant-name"
                        placeholder="Enter your full name"
                        maxlength="100"
                    >

                    <button id="certificate-button">
                        Generate Certificate
                    </button>

                `
                : `

                    <p>
                        You need at least 80% to qualify for a certificate.
                    </p>

                `
            }

            <br>

            <button id="retry-quiz">
                Retake Assessment
            </button>

        </div>

    `;

    if (percentage >= 80) {

        document.getElementById("certificate-button")
            .addEventListener("click", generateCertificate);

    }

    document.getElementById("retry-quiz")
        .addEventListener("click", startQuiz);

}


// =====================================================
// 12. GENERATE CERTIFICATE
// =====================================================

function generateCertificate() {

    const nameInput = document.getElementById("participant-name");

    if (!nameInput) {
        return;
    }

    const participantName = nameInput.value.trim();

    if (!participantName) {

        alert("Please enter your full name.");

        nameInput.focus();

        return;

    }

    if (score < Math.ceil(questions.length * 0.8)) {

        alert("You must pass the assessment before generating a certificate.");

        return;

    }

    // Escape special characters in the participant's name.

    const safeName = participantName.replace(
        /[&<>"']/g,
        character => ({

            "&": "&amp;",

            "<": "&lt;",

            ">": "&gt;",

            '"': "&quot;",

            "'": "&#39;"

        })[character]
    );

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    const completionDate = new Date().toLocaleDateString();

    const certificateWindow = window.open("", "_blank");

    if (!certificateWindow) {

        alert("Please allow pop-ups to generate your certificate.");

        return;

    }

    certificateWindow.document.write(`

        <!DOCTYPE html>

        <html lang="en">

        <head>

            <meta charset="UTF-8">

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Certificate of Completion</title>

            <style>

                * {
                    box-sizing: border-box;
                }

                body {
                    font-family: Georgia, serif;
                    background: #f1f5f9;
                    padding: 35px;
                    text-align: center;
                    color: #1e293b;
                }

                .certificate {
                    background: white;
                    border: 12px double #17365d;
                    padding: 55px 35px;
                    max-width: 950px;
                    margin: 20px auto;
                    min-height: 600px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .certificate-label {
                    color: #2563eb;
                    font-size: 14px;
                    letter-spacing: 4px;
                    font-weight: bold;
                }

                h1 {
                    color: #17365d;
                    font-size: 38px;
                    margin: 25px 0;
                }

                .participant {
                    color: #2563eb;
                    font-size: 36px;
                    margin: 20px 0;
                    overflow-wrap: anywhere;
                }

                .certificate p {
                    font-size: 17px;
                    line-height: 1.8;
                }

                .score {
                    font-size: 22px;
                    margin: 30px 0;
                    color: #17365d;
                }

                .footer {
                    margin-top: 50px;
                    font-size: 14px;
                }

                button {
                    background: #2563eb;
                    color: white;
                    padding: 13px 25px;
                    border: none;
                    border-radius: 7px;
                    cursor: pointer;
                    font-size: 15px;
                    margin: 20px;
                }

                @media print {

                    @page {
                        size: landscape;
                        margin: 10mm;
                    }

                    body {
                        background: white;
                        padding: 0;
                    }

                    .certificate {
                        margin: 0;
                        min-height: 170mm;
                        border: 10px double #17365d;
                    }

                    button {
                        display: none;
                    }

                }

            </style>

        </head>

        <body>

            <div class="certificate">

                <div class="certificate-label">
                    CYBERSECURITY AWARENESS TRAINING
                </div>

                <h1>CERTIFICATE OF COMPLETION</h1>

                <p>This certificate is proudly presented to</p>

                <h2 class="participant">${safeName}</h2>

                <p>
                    For successfully completing the
                    <strong>Phishing Awareness Training</strong>
                    under CodeAlpha Cybersecurity Internship Project 2.
                </p>

                <div class="score">
                    Assessment Score:
                    <strong>${percentage}%</strong>
                </div>

                <p>
                    Demonstrating knowledge of phishing detection,
                    social engineering awareness and cybersecurity
                    protection practices.
                </p>

                <div class="footer">

                    <p><strong>CodeAlpha Project 2</strong></p>

                    <p>Completion Date: ${completionDate}</p>

                    <p><strong>Think Before You Click.</strong></p>

                </div>

                <button onclick="window.print()">
                    Print / Save as PDF
                </button>

            </div>

        </body>

        </html>

    `);

    certificateWindow.document.close();

}


// =====================================================
// 13. INITIALISE WEBSITE
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // Connect all six lesson buttons.

    document.querySelectorAll(".start-lesson")
        .forEach(button => {

            button.addEventListener("click", () => {

                const lessonIndex = Number(button.dataset.lesson);

                openLesson(lessonIndex);

            });

        });


    // Connect practical exercises.

    document.getElementById("email-exercise-button")
        .addEventListener("click", showEmailExercise);

    document.getElementById("url-exercise-button")
        .addEventListener("click", showURLExercise);


    // Connect quiz start button.

    document.getElementById("start-quiz-button")
        .addEventListener("click", startQuiz);


    // Show the first lesson automatically.

    showLesson();

});


// =====================================================
// END OF CODEALPHA PROJECT 2 JAVASCRIPT
// =====================================================
