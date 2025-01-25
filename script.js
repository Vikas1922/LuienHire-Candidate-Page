
// Add functionality for buttons
function startNow() {
    alert("Redirecting to the Mock Interview section.");
}

function viewJobs() {
    alert("Redirecting to the Job Listings page.");
}

function submitResume() {
    alert("Redirecting to the Resume Submission page.");
}

// Add hover animations for offerings
const offerings = document.querySelectorAll(".offering");

offerings.forEach((offering) => {
    offering.addEventListener("mouseenter", () => {
        offering.style.backgroundColor = "#e6f2ff";
    });
    offering.addEventListener("mouseleave", () => {
        offering.style.backgroundColor = "#ffffff";
    });
});

// Add a smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
