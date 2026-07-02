function getMonthlyReport(transactions){
    const now=new Date();
    const month=now.getMonth();

    let income=0;
    let expense=0;

    transactions.forEach(t=>{
        const tDate=new Date(t.date);

        if(tDate.getMonth()===month){
            if (t.amount >0) income+=t.amount;
            else expense+=Math.abs(t.amount);
        }
    });

    const savings=income-expense;

    return {
        income,  
        expense,
        savings
    };
}

    function showReport(transactions){
        const report=getMonthlyReport(transactions);

        console.log("Mothly Report");
        console.log("income:",report.income);
        console.log("Expense:",report.expense);
        console.log("Saving:",report.savings);

        if (report.savings >0){
            console.log("Great! You Saved Money this Month");
        }
        else{
            console.log("Warning! you spent more than you earned");
        }
    }
