let score = prompt("Nilai"); {
    if (score <= 100 && score >= 90) {
         alert('A')
    } else if (score <= 89 && score >= 75) {
        alert('B')
    } else if (score <= 74 && score >= 60) {
        alert('C')
    } else if (score <= 59 && score >= 50) {
        alert('D')
    } else alert('Tidak Lulus')
}
