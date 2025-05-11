const input = document.getElementById('input');

function createRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const randomArray = new Uint8Array(length);
  crypto.getRandomValues(randomArray);
  randomArray.forEach((number) => {
    result += chars[number % chars.length];
  });
  return result;
}

const uuid = crypto.randomUUID();



function button_gen(){
    
    return input.value = crypto.randomUUID()
}
function clearInput(){
    const clear = "";
    input.value = clear;
}
function button(){
    let copyInput = document.querySelector('input');
    copyInput.select();
    document.execCommand("copy");

    // Show confirmation
    const msg = document.getElementById('copy-msg');
    msg.style.display = 'inline';
    setTimeout(() => {
        msg.style.display = 'none';
    }, 1200);
}
function checkStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { text: "Weak", color: "red" };
    if (strength === 3 || strength === 4) return { text: "Medium", color: "orange" };
    return { text: "Strong", color: "green" };
}

function button_gen() {
    const password = crypto.randomUUID();
    input.value = password;

    // Show strength
    const msg = document.getElementById('strength-msg');
    const strength = checkStrength(password);
    msg.textContent = `Strength: ${strength.text}`;
    msg.style.color = strength.color;
}