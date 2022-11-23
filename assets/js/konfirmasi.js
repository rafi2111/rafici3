function hapusMenu(url) {
    swal.fire({
        title: 'Yakin kidzz?',
                text: "beneran nih",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if(result.value) {
            document.location.href = url;
        }
    })
}

