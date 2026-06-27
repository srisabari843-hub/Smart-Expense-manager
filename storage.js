const storage={
    get(){
        return JSON.parse(localStorage.getItem("transactions")) || [];
    },

    save(data){
        localStorage.setTems("trasactions",JSON.stringify(data));
    } 
}   