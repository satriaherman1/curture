function submitForm(form) {
  event.preventDefault();

  Swal.fire({
    title: "Berhasil Mendaftar!",
    text: "Berhasil mendaftar sebagai anggota, kami akan mengirimkan email ke alamat email anda",
    icon: "success",
  }).then((res) => {
    if (res.isConfirmed) {
      window.location.href = "/";
    }
  });
}
