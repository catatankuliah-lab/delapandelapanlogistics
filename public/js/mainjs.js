


$(document).ready(function () {
    // Fungsi Logout
    function logout() {
        Swal.fire({
            title: 'Logout',
            text: 'Apakah Anda yakin?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, Logout!',
            cancelButtonText: 'Batalkan!',
            confirmButtonColor: '#696CFF',
            cancelButtonColor: '#8492A2'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "Logout",
                    text: "Logout berhasil",
                    showConfirmButton: false,
                    timer: 3000,
                }).then(() => {
                    window.location.href = "auth/logout";
                });
            }
        });
    }

    // Mengatur Navigasi
    $('#navigasi li.active').removeClass('active');
    $('#dashboard').addClass('active');
    $('#namapage').text('Dashboard');
    $('#buttondashboard').on('click', function () {
        $('#navigasi li.active').removeClass('active');
        $('#dashboard').addClass('active');
        $('#namapage').text('Dashboard');
        dashboard();
    });
    $('#buttonmobil').on('click', function () {
        $('#navigasi li.active').removeClass('active');
        $('#mobil').addClass('active');
        $('#namapage').text('Mobil');
    });
    $('#buttondriver').on('click', function () {
        $('#navigasi li.active').removeClass('active');
        $('#driver').addClass('active');
        $('#namapage').text('Driver');
    });
    $('#buttontambahmaintenance').on('click', function () {
        $('#navigasi li.active').removeClass('active');
        $('#tambahmaintenance').addClass('active');
        $('#namapage').text('Tambah Maintenance');
    });
    $('#buttonriwayatmaintenance').on('click', function () {
        $('#navigasi li.active').removeClass('active');
        $('#riwayatmaintenance').addClass('active');
        $('#namapage').text('Riwayat Maintenance');
    });
    $('#buttonlogout').on('click', function () {
        logout();
    });
});