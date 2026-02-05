let profileViewCount = localStorage.getItem("profileViewCount") || 0;
profileViewCount++;
localStorage.setItem("profileViewCount", profileViewCount);

// Commented out - element doesn't exist in HTML
// document.getElementById('profile-view-count').textContent = ` ${profileViewCount} Visit`;
