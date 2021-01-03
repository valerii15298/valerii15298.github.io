const skills = document.querySelector('#hard-skills div > ul');

// Skill elements

let elements = {
    'Software engineering': {
        url: 'https://en.wikipedia.org/wiki/Software_engineering',
        children: [6, 12, 16, 17, 18],
    },
    'Web': {
        url: 'https://developer.mozilla.org/en-US/docs/Web',
        children: [19, 26],
    },
    'Programming languages': {
        url: 'https://en.wikipedia.org/wiki/List_of_programming_languages',
        children: [30, 31, 33, 34, 35, 36],
    },
    'Databases': {
        url: 'https://en.wikipedia.org/wiki/Database',
        children: [37, 40],
    },
    'Frameworks/Libraries': {
        url: 'https://en.wikipedia.org/wiki/Software_framework',
        children: [21, 22, 27, 32, 44, 45, 46],
    },
    'DevOps': {
        url: 'https://en.wikipedia.org/wiki/DevOps',
        children: [47, 50, 54],
    },
    'Software design patterns': {
        url: 'https://en.wikipedia.org/wiki/Software_design_pattern',
        children: [7, 8, 9, 10, 11],
    },
    'SOLID': {
        url: 'https://en.wikipedia.org/wiki/SOLID',
        children: [],
    },
    'KISS': {
        url: 'https://en.wikipedia.org/wiki/KISS_principle',
        children: [],
    },
    'YAGNI': {
        url: 'https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it',
        children: [],
    },
    'DRY': {
        url: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself',
        children: [],
    },
    'MVC': {
        url: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
        children: [],
    },
    'API building/integration': {
        url: 'https://en.wikipedia.org/wiki/API#:~:text=An%20application%20programming%20interface%20(API,the%20conventions%20to%20follow%2C%20etc.',
        children: [13, 14],
    },
    'REST': {
        url: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
        children: [],
    },
    'GraphQL': {
        url: 'https://graphql.org/',
        children: [15],
    },
    'Apollo': {
        url: 'https://www.apollographql.com/',
        children: [30],
    },
    'Abstract algebra': {
        url: 'https://www.youtube.com/watch?v=IP7nW_hKB7I',
        children: [],
    },
    'Math': {
        url: 'https://en.wikipedia.org/wiki/Mathematics',
        children: [],
    },
    'Algorithms theory': {
        url: 'https://en.wikipedia.org/wiki/Algorithmic_information_theory',
        children: [],
    },
    'Back end': {
        url: 'https://en.wikipedia.org/wiki/Front_end_and_back_end',
        children: [3, 20, 21, 22, 23],
    },
    'Node.js': {
        url: 'https://nodejs.org/en/',
        children: [],
    },
    'Express.js': {
        url: 'https://expressjs.com/',
        children: [],
    },
    'Laravel': {
        url: 'https://laravel.com/',
        children: [],
    },
    'Web servers': {
        url: 'https://en.wikipedia.org/wiki/Web_server',
        children: [24, 25],
    },
    'Apache': {
        url: 'https://httpd.apache.org/',
        children: [],
    },
    'Nginx': {
        url: 'https://www.nginx.com/',
        children: [],
    },
    'Front end': {
        url: 'https://en.wikipedia.org/wiki/Front_end_and_back_end',
        children: [27, 28, 29, 30, 31, 32],
    },
    'React.js': {
        url: 'https://reactjs.org/',
        children: [],
    },
    'HTML': {
        url: 'https://en.wikipedia.org/wiki/HTML',
        children: [],
    },
    'CSS': {
        url: 'https://en.wikipedia.org/wiki/CSS',
        children: [],
    },
    'JavaScript': {
        url: 'https://en.wikipedia.org/wiki/JavaScript',
        children: [],
    },
    'TypeScript': {
        url: 'https://www.typescriptlang.org/',
        children: [],
    },
    'GTK': {
        url: 'https://www.gtk.org/',
        children: [],
    },
    'Python': {
        url: 'https://www.python.org/',
        children: [],
    },
    'PHP': {
        url: 'https://www.php.net/',
        children: [],
    },
    'C': {
        url: 'https://en.wikipedia.org/wiki/C_(programming_language)',
        children: [],
    },
    'Java, C#, C++ - basic knowledge': {
        url: 'https://en.wikipedia.org/wiki/List_of_object-oriented_programming_languages',
        children: [],
    },
    'SQL': {
        url: 'https://en.wikipedia.org/wiki/SQL',
        children: [38, 39],
    },
    'MySQL': {
        url: 'https://www.mysql.com/',
        children: [],
    },
    'PostgreSQL': {
        url: 'https://www.postgresql.org/',
        children: [],
    },
    'NoSQL': {
        url: 'https://en.wikipedia.org/wiki/NoSQL',
        children: [41, 42, 43],
    },
    'MongoDB': {
        url: 'https://www.mongodb.com/',
        children: [],
    },
    'DynamoDB': {
        url: 'https://en.wikipedia.org/wiki/Amazon_DynamoDB',
        children: [],
    },
    'Firestore': {
        url: 'https://firebase.google.com/docs/firestore',
        children: [],
    },
    'Puppeteer.js': {
        url: 'https://pptr.dev/',
        children: [],
    },
    'Tkinter': {
        url: 'https://en.wikipedia.org/wiki/Tkinter',
        children: [],
    },
    'Selenium': {
        url: 'https://www.selenium.dev/',
        children: [],
    },
    'Cloud platforms': {
        url: 'https://en.wikipedia.org/wiki/Category:Cloud_platforms',
        children: [48, 49],
    },
    'GCP': {
        url: 'https://cloud.google.com/',
        children: [],
    },
    'AWS': {
        url: 'https://aws.amazon.com/',
        children: [],
    },
    '*NIX': {
        url: 'https://en.wikipedia.org/wiki/Unix-like',
        children: [51, 52, 53],
    },
    'Linux': {
        url: 'https://en.wikipedia.org/wiki/Linux',
        children: [],
    },
    'Bash': {
        url: 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)',
        children: [],
    },
    'Zsh': {
        url: 'https://en.wikipedia.org/wiki/Z_shell',
        children: [],
    },
    'CI/CD': {
        url: 'https://en.wikipedia.org/wiki/CI/CD',
        children: [55],
    },
    'Jenkins': {
        url: 'https://www.jenkins.io/',
        children: [],
    },
};

