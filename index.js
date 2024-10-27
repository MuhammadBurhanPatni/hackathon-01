function generateResume() {
    // Prevent form from submitting and refreshing the page
    event.preventDefault();

    // Get form values
    const fullName = document.querySelector('input[name="full name"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const phone = document.querySelector('input[name="number"]').value;
    const education = document.querySelector('select[name="Education"]').value;
    const skills = document.querySelector('input[name="Skills"]').value;
    const experience = document.querySelector('textarea[name="exp"]').value;

    const resumeContent = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;

   
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumePreview').style.display = 'block';
}

function downloadPDF() {
    
    alert('Download PDF functionality is not implemented yet.');
}
