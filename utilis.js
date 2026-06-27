function calculatesummary(data){
    let income=0;
    let expense=0;
    data.forEach(t=>{
        if (t.amount >0) income+=t.amount;
        else expese+=Math.abs(t.amount);
        
    })
}