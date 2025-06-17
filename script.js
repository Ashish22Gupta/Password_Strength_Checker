function checkPassword() {
            const password = document.getElementById('password').value;
            const strengthMeter = document.getElementById('strength-meter');
            const feedback = document.getElementById('feedback');
            
            feedback.className = 'feedback';
            
            const hasLength = password.length >= 8;
            const hasLowercase = /[a-z]/.test(password);
            const hasUppercase = /[A-Z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecial = /[@_\.!]/.test(password);
            
            updateIcon('length-icon', 'length-text', hasLength, 'At least 8 characters');
            updateIcon('lowercase-icon', 'lowercase-text', hasLowercase, 'At least one lowercase letter');
            updateIcon('uppercase-icon', 'uppercase-text', hasUppercase, 'At least one uppercase letter');
            updateIcon('number-icon', 'number-text', hasNumber, 'At least one number');
            updateIcon('special-icon', 'special-text', hasSpecial, 'At least one special character (@ _ . !)');
            
            let strength = 0;
            if (hasLength) strength += 20;
            if (hasLowercase) strength += 20;
            if (hasUppercase) strength += 20;
            if (hasNumber) strength += 20;
            if (hasSpecial) strength += 20;
            
            strengthMeter.style.width = strength + '%';
            
            if (strength < 40) {
                strengthMeter.style.backgroundColor = "#f72585";
            } else if (strength < 80) {
                strengthMeter.style.backgroundColor = "#f8961e";
            } else {
                strengthMeter.style.backgroundColor = "#4cc9f0";
            }
        }
        
        function updateIcon(iconId, textId, isValid, text) {
            const icon = document.getElementById(iconId);
            const textElement = document.getElementById(textId);
            
            if (isValid) {
                icon.textContent = '✓';
                icon.className = 'requirement-icon valid';
                textElement.style.textDecoration = 'line-through';
                textElement.style.color = 'var(--gray)';
            } else {
                icon.textContent = '✗';
                icon.className = 'requirement-icon invalid';
                textElement.style.textDecoration = 'none';
                textElement.style.color = 'var(--dark)';
            }
            
            textElement.textContent = text;
        }
        
        function submitPassword() {
            const password = document.getElementById('password').value;
            const feedback = document.getElementById('feedback');
            
            const hasLength = password.length >= 8;
            const hasLowercase = /[a-z]/.test(password);
            const hasUppercase = /[A-Z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecial = /[@_\.!]/.test(password);
            
            if (hasLength && hasLowercase && hasUppercase && hasNumber && hasSpecial) {
                feedback.textContent = '✅ Your password is strong and secure!';
                feedback.className = 'feedback success';
            } else {
                feedback.textContent = '⚠️ Your password does not meet all requirements';
                feedback.className = 'feedback error';
            }
        }
