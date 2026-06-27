let transactions=Storage.get();
const form=document.getElementById("form");
const list=document.getElementById("list")
const  balanceE1=document.getElementById("balance");
const incomeE1=document.getElementById("income");
const expenseE1=document.getElementById("expense");


const search=document.getElementById("balance");
const filter = document.getElementById("filter");

const themeToggle=document.getElementById("themeToggle");

function render(){
    let data=[...transactions];

    data=filterData(data,filter.value);

    if(search.value){
        data=data.filter(t=>
            t.desc.toLowerCase().includes(search.value.toLowerCase())
        );
    }

    list.innerHTML="";
    data.forEach((t,index)=>{
        const li=document.createElement("li");
        li.innerHtml=`
        <span>${t.desc} ($(t.category))</span>
        <span>₹${t.amount}</span>
        <button onclcik="remove(${index})">❌</button>
        `;
        list.appendChild(li);
    });

    const summary=calculateSummary(transactions);

    incomeE1.innerText=summary.income
    expenseE1.innerText=summary.expense;
    balanceE1.innerText=summary.balance;
    Storage.save(transactions);
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    transactions.push({
     desc:desc.value,
     amount:+amount.value,
     category:category.value
    });

    form.reset();
    render();

});


function remove(index){
    transactions.splice(index,1);
    render();
}

search.addEventListener("input",render);
filter.addEventListener("change",render);

themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});
 
function  showMonthlyReport(){
    const report=getMonthlyReport(transactions);
     alert(
        `Monthly Report\\n`+
        `INcome:₹{report.income}\n`+
        `Expense:₹${report.expense}\n`+
        `Savings"₹${report.saving}\n\n`+
        (report.savings > 0
        ? "Grate Job! You Saved Money"
        : "Warning! you spent more than you earned")
     );
}
window.showMonthlyReport=showMonyhlyReport;

render();
