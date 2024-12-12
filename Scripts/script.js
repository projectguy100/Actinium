// Get the main element
const main = document.querySelector('main');

// Define the software list
const softwareList = [
    {
        name: 'Google Chrome',
        image: 'https://www.google.com/chrome/assets/common/images/chrome-logo.png',
        description: 'A fast and secure web browser',
        downloadLink: 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B9A2F5F5F-5F5F-5F5F-5F5F-5F5F5F5F5F5F%7D%26lang%3Den%26browser%3D4%26usagestats%3D1%26appguid%3D%7BNONCE%7D%26dguid%3D%7BNONCE%7D%26brand%3DGCEB/dl/chrome/install/GoogleChromeEnterpriseBundle.zip',
    },
    {
        name: 'Mozilla Firefox',
        image: 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png',
        description: 'A fast and secure web browser',
        downloadLink: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US',
    },
    // Add more software items here...
];

// Function to display the software list
function displaySoftwareList() {
    softwareList.forEach((software) => {
        const softwareListElement = document.createElement('div');
        softwareListElement.classList.add('software-list');

        const image = document.createElement('img');
        image.src = software.image;
        softwareListElement.appendChild(image);

        const h2 = document.createElement('h2');
        h2.textContent = software.name;
        softwareListElement.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = software.description;
        softwareListElement.appendChild(p);

        const downloadLink = document.createElement('a');
        downloadLink.href = software.downloadLink;
        downloadLink.textContent = 'Download';
        softwareListElement.appendChild(downloadLink);

        main.appendChild(softwareListElement);
    });
}

// Call the function to display the software list
displaySoftwareList();