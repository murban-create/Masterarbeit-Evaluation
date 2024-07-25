const surveyLinks = [
    'https://urmowi2.questionpro.eu/t/AB3u2P5ZB3vxgK',
    'https://urmowi2.questionpro.eu/t/AB3u2P5ZB3vxiA',
    'https://urmowi2.questionpro.eu/t/AB3u2P5ZB3vxiB'
];

let currentLinkIndex = localStorage.getItem('currentLinkIndex') || 0;
document.getElementById('survey-link').href = surveyLinks[currentLinkIndex];
currentLinkIndex = (parseInt(currentLinkIndex) + 1) % surveyLinks.length;
localStorage.setItem('currentLinkIndex', currentLinkIndex);
