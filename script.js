const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(input.value);

    if (input.value.trim() === "") {
        errorMessage.textContent = "Tidak ada kegiatan kamu!";
        input.classList.add("invalid");
        input.classList.remove("valid");
        return;

    } else {
        const itemBaru = document.createElement("li");
        itemBaru.textContent = input.value;
        list.append(itemBaru);

        const itemHapus = document.createElement("button");
        itemHapus.textContent = "Hapus";
        itemBaru.append(itemHapus);

        itemHapus.addEventListener("click", function() {
            itemBaru.remove()
            })

        input.value = "";

        errorMessage.textContent = "";

        itemBaru.addEventListener("click", function(){
            this.classList.toggle("selesai");
            })

        input.classList.remove("invalid");
        input.classList.add("valid")
    }
    
})