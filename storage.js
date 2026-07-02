const storage={
    get(){
        return JSON.parse(localStorage.getItem("transactions")) || [];
    },

    save(data){
        localStorage.setItem("transactions",JSON.stringify(data));
    } 
}   