let transactions=storage.get();
const form=document.getElementById("form");
const list=document.getElementById("list")
const  balanceE1=document.getElementById("balance");
const incomeE1=document.getElementById("income");
const expenseE1=document.getElementById("expense");


const search=document.getElementById("search");
const filter = document.getElementById("filter");

const themeToggle=document.getElementById("themetoggle");

function render(){
    let data=[...transactions];

    data=filterData(data,filter.value);

    if(search.value){
        data=data.filter(t=>
            t.desc.toLowerCase().includes(search.value.toLowerCase())
        );
    }
       
    list.innerHTML="";
    data.forEach((t)=>{
        const li=document.createElement("li");
        li.innerHTML=`
        <span>${t.desc} (${t.category})</span>
        <span>₹${t.amount}</span>
        <button class="delete-btn" data-id="${t.id}">❌</button>
        `;
        list.appendChild(li);
    });

  
    const summary=calculateSummary(transactions);

    incomeE1.innerText=summary.income
    expenseE1.innerText=summary.expense;
    balanceE1.innerText=summary.balance;
    storage.save(transactions);
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    transactions.push({
     id:Date.now(),
     desc:desc.value,
     amount:+amount.value,
     category:category.value,
     date:new Date()
    });
 
    form.reset();
    render();

});

list.addEventListener("click",(e)=>{
    if (e.target.classList.contains("delete-btn")){
        const id=Number(e.target.dataset.id);
        transactions=transactions.filter(t=>t.id!==id);
        render();
    } 
});


search.addEventListener("input",render);
filter.addEventListener("change",render);

themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});
 
function  showMonthlyReport(){
    const report=getMonthlyReport(transactions);
     alert(
        `Monthly Report\n`+
        `Income:₹${report.income}\n`+
        `Expense:₹${report.expense}\n`+
        `Savings"₹${report.savings}\n\n`+
        (report.savings > 0
        ? "Grate Job! You Saved Money"
        : "Warning! you spent more than you earned")
     );
}
window.showMonthlyReport=showMonthlyReport;

render();
