let profileViewCount = localStorage.getItem('profileViewCount') || 0;
profileViewCount++;
localStorage.setItem('profileViewCount', profileViewCount);

document.getElementById('profile-view-count').textContent = ` ${profileViewCount} Visit`;
