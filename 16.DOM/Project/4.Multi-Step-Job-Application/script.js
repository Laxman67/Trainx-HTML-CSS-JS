let currentStep = 0;
let progressValue = 20;
const steps = document.querySelectorAll('.step');
const progress = document.getElementById('progress-bar');
const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.prev');
const jobForm = document.getElementById('jobForm');
const resumeFrame = document.getElementById('resumeFrame');
const profileImage = document.getElementById('profileImg');

let applicationDataObject = new Object(); // or {}

jobForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(jobForm);
  const applicationDataObject = Object.fromEntries(formData);
  const pdfFile = applicationDataObject.resume;
  const imageFile = applicationDataObject.profile;
  console.log('Form Submitted');

  console.log(applicationDataObject);

  console.log(pdfFile);
  console.log(imageFile);

  resumeFrame.src = URL.createObjectURL(pdfFile);
  console.log(resumeFrame.src);

  profileImage.src = URL.createObjectURL(imageFile);

  // Show Data in Preview
  // resumeFrame.setAttribute(
  //   'src',
  //   URL.createObjectURL(applicationDataObject.resume.name)
  // );
});

nextBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    progressValue += 20;
    progress.style.width = `${progressValue}%`;
    currentStep++;
    showStep(currentStep);
  });
});

prevBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    progressValue -= 20;
    progress.style.width = `${progressValue}%`;
    currentStep--;
    showStep(currentStep);
  });
});

function showStep(index) {
  steps.forEach((step) => step.classList.remove('active'));

  steps[index].classList.add('active');
}
