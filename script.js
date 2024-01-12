document.getElementById('activityForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var dayRating = document.getElementById('dayRating').value;
    var materialsProduced = document.getElementById('materialsProduced').value;
    var planForTomorrow = document.getElementById('planForTomorrow').value;

    console.log(dayRating, materialsProduced, planForTomorrow);
    // Aqui você vai adicionar a lógica para enviar os dados para a planilha
});
