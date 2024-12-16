const form = document.querySelector('form');
const inputDate = document.querySelector('input[name="current_date"]');
const cal = document.querySelector('.button');

cal.addEventListener('click', (e) => {
  e.preventDefault();
  const birthDate = new Date(inputDate.value);
  const today = new Date();
  const age = calculateAge(birthDate, today);
  alert(`Your age is: ${age} Years`); 
});

function calculateAge(birthDate, today) {
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}