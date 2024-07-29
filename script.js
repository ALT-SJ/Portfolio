

document.addEventListener('DOMContentLoaded', () => {
   
    const projects = [
        {
            title: 'Weather App',
            description: 'Know about current weather.',
            imageUrl: 'assets/project1.png',
            link: 'https://alt-sj.github.io/weather-app/'
        },
        {
            title: 'Rock Paper Scissor',
            description: 'Play RPS with computer.',
            imageUrl: 'assets/project2.png',
            link: 'https://alt-sj.github.io/Rock-Paper-Scissors/'
        },
        {
            title: 'TicTacToe',
            description: 'Play TicTacToe with your friends.',
            imageUrl: 'assets/project3.png',
            link: 'https://alt-sj.github.io/Tic-Tac-Toe/'
        },
        {
            title: 'Graph Visualizer',
            description: 'Visualize graph of mathematical functions.',
            imageUrl: 'assets/project4.png',
            link: 'https://alt-sj.github.io/Graph-Analizer/'
        },
        {
            title: 'Clock',
            description: 'Clock with timer and stop watch.',
            imageUrl: 'assets/project5.png',
            link: 'https://alt-sj.github.io/Clock/'
        },
        {
            title: 'Task Scheduler',
            description: 'Schedule your tasks in a proper way.',
            imageUrl: 'assets/project6.png',
            link: 'https://alt-sj.github.io/Task-Scheduler/'
        },
    ];

    const projectsContainer = document.querySelector('.projects-container');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;

        projectsContainer.appendChild(projectElement);
    });
});
