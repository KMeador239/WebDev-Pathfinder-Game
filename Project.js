document.getElementById("career-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const interest = document.getElementById("interest").value.toLowerCase().trim();
    const skills = document.getElementById("skills").value.trim();
    const education = document.getElementById("education").value;
    const environment = document.getElementById("environment").value.trim();

    console.log(`Interest: ${interest}, Skills: ${skills}, Education: ${education}, Environment: ${environment}`);

    document.getElementById("career-results").style.display = "none";
    document.getElementById("career-list").innerHTML = "";

    setTimeout(() => {
        fetchCareerSuggestions(interest, skills, education, environment);
    }, 500); // Simulating loading time
});

function fetchCareerSuggestions(interest, skills, education, environment) {
    // Example static data based on interest
    const careerData = {
        "technology": [
            { name: "Software Developer", description: "Develops applications and software.", education: "Bachelor's Degree", salary: "$80,000 - $120,000", jobLink: "#" },
            { name: "Data Scientist", description: "Analyzes and interprets complex data.", education: "Bachelor's Degree", salary: "$90,000 - $140,000", jobLink: "#" }
        ],
        "health": [
            { name: "Nurse", description: "Provides healthcare to patients.", education: "Associate's Degree", salary: "$60,000 - $90,000", jobLink: "#" },
            { name: "Physical Therapist", description: "Helps patients recover mobility.", education: "Doctorate", salary: "$70,000 - $100,000", jobLink: "#" }
        ],
        "arts": [
            { name: "Graphic Designer", description: "Creates visual content.", education: "Bachelor's Degree", salary: "$40,000 - $70,000", jobLink: "#" },
            { name: "Musician", description: "Performs and composes music.", education: "Varies", salary: "Varies", jobLink: "#" }
        ]
    };

    // Fetch the careers based on interest
    const careers = careerData[interest] || [];
    console.log(`Career Suggestions:`, careers);
    displayCareerSuggestions(careers);
}

function displayCareerSuggestions(careers) {
    document.getElementById("career-results").style.display = "block";
    const resultsDiv = document.getElementById("career-list");
    resultsDiv.innerHTML = "";

    console.log(`Displaying careers:`, careers);

    if (careers.length === 0) {
        resultsDiv.innerHTML = "No career suggestions found based on your input.";
    } else {
        careers.forEach(career => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h3>${career.name}</h3>
                <p><strong>Description:</strong> ${career.description}</p>
                <p><strong>Education Required:</strong> ${career.education}</p>
                <p><strong>Salary Range:</strong> ${career.salary}</p>
                <a href="${career.jobLink}" target="_blank">Learn More or Apply</a>
            `;
            resultsDiv.appendChild(listItem);
        });
    }
}