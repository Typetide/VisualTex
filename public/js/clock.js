document.addEventListener('DOMContentLoaded', () => {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
    const digitalTime = document.querySelector('.digital-time');
    const dateElement = document.querySelector('.date');
    const dayElement = document.querySelector('.day');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const day = now.getDay();
        const date = now.getDate();
        const month = now.getMonth();
        const year = now.getFullYear();

        // Calcola gli angoli di rotazione per le lancette
        const secondsDegrees = ((seconds / 60) * 360);
        const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
        const hoursDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30);

        // Aggiorna lo stile delle lancette
        secondHand.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg) translateY(15%)`;
        minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg) translateY(15%)`;
        hourHand.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg) translateY(15%)`;

        // Aggiorna le informazioni digitali
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        digitalTime.textContent = `${formattedHours}:${formattedMinutes}`;
        dateElement.textContent = `${date} ${months[month]} ${year}`;
        dayElement.textContent = daysOfWeek[day];
    }

    // Aggiorna l'orologio ogni secondo
    setInterval(updateClock, 1000);

    // Esegui l'aggiornamento iniziale
    updateClock();
});