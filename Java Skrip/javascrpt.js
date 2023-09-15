
        function Halo(){
            alert("Halo Java Script");
        }
        function Waktu(){
            document.getElementById('Waktu').innerHTML=Date();
        }
        function Zodiak(){
            let Tanggal=document.getElementById('tanggal').value;
            let bulan=document.getElementById('Bulan').value;
            let Zodiak="Tidak Tahu"
            if(bulan==1){
                if(Tanggal>0 && Tanggal<21){
                Zodiak="Aries";
            }
                if(Tanggal>20 && Tanggal<30){
                    Zodiak="Leo";
                }
            }
            if(bulan==2){
                if(Tanggal>0 && Tanggal<20){
                    Zodiak="Kakap";
                }
            }
        document.getElementById('zodiak').innerHTML=Zodiak;
        }
        function kali(){
            let a=document.getElementById('bil1').value;
            let b=document.getElementById('bil2').value;       
            let Hasil = a*b;
            document.getElementById('hasil').innerHTML=Hasil;
        } function bagi(){
            let a=document.getElementById('bil1').value;
            let b=document.getElementById('bil2').value;
            let Hasil =a/b;
            document.getElementById('hasil').innerHTML=Hasil;
        } function tambah(){
            let a=document.getElementById('bil1').value;
            let b=document.getElementById('bil2').value;
            let Hasil=parseInt(a)+parseInt(b);
            document.getElementById('hasil').innerHTML=Hasil;
        } function Kurang(){
            let a=document.getElementById('bil1').value;
            let b=document.getElementById('bil2').value;
            let Hasil=a-b;
            document.getElementById('hasil').innerHTML=Hasil;
        }
        function nama(){
            document.getElementById('saya').innerHTML="dani Tzy Alok Geming";
        }
        function Namasaya(){
            document.getElementById('saya').innerHTML=document.getElementById('Nama').value;
        }

        let btn= document.getElementById('jam')
        btn.onclick=function(){
            document.getElementById('waktu').innerHTML=Date();
        }

        let isi=document.getElementById('ketik');
        let tampil=document.getElementById('waktu');
        isi.onkeydown=function(){
            tampil.innerHTML=isi.value;
        }
        let hari=document.getElementById('hari');
        hari.addEventListener("mouseover",coba);

        function coba(){
            alert("coba coba");
        }

        let ja=document.getElementById('zodiai');
        ja.addEventListener("click",Zodiak);
