

      // Proteksi akses: redirect ke login jika belum login
      if (!localStorage.getItem("adminName")) {
        window.location.href = "login.html";
      }

      // Ambil nama admin dari localStorage/sessionStorage (setelah login)
      const adminName = localStorage.getItem("adminName") || "Admin";
      document.addEventListener("DOMContentLoaded", function () {
        // Sidebar admin name
        const sidebarAdmin = document.getElementById("sidebarAdminName");
        if (sidebarAdmin) sidebarAdmin.textContent = adminName;
        // Header user name
        const dashboardUserName = document.getElementById("dashboardUserName");
        if (dashboardUserName) dashboardUserName.textContent = adminName;
        // Welcome name
        const welcomeName = document.getElementById("welcomeName");
        if (welcomeName) welcomeName.textContent = adminName;
        // Profile name
        const profileName = document.getElementById("profileName");
        if (profileName) profileName.textContent = adminName;
      // Konfirmasi logout sebelum redirect
      document
        .getElementById("logoutBtn")
        .addEventListener("click", function (e) {
          e.preventDefault();
          Swal.fire({
            title: "Konfirmasi Logout",
            text: "Apakah Anda yakin ingin logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya, Logout",
            cancelButtonText: "Batal",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "login.html";
            }
          });
        });

        // Sidebar toggle
        const sidebar = document.getElementById("dashboardSidebar");
        const toggleBtn = document.getElementById("sidebarToggleBtn");
        if (toggleBtn && sidebar) {
          toggleBtn.addEventListener("click", function () {
            sidebar.classList.toggle("closed");
          });
        }

        // Tutup sidebar saat klik di luar sidebar (khusus mobile)
        document.addEventListener("click", function (e) {
          if (window.innerWidth <= 991) {
            const sidebar = document.getElementById("dashboardSidebar");
            const toggleBtn = document.getElementById("sidebarToggleBtn");
            if (
              sidebar &&
              !sidebar.classList.contains("closed") &&
              !sidebar.contains(e.target) &&
              e.target !== toggleBtn &&
              !toggleBtn.contains(e.target)
            ) {
              sidebar.classList.add("closed");
            }
          }
        });
      });
