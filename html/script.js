// RGB Colors with JS by Mr. M

// Event Listener
document.getElementById("preview-btn").addEventListener("click", rgbPreview);

// Event Function
function rgbPreview() {
    // Input: get red green blue values
    let rValue = document.getElementById("redIn").value;
    let gValue = document.getElementById("greenIn").value;
    let bValue = document.getElementById("blueIn").value;

    // Progress: build rgb string rgb(__, __, __)
    let rgbString = "rgb(" + rValue + ",  " + gValue + ", " + bValue + ")";

    // Output: display rgb string and update the color preview
    document.getElementById("rgbStrout").innerHTML = rgbString;
    document.getElementById("display").style.background = rgbString

}