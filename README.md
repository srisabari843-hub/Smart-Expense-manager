Smart Expense Manager
   =>A lightWeight browser-based app for tracking income and expense,built with plain,HTML,CSS,and JavaScript. 
   =>Daya is Stored locally in the browser-no backend or database is required.


Overview
  smart expense manager lets you log income and expense transactions, see a live running balance,search and filter your history,swith between light and dark themes,and view a monthly savings report,All data persist in the browser via localStorage.

Features
  =>Add transaction-description,amount(+Icome/-expense),and category.
  =>Live summary-Balance,Income,and Expense update automatically on every charge.
  =>Filter-view All,Income-only,or expense-only transactions.
  =>Search- filter the list by Typing part of a description.
  =>Delete-remove any transaction with one click.
  =>Monthly report-run showMonthlyReport() in the console for an income/expense/savings summary
  =>persistence-transactions are saved to localStorage and reload automatically.


Project Structures
    index.html
    style.css
    utils.js
    storage.js
    report.js
    app.js

File DEscription
  index.html==>Page Structure: header,summary bar, search/filter controls,add-transaction form,and transaction list.
  Style.css==>Visual Styling:layout,spacing,and appearance of list  and form.
  utils.js==>pure Helper functions:calculateSummary() totals income/expense/balance,filterData() filterData() filter by type.
  stoarge.js==>Persistence layer:storage.get() and storage.save() wrap loca;Storage to load/save trannsactions.
  report.js==>Monthly reporting:getMonthlyReport() totals this month's transactions,showReport() logos it to console.

  

Getting Started
    1 File Setup
      Place all seven files (index.html,style.css,utils.js,app.js,storage.js,report.js) in same folder.
    2 Script Load order
      utils.js
      storage.js
      report.js
      app.js
    3 Run it
      Open index html directly in a browser,or serve the folder with local dev server(VS code's LiveServer).
How To Use
  =>Fill description,Amount,Category,then Click AddTransaction.Use a positive amount for income,negative amount for an expense.
  =>Type in the search box to filter transactions by description.
  =>Use the Drop Down to show All,Income,Expense transactions.
  =>Click the next to Any transaction to delete it.
  =>click to toggle dark mode.
  =>Open the browser console and run showMothlyReport() to see this months's income,expense,and savings.

Quick Test
  => Add "Salary July" / ₹50000/ salary,then "Groceries"/ ₹-1200 / food.Expect Income  ₹50000,Expense  ₹1200,Balance  ₹48800,both rows listed Correctly,and data still present after refreshing the page.

Tech Stack
    HTML
    CSS
    JSS




