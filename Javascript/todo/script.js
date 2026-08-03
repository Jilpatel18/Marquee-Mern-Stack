const text = document.getElementById('text')
const Btn = document.querySelector(".btn")
const list = document.querySelector(".list")
Btn.addEventListener("click",()=>{
    const li = document.createElement("li")
    li.innerHTML = `<span>${text.value}</span>

                <div class="btn-group">
                    <button class="complete-btn">Complete</button>
                    <button class="remove-btn">Remove</button>
                </div>`;
    list.appendChild(li)
    text.value=""
    const completeBtn = li.querySelector(".complete-btn")
    const removeBtn = li.querySelector(".remove-btn")
    completeBtn.addEventListener("click",()=>{
        const pare = completeBtn.parentElement
        const listItem = pare.parentElement
        const text = listItem.querySelector("span")
        text.style.textDecoration = "line-through"
        pare.removeChild(completeBtn)
     })
    removeBtn.addEventListener("click",()=>{
        li.remove()
    })
})