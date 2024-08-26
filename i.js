document.getElementById("smsForm").addEventListener("submit", function(event) {
    event.preventDefault();       
    const message = document.getElementById("message").value;
        const smsUri = `sms:83373?&body=${encodeURIComponent(message)}`;
        window.location.href = smsUri;
    });