for (let keyName in elements) {
    elements[keyName].parents = new Set();
    elements[keyName].children = new Set(elements[keyName].children);
}

const rootElements = [0, 1, 2, 3, 4, 5];

const elementNames = Object.keys(elements);

elementNames.forEach((keyName, parentIndex) => {
    elements[keyName].children.forEach(index => {
        elements[elementNames[index]].parents.add(parentIndex);
    });

});

// console.log(elements, rootElements);

function displayElement(id, parentNode) {
    const keyName = elementNames[id];
    const details = document.createElement('details');
    parentNode.appendChild(details);
    const summary = document.createElement('summary');
    details.appendChild(summary);
    if (elements[keyName].children) {
        const ul = document.createElement('ul');
        details.appendChild(ul);
        displayElements(elements[keyName].children, ul);
    }
    summary.innerText = keyName;
}

function displayElements(ids, parentNode) {
    ids.forEach(id => {
        const li = document.createElement('li');
        parentNode.appendChild(li);
        displayElement(id, li);
    });
}

displayElements(rootElements, skills);

// function displayElement(id) {
//     const keyName = elementNames[id];
//     const span = document.createElement('span');
//     span.innerText = keyName;
//     span.onclick = () => {
//         displayElements(elements[keyName].children);
//     }
//     test.appendChild(span);
// }

// function displayElements(ids) {
//     test.innerHTML = '';
//     ids.forEach(displayElement);
// }

// displayElements(rootElements);

const actualHeaderHeight = document.getElementById('self-photo').offsetHeight.toString() + 'px';
document.getElementById('self-photo').hidden = true;
document.getElementById('header').style.height = actualHeaderHeight;
document.getElementById('header-content').style.height = actualHeaderHeight;
