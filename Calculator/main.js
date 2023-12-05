const display = document.querySelector("#display");
const Buttons = document.querySelectorAll("Button");

Buttons.forEach((btn) => 
{
    btn.addEventListener("click", () => 
    {
        if(btn.id === "=")
        {
            display.value = eval(display.value);
        }
        else if (btn.id === "AC")
        {
            display.value = "";
        }
        else if (btn.id == "C")
        {
            display.value = display.value.slice(0, -1);
        
        }
        else
        {
            display.value += btn.id
        }
    });
});
