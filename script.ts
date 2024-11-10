//element listing
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();


    //type assertion

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById('name') as HTMLInputElement
    const fnameElement = document.getElementById('fname') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement
    const phoneElement = document.getElementById('phone') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLInputElement 
    const experienceElement = document.getElementById('experience') as HTMLInputElement
    const skillsElement = document.getElementById('skills') as HTMLInputElement

    if (profilePictureInput && nameElement && fnameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){


        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        const name = nameElement.value;
        const fname = fnameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
    

    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">` : ''};
    <p><strong>Full Name:</strong> ${name} </p>
    <p><strong>Father Name:</strong> ${fname} </p>
    <p><strong>Email Address:</strong> ${email} </p>
    <p><strong>Phone Number:</strong> ${phone} </p>

    <h3>Education:</h3>
    <p>${education}</p>

     <h3>Experience:</h3>
    <p>${experience}</p>

     <h3>Skills:</h3>
    <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById(`resumeOutput`)
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{
        console.error('the resume output elements are missing')
    }
}else{
        console.error(`one or more elements are missing`)
}
})