function calculateSummary(data){
    let income=0;
    let expense=0;
    data.forEach(t=>{
        if (t.amount >0) income+=t.amount;
        else expense+=Math.abs(t.amount);
    });

    return {
        income,
        expense,
        balance:income-expense
    };
}

function filterData(data,type){
    if (type==="income") return data.filter(t=>t.amount > 0);
    if (type==="expense") return data.filter(t=>t.amount < 0);
    return data;
}