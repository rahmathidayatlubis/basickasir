const totalBelanjaInput = document.getElementById('totalBelanja');
let diskon = document.getElementById('diskon');
let totalHarga = document.getElementById('totalHarga');
const tunaiInput = document.getElementById('tunai');
let kembalian = document.getElementById('kembalian');

const imput = document.getElementsByClassName('input');

for(let i=0; i<imput.length; i++){
    let input = imput[i];

    input.addEventListener('input', function(e){
        let TB = parseInt(totalBelanjaInput.value);
        let TN = parseInt(tunaiInput.value);
        let dis = 0;
        let totH = 0;

        if(TB > 300000){
            dis = 5;
        } else if(TB > 100000){
            dis = 3;
        }

        diskon.value = `${dis}%`;
        totH = TB - (dis / 100) * TB;
        totalHarga.value = totH;
        if(TN < totH){
            kembalian.value = NULL;
        } else{
            kembalian.value = TN - totH;
        }
        

    });

}

